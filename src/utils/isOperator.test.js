import { expect, describe, it } from "vitest";
import isOperator from "./isOperator";


describe ('Is Operator utility', () => {
    it('check if the value is operator', ()=> {
        expect(isOperator('-')).toBe(true);
        expect(isOperator('+')).toBe(true);
        expect(isOperator('/')).toBe(true);
        expect(isOperator('=')).toBe(true);
        expect(isOperator('*')).toBe(true);
        
        expect(isOperator('1')).toBe(false);
        expect(isOperator('aaa')).toBe(false);
        expect(isOperator()).toBe(false);
        expect(isOperator(['-'])).toBe(false);
        expect(isOperator([])).toBe(false);
        expect(isOperator({})).toBe(false);
        expect(isOperator(12)).toBe(false);
    });
})