const nuts = ['Peanut', 'Almond', 'Nut', 'Hazelnut'];
const fruits = ['Apple', 'Banana', 'Orange'];
const vegetables = ['Onion', 'Carrot']

const concat = (a, b) => {
    return [...a, ...b];
};

console.log(`Concatenated array: ${concat(fruits, nuts)}`);

const multipleConcat = (...arrays) => {
    return [].concat(...arrays)
};

console.log(`Concatenated array (multiple input): ${multipleConcat(nuts, fruits, vegetables)}`);