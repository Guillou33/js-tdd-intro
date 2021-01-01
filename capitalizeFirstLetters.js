

// WRITE THE ACTUAL FUNCTION HERE
const capitalizeFirstLetters = (input) => {
    return input.length > 0 ? input.split(' ').map(el => {
        return el[0].toUpperCase() + el.slice(1);
    }).join(' ') : '';
}


console.log(capitalizeFirstLetters('i am learning TDD'));
console.log(capitalizeFirstLetters('oui'));
console.log(capitalizeFirstLetters(''));

module.exports = capitalizeFirstLetters;