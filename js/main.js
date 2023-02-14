/*const precioaros = 500;
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
prompt('Hay una promo del 20% y 30% en aros ¿Cuántos aros llevas?');
let descuento20 = precioaros - (precioaros  * 0.2);
let descuento30 = precioaros - (precioaros  * 0.3);
alert("el precio por unidad de aros con descuento del 20% es de " + descuento20);
alert("el precio por unidad de aros con descuento del 30% es de " + descuento30);
//DATE
const hoy = new Date("January 18, 2023");
const findepromo = new Date("March 1, 2023");
const milisegundospordia = 86400000;
alert ("Nuestra oferta en aros finaliza en: " + ((findepromo - hoy)/ milisegundospordia ) + "dias");
//OBJETOS
const productoAros = [{id:1, producto:"cruz", seccion: "Aros", precio: 500},
                {id:2, producto: "classic", seccion: "Aros", precio: 500},
                {id: 3, producto: "estrellita", seccion: "Aros", precio: 500 },
                {id: 4, producto: "finos", seccion: "Aros", precio: 500}]
//STORAGE;
const miJsonAros = JSON.stringify(productoAros);
localStorage.setItem("aros", miJsonAros);
//
const productoColgantes = [{id:5, producto: "Varios", seccion: "Colgantes", precio: 700}];
//STORAGE;
const miJsonColgantes = JSON.stringify(productoColgantes);
localStorage.setItem("colgantes", miJsonColgantes);
//
const productoCelulares = [{id:6, producto: "variosCelu", seccion:"Celulares", precio: 700},
                    {id:7, producto: "S10+Auris", seccion: "Celulares", precio: 700},
                    {id:8, producto: "genAuris", seccion: "Celulares", precio: 700},
                    {id:9, producto:"cableTipoC", seccion: "Celulares", precio: 700},
                    {id:10, producto: "vidrio", seccion: "Celulares", precio: 700}]
//JSON;
const miJSON = JSON.stringify(productoCelulares);
console.log (miJSON);
console.log (typeof miJSON);
console.log (typeof productoCelulares);
//STORAGE;
const miJsonCelulares = JSON.stringify(productoCelulares);
localStorage.setItem("celulares", miJsonCelulares);
//
const productoPC = [{id:11, producto:"joystick", seccion: "PC", precio: 1200},
{id:12, producto: "antena", seccion: "PC", precio: 1000},
{id: 13, producto: "kingston", seccion: "PC", precio: 300},
{id: 14, producto: "usb5.0", seccion: "PC", precio: 500}]
//STORAGE;
const miJsonPC = JSON.stringify(productoPC);
localStorage.setItem("PC", miJsonPC);
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
//fiter para filtrar por precio igual o menor a 500 pesos;
const filtroPrecio = productos.filter( (el) => el.precio <= 500);
console.log(filtroPrecio);
// precios ordenados de menor a mayor;
const precio = [500,700,1200,1000,300]
precio.sort ( (a, b) => a - b);
alert("nuestros precios de menor a mayor son:" + precio);
console.log (precio);
// precios ordenados de mayor a menor;
precio.sort ( (a, b) => b - a);
alert("nuestros precios de mayor a menor son:" + precio);
console.log (precio);
//
alert("El precio del producto mas caro de la web es de " + Math.max (500,700,1200,1000,300));
console.log(Math.max (500,700,1200,1000,300));
//
alert("El precio del producto mas barato de la web es de " + Math.min (500,700,1200,1000,300));
console.log(Math.min (500,700,1200,1000,300));
//DOM;
let correccion = document.getElementById("error1");
correccion.innerHTML = "Colgantes";
console.log (correccion);
document.getElementById("nombre").value = "Coder";
// EVENTOS;
let boton = document.getElementById("boton")
boton.onclick = () => {console.log("Enviar")}
boton.onmousemove = () => {console.log("Movimientos del mouse dentro del campo")};
//STORAGE GETITEM;
let obtener = localStorage.getItem('aros');
alert ("esto es el array de objetos de AROS" + obtener);
/*INTERVALOS; PRACTICA
let doy;
let dame = setInterval (() => {
    console.log("Dame una A")
} , 1000);
setTimeout (() => {
    doy = setInterval(() => {
        console.log("Te doy una A")
    },2000)
},2000);
dame = setInterval (() => {
    console.log("Dame una L")
} , 3000);
    setTimeout (() => {
        doy = setInterval(() => {
        console.log("Te doy una L")
    },4000)
},4000);
dame=setInterval (() => {
    console.log("Dame una A")
} , 5000);
    setTimeout (() => {
        doy = setInterval(() => {
        console.log("Te doy una A")
    },6000)
},6000);
dame = setInterval (() => {
    console.log("Dame una M")
} , 7000);
    setTimeout (() => {
        doy = setInterval(() => {
        console.log("Te doy una M")
    },8000)
},8000);
dame = setInterval (() => {
    console.log("Dame una A")
} , 9000);
    setTimeout (() => {
    doy=setInterval(() => {
        console.log("Te doy una A")
    },10000)
},10000);
dame = setInterval (() => {
    console.log("Dame una U")
} , 11000);
setTimeout (() => {
    doy = setInterval(() => {
        console.log("Te doy una U")
    },12000)
},12000);
dame = setInterval (() => {
    console.log("Dame una L")
} , 13000);
setTimeout (() => {
    doy = setInterval(() => {
        console.log("Te doy una L")
    },14000)
},14000);
dame = setInterval (() => {
    console.log("Dame una A")
} , 15000);
setTimeout (() => {
    doy = setInterval(() => {
        console.log("Te doy una A")
    },16000)
},16000);
dame = setInterval (() => {
    console.log("¿Que tenemos?")
} , 17000);
setTimeout (() => {
    doy = setInterval(() => {
        console.log("ALAMAULA")
    },18000)
} ,18000);
dame = setInterval (() => {
    console.log("¿Que tenemos?")
} , 20000);
setTimeout (() => {
    doy = setInterval(() => {
        console.log("ALAMAULA")
    },21000)
},21000);
setInterval (() => {
    clearInterval(dame)
    clearInterval(doy)
},21000);*/