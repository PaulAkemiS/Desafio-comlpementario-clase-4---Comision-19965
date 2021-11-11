let precioCosto = parseFloat(prompt("Ingrese precio para sumarle iva y envío"));

const iva = function () {
    return precioCosto * 0.21;
};

const envio = 300;

let total = function () {
    return precioCosto + iva(precioCosto) + envio;
}

alert("El precio total es: $" + total(precioCosto));