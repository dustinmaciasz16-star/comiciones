


function calcularComision(numeroVentas, PrecioProducto){
    const VENTAS_BASE = 5;
    let comision = 0;

    if(numeroVentas > VENTAS_BASE){
        let ventasExtras = numeroVentas - VENTAS_BASE;
        comision = ventasExtras * (PrecioProducto * 0.10);
    }
    return comision;
}

function mostrarEnSpan(id, valor){
    document.getElementById(id).innerText = valor.toFixed(2);
}

function Calcular(){
    let salarioBase = parseFloat(document.getElementById("txtSueldoBase").value);    
    let ventas = parseFloat(document.getElementById("txtVentas").value);    
    let precio = parseFloat(document.getElementById("txtPrecio").value);  
    

    let comision = calcularComision(ventas, precio);

    let total = salarioBase + comision;

    mostrarEnSpan("spSueldoBase", salarioBase);
    mostrarEnSpan("spComision", comision);
    mostrarEnSpan("spTotal", total);
    
}

document.getElementById("calcular").onclick = () => Calcular();