/**
 * Llamado desde el click. Pide datos y calcula el total con impuesto
 */
function calcularImpuesto() {
    /* Pido y guardo precio */
    let precio = pedirPrecio();
    /* Pido y guardo IVA */
    let iva = pedirIVA();
    
    /* Calculo el total */
    let total = calcularTotal(precio, iva);
    /* Muestro el string con los datos */
    mostrar(armarString(precio, iva, total));
}
