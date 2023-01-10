const precioaros = 500;
const preciocollares = 700;
const preciocelulares = 600;
const preciopc = 300;
const otros = 'Bienvenido';
let total = 0;
function eleccion(){
    let option = prompt('Bienvenido a Yazluc Accesorios, Seleccione la opción que buscas: \n ' + 
    '1- Aros. \n2- Collares. \n3 Accesorios Celu. \n4 Accesorios PC. \n5 Otros. \n0- Salir.');
    // validar con while que option este vacio
    while(option == null || option == ''){
        option = prompt ('Ingrese una opción válida por favor: \n ' +
        '1- Aros. \n2- Collares. \n3 Accesorios Celu. \n4 Accesorios PC. \n5 Otros. \n0- Salir.');
    }
    // validar con while que option sea 1, 2, 3, 4, 5 o 0
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
            let totalaros = totalFinal1(precioaros, cantidadaros);
            alert("El total a pagar es: " + totalaros);
            break;
        case '2':
            alert ("El precio de los collares es: " + preciocollares)
            let cantidadcollares = prompt("¿Cuántos collares desea comprar?");
            let totalcollares = totalFinal2(preciocollares, cantidadcollares);
            alert("El total a pagar es: " + totalcollares);
            break;
        case '3':
            alert ("El precio de los accesorios para celulares es: " + preciocelulares);
            let cantidadcelulares = prompt("¿Cuántos accesorios de celular desea comprar?");
            let totalcelulares = totalFinal3(preciocelulares, cantidadcelulares);
            alert("El total a pagar es: " + totalcelulares);
            break;
        case '4':
            alert ("El precio de los accesorios para PC es: " + preciopc);
            let cantidadpc = prompt("¿Cuántos artículos de PC desea comprar?");
            let totalpc = totalFinal4(preciopc, cantidadpc);
            alert("El total a pagar es: " + totalpc);
            break;
        case '5':
            alert ("Bienvenido");
            break;
    }
}
function totalFinal1(precioaros, cantidadaros){
    totalaros = precioaros * cantidadaros;
    return totalaros;
}
function totalFinal2(preciocollares, cantidadcollares){
    totalcollares = preciocollares * cantidadcollares;
    return totalcollares;
}
function totalFinal3(preciocelulares, cantidadcelulares){
    totalcelulares = preciocelulares * cantidadcelulares;
    return totalcelulares;
}
function totalFinal4(preciopc, cantidadpc){
    totalpc = preciopc * cantidadpc;
    return totalpc;
}
prompt('¿Cuántos aros llevas?');
let descuento20 = precioaros - (precioaros  * 0.2);
let descuento30 = precioaros - (precioaros  * 0.3);
alert("el precio por unidad con descuento del 20% es de " + descuento20);
alert("el precio por unidad con descuento del 30% es de " + descuento30);