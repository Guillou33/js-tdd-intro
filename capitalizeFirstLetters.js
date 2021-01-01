// capitalizeFirstLetters.js
const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE

const capitalizeFirstLetters = (input) => {
    return input.length > 0 ? input.split(' ').map(el => {
        return el[0].toUpperCase() + el.slice(1);
    }).join(' ') : '';
}


// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

// Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);

// Check that capitalizeFirstLetters transforms sentence correctly
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');

// Check that capitalizeFirstLetters transforms one word correctly
assert.strictEqual(capitalizeFirstLetters('oui'), 'Oui');

// // Check that capitalizeFirstLetters transforms empty sentence correctly
assert.strictEqual(capitalizeFirstLetters(''), '');

console.log(capitalizeFirstLetters('i am learning TDD'));
console.log(capitalizeFirstLetters('oui'));
console.log(capitalizeFirstLetters(''));