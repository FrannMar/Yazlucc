let precioaros = ('desde 300');
let preciocollares = ('desde 680');
let preciocelu = ('desde 300');
let preciopc = ('desde 800');
let otros = ('Bienvenido')
let option = prompt ('Bienvenido a Yazluc Accesorios, Seleccione una opción: \n1- Aros. \n2- Collares. \n3 Accesorios Celu. \n4 Accesorios PC. \n5 Otros.');
switch (option){
    case '1':
        alert (precioaros);
        break;
    case '2':
        alert (preciocollares);
        break;
    case '3':
        alert (preciocelu);
        break;
    case '4':
        alert (preciopc);
        break;
    case '5':
        alert (otros);
        break;
}