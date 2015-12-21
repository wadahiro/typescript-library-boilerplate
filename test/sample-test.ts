import * as assert from 'power-assert';

import add from '../src/sample'

describe("Sample", () => {
    context("add()", () => {
        it("should return sum", () => {
            const sum = add(1, 1);
            assert.equal(sum, 2);
        });
    });
    
    context("add() failed", () => {
        it("should return sum", () => {
            const sum = add(1, 2);
            assert.equal(sum, 2);
        });
    });
});