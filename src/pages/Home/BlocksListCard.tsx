import {ListCard} from "@/components/ListCard";
import {ReactNode, useContext} from "react";
import BlockChainContext from "@/context/BlockChain";
import {BlockWithTransactions, Utils} from "alchemy-sdk";
import {formatHash} from "@/services/utils";
import {Chip} from "@material-tailwind/react";
import {useFetchLatestBlocks} from "@/hooks/useFetchBlocks";


export const BlocksListCard = () => {
    const { gasPrice} = useContext(BlockChainContext);
    const blocks = useFetchLatestBlocks(4)

    // This is an alternative solution to fetch multiple block with alchemy SDK instead of sending JsonRPC by our own
    // Downfall of this solution it will send n request to the network
    // const [blocks, setBlocks] = useState<BlockWithTransactions[]>([]);
    // useEffect(() => {
    //     if (!latestBlock) {
    //         return;
    //     }
    //     const blockNumbers = [...Array(4)].map((_, idx) => latestBlock?.number - idx - 1)
    //
    //     const promises = blockNumbers.map(blockNumber =>
    //         alchemy.core.getBlockWithTransactions(blockNumber)
    //     );
    //
    //     Promise.all(promises).then(arrOfResults => {
    //         setBlocks(arrOfResults);
    //     });
    //
    // }, [latestBlock])

    const renderItems = (block: BlockWithTransactions): ReactNode => (
        <div className="flex justify-between items-center">
            <h1>{block.number}</h1>
            <div>
                <p>Miner: {formatHash(block.miner)}</p>
                <p>{block.transactions.length} txns</p>
            </div>
            <Chip value={`${parseFloat(Utils.formatEther(block?.gasUsed.mul(gasPrice))).toFixed(2)} Eth`}/>
        </div>
    )


    return <ListCard<BlockWithTransactions>
        label="Blocks"
        items={blocks}
        renderItems={renderItems}
    />
}