let tablaNumeros = null;

function manejarNumeros() {
    if (tablaNumeros) {
        if (confirm("Ya existe una tabla. ¿Deseas agregar más números?")) {
            agregarNumeros();
        } else {
            alert("Debes eliminar la tabla existente antes de crear una nueva.");
        }
        return;
    }

    let numeros = [];
    let cantidad = parseInt(prompt("¿Cuántos números deseas ingresar?"));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingresa un número entero válido mayor a 0.");
        return;
    }

    for (let i = 0; i < cantidad; i++) {
        let numero;
        do {
            numero = prompt(`Ingresa el número ${i + 1}:`);
            numero = parseFloat(numero);
            if (isNaN(numero)) {
                alert("Por favor, ingresa un número válido.");
            }
        } while (isNaN(numero));
        numeros.push(numero);
    }

    mostrarTablaNumeros(numeros);
}

function agregarNumeros() {
    let nuevosNumeros = [];
    let cantidad = parseInt(prompt("¿Cuántos números adicionales deseas ingresar?"));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingresa un número válido mayor a 0.");
        return;
    }

    for (let i = 0; i < cantidad; i++) {
        let numero;
        do {
            numero = prompt(`Ingresa el número ${i + 1}:`);
            numero = parseFloat(numero);
            if (isNaN(numero)) {
                alert("Por favor, ingresa un número válido.");
            }
        } while (isNaN(numero));
        nuevosNumeros.push(numero);
    }


    let cuerpoTabla = tablaNumeros.querySelector("tbody");
    let total = 0;

    nuevosNumeros.forEach((numero, index) => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${cuerpoTabla.rows.length + index + 1}</td>
            <td>${numero}</td>
        `;
        cuerpoTabla.appendChild(fila);
        total += numero;
    });

    let sumaActual = Array.from(cuerpoTabla.rows).reduce((suma, fila) => suma + parseFloat(fila.cells[1].textContent), 0);

    tablaNumeros.querySelector("tfoot th:nth-child(2)").textContent = sumaActual.toFixed(2);
}

function mostrarTablaNumeros(numeros) {
    let suma = numeros.reduce((a, b) => a + b, 0);

    let tablaHTML = `
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Número</th>
                </tr>
            </thead>
            <tbody>
    `;

    numeros.forEach((num, index) => {
        tablaHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${num}</td>
            </tr>
        `;
    });

    tablaHTML += `
            </tbody>
            <tfoot>
                <tr>
                    <th>Suma Total</th>
                    <th>${suma.toFixed(2)}</th>
                </tr>
            </tfoot>
        </table>
        <button onclick="eliminarTabla()">Eliminar Tabla</button>
    `;

    let divResultado = document.getElementById("resultado");
    divResultado.innerHTML = tablaHTML;
    tablaNumeros = divResultado.querySelector("table");
}

function eliminarTabla() {
    document.getElementById("resultado").innerHTML = "";
    tablaNumeros = null;
}