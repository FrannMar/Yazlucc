const precioaros = 500;
const preciocollares = 700;
const preciocelulares = 600;
const preciopc = 300;
const otros = 'Bienvenido';
let total = 0;
function eleccion(){
    let option = prompt('Bienvenido a Yazluc Accesorios, Seleccione la opción que buscas: \n ' + 
    '1- Aros. \n2- Collares. \n3 Accesorios Celu. \n4 Accesorios PC. \n5 Otros. \n0- Salir.');
    while(option == null || option == ''){
        option = prompt ('Ingrese una opción válida por favor: \n ' +
        '1- Aros. \n2- Collares. \n3 Accesorios Celu. \n4 Accesorios PC. \n5 Otros. \n0- Salir.');
    }
    while(option != '1' && option != '2' && option != '3' && option != '4' && option != '5' && option != '0'){
        option = prompt('Ingrese una opcion válida por favor: \n ' +
        '1- Aros. \n2- Collares. \n3 Accesorios Celu. \n4 Accesorios PC. \n5 Otros. \n0- Salir.');
    }
    if(option == 0){
        alert('Gracias por su visita');
        return;
    }
    procesoDeEleccion(option);
    }
eleccion();
function procesoDeEleccion(option){
    switch (option){
        case '1':
            alert ("El precio de los aros es: " + precioaros);
            let cantidadaros = prompt("¿Cuántos aros desea comprar?");
            let totalaros = totalFinal(precioaros, cantidadaros);
            alert("El total a pagar es: " + totalaros);
            break;
        case '2':
            alert ("El precio de los collares es: " + preciocollares)
            let cantidadcollares = prompt("¿Cuántos collares desea comprar?");
            let totalcollares = totalFinal(preciocollares, cantidadcollares);
            alert("El total a pagar es: " + totalcollares);
            break;
        case '3':
            alert ("El precio de los accesorios para celulares es: " + preciocelulares);
            let cantidadcelulares = prompt("¿Cuántos accesorios de celular desea comprar?");
            let totalcelulares = totalFinal(preciocelulares, cantidadcelulares);
            alert("El total a pagar es: " + totalcelulares);
            break;
        case '4':
            alert ("El precio de los accesorios para PC es: " + preciopc);
            let cantidadpc = prompt("¿Cuántos artículos de PC desea comprar?");
            let totalpc = totalFinal(preciopc, cantidadpc);
            alert("El total a pagar es: " + totalpc);
            break;
        case '5':
            alert ("Bienvenido");
            break;
    }
}
function totalFinal(precioaros, cantidadaros){
    totalaros = precioaros * cantidadaros;
    return totalaros;
}
function totalFinal(preciocollares, cantidadcollares){
    totalcollares = preciocollares * cantidadcollares;
    return totalcollares;
}
function totalFinal(preciocelulares, cantidadcelulares){
    totalcelulares = preciocelulares * cantidadcelulares;
    return totalcelulares;
}
function totalFinal(preciopc, cantidadpc){
    totalpc = preciopc * cantidadpc;
    return totalpc;
}
/*prompt('Hay una promo del 20% y 30% en aros ¿Cuántos aros llevas?');
let descuento20 = precioaros - (precioaros  * 0.2);
let descuento30 = precioaros - (precioaros  * 0.3);
alert("el precio por unidad de aros con descuento del 20% es de " + descuento20);
alert("el precio por unidad de aros con descuento del 30% es de " + descuento30);
//DATE
const hoy = new Date("January 18, 2023");
const findepromo = new Date("March 1, 2023");
const milisegundospordia = 86400000;
alert ("Nuestra oferta en aros finaliza en: " + ((findepromo - hoy)/ milisegundospordia ) + "dias");
*/
//OBJETOS
const productoAros = [{id:1, producto:"cruz", seccion: "Aros", precio: 500},
                {id:2, producto: "classic", seccion: "Aros", precio: 500},
                {id: 3, producto: "estrellita", seccion: "Aros", precio: 500 },
                {id: 4, producto: "finos", seccion: "Aros", precio: 500}]
const productoColgantes = [{id:5, producto: "Varios", seccion: "Colgantes", precio: 700}];
const productoCelulares = [{id:6, producto: "variosCelu", seccion:"Celulares", precio: 700},
                    {id:7, producto: "S10+Auris", seccion: "Celulares", precio: 700},
                    {id:8, producto: "genAuris", seccion: "Celulares", precio: 700},
                    {id:9, producto:"cableTipoC", seccion: "Celulares", precio: 700},
                    {id:10, producto: "vidrio", seccion: "Celulares", precio: 700}]
const productoPC = [{id:11, producto:"joystick", seccion: "PC", precio: 1200},
{id:12, producto: "antena", seccion: "PC", precio: 1000},
{id: 13, producto: "kingston", seccion: "PC", precio: 300},
{id: 14, producto: "usb5.0", seccion: "PC", precio: 500}]
//CONCAT;
const productos = productoAros.concat(productoColgantes, productoCelulares, productoPC);
//
function Tengo (b) {
    return (a) => a > b;
    //14 => 14 > 50;
}
let yoDeberia = Tengo (14) ;
console.log( yoDeberia(14)) ; //lo que debo tener cuando coloque todos los productos;
console.log( yoDeberia(50) ) ; //lo que debo tener cuando coloque todos los productos;
//maquina de escribir

function escribirEnPantalla(texto){
    let arr=texto.split("");
    i=0;
let intervalo= setInterval(function(){
    if(i==arr.length-1){ 
        document.getElementById("maquina").innerHTML+=arr[i];
        clearInterval(intervalo);} 
    else {
    if(arr[i]==" "){
    document.getElementById("maquina").innerHTML+=arr[i];
    document.getElementById("maquina").innerHTML+=arr[i+1];
        i+=2;
    }else{
    document.getElementById("maquina").innerHTML+=arr[i];
    i++;
        }
    }
    },500); 
}
escribirEnPantalla("PAGINA EN PROCESO...");
//