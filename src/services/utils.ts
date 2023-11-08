import {BigNumber, Utils} from "alchemy-sdk";
import {BigNumberish} from "@ethersproject/bignumber";

export type unitName =
   | "wei"
   | "kwei"
   | "mwei"
   | "gwei"
   | "szabo"
   | "finney"
   | "ether"
;

export const formatUsd = (wei: BigNumberish , ethPrice: number) => {
    return `$${(parseFloat(Utils.formatEther(wei)) * ethPrice).toFixed(2)}`;
}

const capitalize = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function formatDigits(value: BigNumberish, maxDecimal: number = 0) {
    let number;
    if (typeof value !== 'number') {
        try {
            number = BigNumber.from(value).toNumber();
        } catch (err) {
            if (typeof value === "string") {
                number = parseFloat(value);
            } else {
                throw err;
            }
        }
    } else {
        number = value;
    }

    return Intl.NumberFormat('en-En', {
        minimumFractionDigits: maxDecimal,
        maximumFractionDigits: maxDecimal,
    }).format(number)
}



export function formatUnits(value?: null | BigNumberish, unitName?: unitName, maxDecimal: number = 0): string {
    if (!value || !unitName) {
        return '';
    }

    const formatted = formatDigits(Utils.formatUnits(value, unitName), maxDecimal);

    const capitalizedUnit = capitalize(unitName == 'ether' ? 'eth': unitName);

    return `${formatted} ${capitalizedUnit}`;
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
