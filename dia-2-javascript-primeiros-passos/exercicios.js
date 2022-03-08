let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
//let soma = 0;
//let media = 0;
//for (let index = 0; index < numbers.length; index += 1) {
   //console.log(numbers[index]);

 
//soma = soma + numbers[index];
//media += numbers[index];
//}
//media = media / numbers.length;
//console.log(soma);
//console.log(media);
//if (media > 20 ) {
  //  console.log("valor maior que 20");
//}

//else {
  //  console.log("Valor menor ou igual a  20");
//}
let maior = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < maior) {
       maior = numbers[index];
    }
    
}
console.log(maior);
