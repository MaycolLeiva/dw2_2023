console.log("02.js enlazado");
function esPalindromo(cadena){
     cadena=cadena.toLowerCase().replace(/[^a-z0-9]+/g, '');
     var cadenaInvertida=cadena.split('').reverse().join('');
     if(cadena==cadenaInvertida)
     {
          return true;
     }
     else
     {
          return false;
     }
}

console.log(esPalindromo("hola mundo"));
console.log(esPalindromo("¿Acaso hubo buhos aca?"));
console.log(esPalindromo("Anita lava la tina"));
console.log(esPalindromo("Soy de Facat"));