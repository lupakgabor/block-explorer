import {createContext, ReactNode, useEffect, useState} from "react";
import {BlockWithTransactions, Utils} from "alchemy-sdk";
import alchemy from "@/services/alchemy";

type BlockChainContextType = {
    ethPrice: number;
    latestBlock?: BlockWithTransactions;
    gasPrice: number;
    txEstimationGas: number;
}

const BlockChainContext = createContext<BlockChainContextType>({
    ethPrice: 0,
    latestBlock: undefined,
    gasPrice: 0,
    txEstimationGas: 0,
});


const BlockChainProvider = ({children}: {children: ReactNode}) => {
    const [ethPrice, setEthPrice] = useState(0);
    const [latestBlock, setLatestBlock] = useState<BlockWithTransactions>();
    const [gasPrice, setGasPrice] = useState(0);
    const [txEstimationGas, setTxEstimationGas] = useState(0);

    const fetchEthereumPrice = async () => {
        const response = await fetch("https://api.coingecko.com/api/v3/coins/ethereum");
        const data = await response.json();
        setEthPrice(data.market_data.current_price.usd);
    };
    const fetchLatestBlock = async () => {
         const block = await alchemy.core.getBlockNumber();
         const blockWithTransaction = await alchemy.core.getBlockWithTransactions(block);
         setLatestBlock(blockWithTransaction);
    }

    const fetchGasPrice = async () => {
        const gasPrice = await alchemy.core.getGasPrice();
        setGasPrice(gasPrice.toNumber())
    }

    const fetchTransactionEstimationGas = async () => {
        const estimatedGas = await alchemy.core.estimateGas({
            to: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            data: "0xd0e30db0",
            value: Utils.parseEther("1.0")
        });
        setTxEstimationGas(parseInt(estimatedGas.toString()))
    }

    useEffect(() => {
        fetchEthereumPrice();
        fetchLatestBlock();
        fetchGasPrice();
        fetchTransactionEstimationGas();
    }, [])

    return (
        <BlockChainContext.Provider value={{ ethPrice, latestBlock, gasPrice, txEstimationGas }} >
            {children}
        </BlockChainContext.Provider>
    );
}

export { BlockChainProvider };
export default BlockChainContext;