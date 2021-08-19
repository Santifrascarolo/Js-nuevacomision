/* 
if(condicion logica){
    codigo a ejecutar si se cumple la condicion
}
else{
    codigo a ejecutar si no se cumple la condicion
}

*/

let numero1 = parseInt(prompt("ingrese un primer numero"));
let numero2 = parseInt(prompt("ingrese un segundo numero"));

if( numero1 > numero2 ){
    document.write("el numero1 es mayor al numero2 " + numero1)
}
else{ 
    if(numero2 > numero1){
        document.write("el numero2 es mayor al numero1 " + numero2)
    }
    else{

        document.write("el numero2 es igual que el numero1" )
    }
}