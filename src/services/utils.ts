import {Utils} from "alchemy-sdk";
import {BigNumberish} from "@ethersproject/bignumber";

export const formatUsd = (wei: BigNumberish , ethPrice: number) => {
    return `$${(parseFloat(Utils.formatEther(wei)) * ethPrice).toFixed(2)}`;
}