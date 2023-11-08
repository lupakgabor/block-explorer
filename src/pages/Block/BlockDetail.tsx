import {useParams} from "react-router-dom";
import {Container, Navbar} from "@/components";
import {Card, CardBody, Chip, Progress, Typography} from "@material-tailwind/react";
import {ReactNode, useContext, useEffect, useState} from "react";
import alchemy from "@/services/alchemy";
import {BlockWithTransactions} from "alchemy-sdk";
import BlockChainContext from "@/context/BlockChain";
import {formatDigits, formatUnits} from "@/services/utils";

type BlockDetailItems = {
    label: string;
    item: string | ReactNode;
    divider?: boolean;
}

export const BlockDetail = () => {
    const {blockNumber} = useParams();
    const { latestBlock } = useContext(BlockChainContext);
    let items: BlockDetailItems[] = [];
    const [block, setBlock] = useState<BlockWithTransactions>();

    useEffect(() => {
        (async () => {
            if (blockNumber) {
                const block = await alchemy.core.getBlockWithTransactions(Number(blockNumber));
                setBlock(block);
            }
        })();
    }, [])

    if (block && latestBlock) {
        // Let's assume after 5 block we are safe to say that it's finalized
        const isFinalized = (latestBlock.number - block.number) > 5;
        const usedGasPercentage = block.gasUsed.toNumber() / 300000;
        items = [
            {label: 'Block Height', item: block.number},
            {label: 'Status', item: <Chip color={isFinalized ? 'green' : undefined} value={isFinalized ? 'Finalized' : 'UnFinalized'}/>, divider: true},
            {label: 'Timestamp', item: new Date().toLocaleString()},
            {label: 'Transactions', item: block.transactions.length},
            {label: 'Legacy txs (type = 0)', item: block.transactions.filter(tx => tx.type == 0).length},
            {label: 'Regular txs (type = 1)', item: block.transactions.filter(tx => tx.type == 1).length},
            {label: 'Contract creation txs (type = 2)', item: block.transactions.filter(tx => tx.type == 2).length},
            {label: 'Internal txs (type = 3)', item: block.transactions.filter(tx => tx.type == 3).length},

            {label: 'Gas Limit (fixed)', item: formatDigits('30000000')},
            {
                label: 'Gas Used',
                item: (<div>
                    {formatDigits(block.gasUsed)} ({formatDigits(usedGasPercentage, 2)} %)
                    <Progress value={usedGasPercentage} color="blue" variant="gradient" />
                </div>)
            },
            {label: 'Base Fee Per Gas', item: `${formatUnits(block.baseFeePerGas, 'gwei', 2)}`},
            {label: 'Burnt fees', item: `${formatUnits(block.baseFeePerGas?.mul(block.gasUsed), 'ether', 4)}`}

        ]
    }

    const renderItem = ({label, item, divider}: BlockDetailItems) => {
        return (
            <div className={`sm:flex py-2 ${divider ? 'border-b-2' : ''}`}>
                <div className="sm:w-80">{label}:</div>
                <div className="flex font-bold">{item}</div>
            </div>
        )
    }

    return <div>
        <Navbar/>
        <Container className="p-2">
            <Typography variant='h5' className="my-5 border-b-2">
                Block <span className="font-normal">#{block?.number}</span>
            </Typography>

            <Card className="mt-6">
                <CardBody>
                    {items.map(item => renderItem(item))}
                </CardBody>
            </Card>
        </Container>
    </div>
}