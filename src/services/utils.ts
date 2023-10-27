import {Utils} from "alchemy-sdk";
import {BigNumberish} from "@ethersproject/bignumber";

export const formatUsd = (wei: BigNumberish , ethPrice: number) => {
    return `$${(parseFloat(Utils.formatEther(wei)) * ethPrice).toFixed(2)}`;
}

export const formatHash = (hash:string | undefined) => {
    if (!hash) {
        return 'N/A';
    }
    return `${hash.slice(0, 8)}...`;
}

export const getBlockNumbers = (startingBlock: number, numberOfBlocks: number) => {
   return [...Array(numberOfBlocks)].map((_, idx) => startingBlock - idx - 1)
}