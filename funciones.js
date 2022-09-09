/**
 * Calcula el total del producto
 * @param {Number} precio Precio del producto 
 * @param {Number} iva IVA (%)
 * @returns 
 */
 const calcularTotal = (precio, iva) => /* return */ precio * iva / 100 + precio;


 /**
  * Arma un string con el formato necesario
  * @param {Number} precio Precio del producto
  * @param {Number} iva IVA (%)
  * @param {Number} total Total a pagar (precio + IVA)
  * @returns 
  */
 const armarString = (precio, iva, total) => `Precio: $${precio} - IVA: ${iva}% - Total: $${total}`;
 

 /**
  * Muestra en un alert el mensaje requerido
  * @param {String} str Mensaje para mostrar
  * @returns 
  */
const mostrar = (str) => alert(str);


/**
 * Pide y valida el precio
 * @returns 
 */
function pedirPrecio() {
    /* Variable para guardar el precio */
    let precio;
    do {
        /* Pido precio */
        precio = parseFloat(prompt("Ingrese el precio del producto"));
        /* Variable de control */
        var precioValido = true;
        /* Verifico que el valor no sea numerico */
        if(isNaN(precio)) {
            /* Aviso y cambio la variable de control */
            alert("Solo valores numericos");
            precioValido = false;
        }
        /* Verifico que el precio sea positivo */
        else if(precio <= 0) {
            /* Aviso y cambio la variable de control */
            alert("Ingrese un precio valido (mayor a 0)");
            precioValido = false;
        }
    /* Repito si el precio no fue valido */
    } while(precioValido === false);
    /* Devuelvo el precio */
    return precio;
}


/**
 * Pide y valida IVA (%)
 * @returns 
 */
function pedirIVA() {
    /* Pido iva */
    let iva = parseFloat(prompt("Ingrese IVA (% - por defecto 21)"));
    /* Si no fue un numero, guardo IVA por defecto */
    if(isNaN(iva)) { iva = 21; }
    /* Si no fue IVA valido, guardo el que es por defecto */
    else if(iva < 0 || iva > 100) { iva = 21; }
    /* Devuelvo IVA */
    return iva;
}