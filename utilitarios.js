function limpiarError(idInput, idError){
    document.getElementById(idError).innerText = "";
    document.getElementById(idInput).classList.remove("input-error");
}

function mostrarError(idInput, idError, mensaje){
    document.getElementById(idError).innerText = mensaje;
    document.getElementById(idInput).classList.add("input-error");
}

function recuperarNumero(idTxt, idError, nombreCampo){
    let input = document.getElementById(idTxt);
    let valorTexto = input.value.trim();

    limpiarError(idTxt, idError);

    if(valorTexto === ""){
        mostrarError(idTxt, idError, "Este campo es obligatorio");
        return null;
    }

    let valor = parseFloat(valorTexto);

    if(isNaN(valor)){
        mostrarError(idTxt, idError, "Debe ser un número válido");
        return null;
    }

    if(valor < 0){
        mostrarError(idTxt, idError, "No puede ser negativo");
        return null;
    }

    return valor;
}

function mostrarEnSpan(id, valorE){
    document.getElementById(id).innerText = valorE.toFixed(2);
}