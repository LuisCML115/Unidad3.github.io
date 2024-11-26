
let tablaCalificaciones = null;
        function manejarCalificaciones() {
            if (tablaCalificaciones) {
                if (confirm("Ya existe una tabla. ¿Deseas agregar más calificaciones?")) {
                    agregarCalificaciones();
                } else {
                    alert("Debes eliminar la tabla existente antes de comenzar de nuevo.");
                }
                return;
            }

            let calificaciones = [];
            let cantidad = parseInt(prompt("¿Cuántas calificaciones deseas ingresar?"));

            if (isNaN(cantidad) || cantidad <= 0) {
                alert("Por favor, ingresa un número entero válido mayor a 0.");
                return;
            }

            for (let i = 0; i < cantidad; i++) {
                let calificacion;
                do {
                    calificacion = prompt(`Ingresa la calificación ${i + 1}: (debe ser un número entero)`);
                    calificacion = parseInt(calificacion);
                    if (isNaN(calificacion)) {
                        alert("Por favor, ingresa un número entero válido.");
                    }
                } while (isNaN(calificacion));
                calificaciones.push(calificacion);
            }

            mostrarTablaCalificaciones(calificaciones);
        }

        function agregarCalificaciones() {
            let nuevasCalificaciones = [];
            let cantidad = parseInt(prompt("¿Cuántas calificaciones adicionales deseas ingresar?"));

            if (isNaN(cantidad) || cantidad <= 0) {
                alert("Por favor, ingresa un número válido mayor a 0.");
                return;
            }

            for (let i = 0; i < cantidad; i++) {
                let calificacion;
                do {
                    calificacion = prompt(`Ingresa la calificación ${i + 1}: (debe ser un número entero)`);
                    calificacion = parseInt(calificacion);
                    if (isNaN(calificacion)) {
                        alert("Por favor, ingresa un número entero válido.");
                    }
                } while (isNaN(calificacion));
                nuevasCalificaciones.push(calificacion);
            }


            let cuerpoTabla = tablaCalificaciones.querySelector("tbody");
            let total = 0;

            nuevasCalificaciones.forEach((calificacion, index) => {
                let fila = document.createElement("tr");
                fila.innerHTML = `
                    <td>${cuerpoTabla.rows.length + index + 1}</td>
                    <td>${calificacion}</td>
                `;
                cuerpoTabla.appendChild(fila);
                total += calificacion;
            });


            let sumaActual = Array.from(cuerpoTabla.rows).reduce((suma, fila) => suma + parseInt(fila.cells[1].textContent), 0);
            let promedio = (sumaActual / cuerpoTabla.rows.length).toFixed(2);

            tablaCalificaciones.querySelector("tfoot th:nth-child(2)").textContent = promedio;
        }

        function mostrarTablaCalificaciones(calificaciones) {
            let suma = calificaciones.reduce((a, b) => a + b, 0);
            let promedio = (suma / calificaciones.length).toFixed(2);

            let tablaHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Calificación</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

            calificaciones.forEach((cal, index) => {
                tablaHTML += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${cal}</td>
                    </tr>
                `;
            });

            tablaHTML += `
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Promedio</th>
                            <th>${promedio}</th>
                        </tr>
                    </tfoot>
                </table>
                <button onclick="eliminarTabla()">Eliminar Tabla</button>
            `;

            let divResultado = document.getElementById("resultado");
            divResultado.innerHTML = tablaHTML;
            tablaCalificaciones = divResultado.querySelector("table");
        }

        function eliminarTabla() {
            document.getElementById("resultado").innerHTML = "";
            tablaCalificaciones = null;
        }