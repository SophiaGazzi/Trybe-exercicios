function palindromo (palavra){
    console.log('palavra ', palavra);
    console.log('palavra.reverse ', palavra.reverse );
    if (palavra === palavra.reverse()){
        return true;
    }
    return false; 
    }
console.log(palindromo('arara'));
