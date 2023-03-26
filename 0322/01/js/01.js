console.log("01.js enlazado");
function sumarNum(listaNum){
    var suma=0;
    for(var i=0;i<listaNum.length;i++){
        suma+=listaNum[i]
    }
    return suma;
}
const lista=[1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];
console.log(sumarNum(lista));