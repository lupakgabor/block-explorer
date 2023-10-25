import {Card, CardBody} from "@material-tailwind/react";
import {useContext } from "react";
import BlockChainContext from "@/context/BlockChain";
import {Utils} from "alchemy-sdk";
import {formatUsd} from "@/services/utils";


export const MainStats = () => {
    const { ethPrice, latestBlock, gasPrice, txEstimationGas } = useContext(BlockChainContext);

    const gasPriceGwei = parseInt(Utils.formatUnits(gasPrice, 'gwei'), 0);

    return <Card className="mx-auto max-w-screen-xl px-4">
        <CardBody>
            <div className="grid md:grid-cols-3">
                <div className="md:border-r-2 p-3">
                    <div className="border-b-2 p-3">
                        <p className="capitalize text-sm">Block Number</p>
                        <p className="font-bold">{latestBlock?.number}</p>
                    </div>

                    <div className="p-3">
                        <p className="capitalize text-sm">Ethereum Price</p>
                        <p className="font-bold">${ethPrice}</p>
                    </div>
                </div>
                <div className="md:border-r-2 p-3">
                     <div className="border-b-2 p-3">
                        <p className="capitalize text-sm">Number of transactions</p>
                        <p className="font-bold">{latestBlock?.transactions?.length}</p>
                    </div>
                    <div className="p-3">
                        <p className="capitalize text-sm">Gas Price</p>
                        <p className="font-bold">{gasPriceGwei} Gwei</p>
                    </div>

                </div>
                <div className="p-3">
                    <div className="border-b-2 p-3">
                        <p className="capitalize text-sm">Block date</p>
                        <p className="font-bold">{latestBlock?.timestamp ? new Date(latestBlock.timestamp * 1000).toLocaleString() : ''}</p>
                    </div>
                    <div className="p-3">
                        <p className="capitalize text-sm">Estimated transfer fee</p>
                        <p className="font-bold">{gasPriceGwei * txEstimationGas} Gwei <span className="text-sm font-extralight">({formatUsd(gasPrice * txEstimationGas, ethPrice)})</span></p>
                    </div>
                </div>
            </div>
        </CardBody>
    </Card>
}