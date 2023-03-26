console.log("04.js enlazado");
let= frutas=["manzana", "pera", "banana", "limon"];
console.log("Anterior: ",frutas);

let anterior= "pera";
let nuevo= "sandia"

for(let i=0; i<frutas.length; i++)
{
    if(frutas[i] == anterior)
    {
        frutas[i] = nuevo;
        break;
    }
}
console.log("Nuevo: ",frutas);