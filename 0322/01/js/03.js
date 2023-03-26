console.log("03.js enlazado");
function generarPares(num) 
{
    var pares=[];
    
    for (var i=1; i<=num; i++) 
    {
      if (i%2 == 0) 
      { 
        pares.push(i); 
      }
    }
    return pares; 
}

var num=10;
var pares = generarPares(num);
console.log(pares); 
  