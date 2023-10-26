import {ReactNode, useContext} from "react";
import BlockChainContext from "@/context/BlockChain";
import {ListCard} from "@/components/ListCard";
import {TransactionResponse, Utils} from "alchemy-sdk";
import {formatHash} from "@/services/utils";
import {Chip} from "@material-tailwind/react";


export const TransactionsListCard = () => {
    const {latestBlock} = useContext(BlockChainContext);

    const renderItems = (tx: TransactionResponse): ReactNode => (
        <div className="flex justify-between items-center">
            <h1>{formatHash(tx.hash)}</h1>
            <div>
                <p>From: {formatHash(tx.from)}</p>
                <p>To: {formatHash(tx.to)}</p>
            </div>
            <Chip value={`${parseFloat(Utils.formatEther(tx.value)).toFixed(2)} Eth`}/>
        </div>
    )


    return <ListCard<TransactionResponse>
        label="Transactions"
        items={latestBlock?.transactions.slice(0, 4) ?? []}
        renderItems={renderItems}
    />
}