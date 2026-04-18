function calcularComision(numeroVentas, PrecioProducto){
    const VENTAS_BASE = 5;
    let comision = 0;

    if(numeroVentas > VENTAS_BASE){
        let ventasExtras = numeroVentas - VENTAS_BASE;
        comision = ventasExtras * (PrecioProducto * 0.10);
    }
    return comision;
}

function Calcular(){

    let salarioBase = recuperarNumero("txtSueldoBase", "errorSueldo", "Salario Base");
    let ventas = recuperarNumero("txtVentas", "errorVentas", "Número de ventas");
    let precio = recuperarNumero("txtPrecio", "errorPrecio", "Precio del producto");

    // Si alguno falla, se detiene
    if(salarioBase === null || ventas === null || precio === null){
        return;
    }

    if(ventas === 0){
        mostrarError("txtVentas", "errorVentas", "Debe ingresar al menos 1 venta");
        return;
    }

    let comision = calcularComision(ventas, precio);
    let total = salarioBase + comision;

    mostrarEnSpan("spSueldoBase", salarioBase);
    mostrarEnSpan("spComision", comision);
    mostrarEnSpan("spTotal", total);
}

document.getElementById("calcular").onclick = () => Calcular();