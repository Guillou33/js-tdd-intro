// test/capitalizeFirstLetters.js
const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');


describe('capitalizeFirstLetters', ()  =>{
    it('is a function acceptins one argument',() => {
        // Check that capitalizeFirstLetters is a function
        assert.strictEqual(typeof capitalizeFirstLetters, 'function');
        // Check that capitalizeFirstLetters accepts one argument
        assert.strictEqual(capitalizeFirstLetters.length, 1);
    });
    it('transforms sentence correctly', () => {
        assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
      });
    
      it('works with a 1-word string', () => {
          // Check that capitalizeFirstLetters transforms one word correctly
        assert.strictEqual(capitalizeFirstLetters('oui'), 'Oui');
      });
    
      it('works with an empty string', () => {
        // Check that capitalizeFirstLetters transforms empty sentence correctly
        assert.strictEqual(capitalizeFirstLetters(''), '');
      });
});
