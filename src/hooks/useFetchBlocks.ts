import {BlockWithTransactions, Utils} from "alchemy-sdk";
import {useContext, useEffect, useState} from "react";
import alchemy from "@/services/alchemy";
import {fetchJson} from "@ethersproject/web";
import BlockChainContext from "@/context/BlockChain";
import {getBlockNumbers} from "@/services/utils";

type RPCResponse = {
    id: number;
    jsonrpc: string;
    result: any;
}

export const useFetchLatestBlocks = (numberOfBlocks: number): BlockWithTransactions[] => {
    const { latestBlock } = useContext(BlockChainContext)
    const [blocks, setBlocks] = useState<BlockWithTransactions[]>([]);

    const fetchMultipleBlocks = async (latestBlock: BlockWithTransactions) => {
        const provider = await alchemy.config.getProvider();
        const blockNumbers = getBlockNumbers(latestBlock?.number, numberOfBlocks);

        const batch = blockNumbers.map((blockNumber, index) => ({
            jsonrpc: '2.0',
            id: index,
            method: 'eth_getBlockByNumber',
            params: [Utils.hexlify(blockNumber), true],
        }));

        const responses: RPCResponse[] = await fetchJson(provider.connection, JSON.stringify(batch))

        // @ts-ignore
        const results: BlockWithTransactions[] = responses.map(
            response => provider.formatter.blockWithTransactions(response.result)
        );

        setBlocks(results);
    }

    useEffect(() => {
        if (latestBlock) {
            fetchMultipleBlocks(latestBlock);
        }
    }, [latestBlock])

    return blocks;
}