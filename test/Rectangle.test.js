// test/Rectangle.js
const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('Rectangle', ()=>{
    it('contains functions', () => {
        assert.strictEqual(typeof new Rectangle(10, 5).isRightSizes, 'function');
        assert.strictEqual(typeof new Rectangle(10, 5).isSquare, 'function');
        assert.strictEqual(typeof new Rectangle(10, 5).getArea, 'function');
        assert.strictEqual(typeof new Rectangle(10, 5).getPerimeter, 'function');
    });
    it('verify the sizes',()=>{
        assert.strictEqual(new Rectangle(0, 5).isRightSizes(), false);
    });
    it('test if it is a square',()=>{
        assert.strictEqual(new Rectangle(10, 5).isSquare(), false);
        assert.strictEqual(new Rectangle(5, 5).isSquare(), true);
    });
    it('get the correct area',()=>{
        assert.strictEqual(new Rectangle(10, 5).getArea(), 50);
    });
    it('get the correct perimeter',()=>{
        assert.strictEqual(new Rectangle(10, 5).getPerimeter(), 30);
    });
});