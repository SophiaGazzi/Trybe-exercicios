const anguloA = 100;
const anguloB = 40;
const anguloC = 60;

let somaDosAngulos = anguloA + anguloB + anguloC; 

let angulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (angulosPositivos) {
    if (somaDosAngulos === 180){
        console.log(true);
    }
    else {
        console.log(false);
    }
}
 else {
     console.log(" Error... "); 
 }