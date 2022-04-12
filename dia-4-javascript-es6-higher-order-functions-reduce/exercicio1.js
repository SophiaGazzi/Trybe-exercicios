//1 - Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten(arrays) {
    
    arrays.reduce((acc, valorArray) => acc.concat(valorArray), []);
}
console.log(flatten(arrays));
