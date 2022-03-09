let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = array[0];


for (let index = 0; index < array.length; index += 1){
if (array[index].length >= maior.length){
    maior = array[index];
}
}
for (let index = 0; index < array.length; index += 1){
    if (array[index] <= menor){
        menor = array[index];
    }
    }
    
console.log('A maior é : ' + maior);
console.log('A menor é : ' + menor);