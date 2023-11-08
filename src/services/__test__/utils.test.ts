import {describe} from "node:test";
import {formatDigits, formatHash, formatUnits, formatUsd, getBlockNumbers} from "@/services/utils";
import {BigNumber} from "alchemy-sdk";
import {expect} from "vitest";


describe('formatUsd', () => {
    test('number value formatted correctly to usd', () => {
        const usd = formatUsd(100000000000000, 1000);
        expect(usd).toBe('$0.10')
    });
    test('bigNumber value formatted correctly to usd', () => {
        const usd = formatUsd(BigNumber.from('0xffdef23212323'), 1000);
        expect(usd).toBe('$4.50')
    })
})
describe('formatDigits', () => {
    test('digit formats', () => {
        const format = formatDigits('1000000');
        expect(format).toBe('1,000,000');
    });
    test('digit formats', () => {
        const format = formatDigits('1000000.23423', 3);
        expect(format).toBe('1,000,000.234');
    });
     test('digit formats percentage', () => {
        const format = formatDigits(49.65439333333333, 3);
        expect(format).toBe('49.654');
    })
});

describe('formatUnits', () => {
    test.each([
      [undefined, undefined],
      [undefined, 'gwei'],
      ['1000', undefined],
    ])('simple test without params', (value, unitName) => {
        // @ts-ignore
        const unit = formatUnits(value, unitName)
        expect(unit).toBe('')
    });
    test('simple test without extra params', () => {
        const unit = formatUnits(BigNumber.from('10000000000'), 'gwei')
        expect(unit).toBe('10 Gwei')
    });
    test('simple with currency format', () => {
        const unit = formatUnits(BigNumber.from('1000000'), 'wei')
        expect(unit).toBe('1,000,000 Wei')
    });
     test('simple with ether and max digits', () => {
        const unit = formatUnits(BigNumber.from('100000000000000'), 'ether', 5)
        expect(unit).toBe('0.00010 Eth')
    });
});

describe('formatHash', () => {
    test('without hash', () => {
        const hash = formatHash(undefined);
        expect(hash).toBe('N/A');
    });
    test('with simple example', () => {
        const hash = formatHash('0x1232aedee2132desese22');
        expect(hash).toBe('0x1232ae...');
    });
})

describe('getBlockNumbers', () => {
    test('generated block numbers', () => {
        const blockNumbers = getBlockNumbers(123, 3);
        expect(blockNumbers).toStrictEqual([122, 121, 120]);
    })
})