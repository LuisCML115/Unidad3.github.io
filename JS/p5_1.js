
 function manejarFrutas() {
    let frutas = [];
    let continuar;

    do {
        let fruta = prompt("Ingresa el nombre de una fruta:");
        if (fruta) {
            frutas.push(fruta);
        } else {
            alert("Por favor, ingresa un nombre válido.");
        }
        continuar = confirm("¿Deseas agregar otra fruta?");
    } while (continuar);

    alert("Frutas ingresadas: " + frutas.join(", "));
}