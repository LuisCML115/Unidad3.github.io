
const horarioSemestre = {
    lunes: [
        "TELECOMUNICACIONES",
        "ARQUI DE COMPU",
        "S.O",
        "ING. SW", 
        "PROGRA WEB",
        "LENGUAJES Y AUTOMATAS",
        "BASES DE DATOS", 
        "SALIDA"
    ],
    martes: [
        "TELECOMUNICACIONES",
        "ARQUI DE COMPU",
        "S.O",
        "ING. SW", 
        "PROGRA WEB",
        "LENGUAJES Y AUTOMATAS",
        "BASES DE DATOS", 
        "SALIDA"
    ],
    miercoles: [
        "TELECOMUNICACIONES",
        "ARQUI DE COMPU",
        "S.O",
        "ING. SW", 
        "PROGRA WEB",
        "LENGUAJES Y AUTOMATAS",
        "BASES DE DATOS", 
        "SALIDA"
    ],
    jueves: [
        "TELECOMUNICACIONES",
        "ARQUI DE COMPU",
        "S.O",
        "ING. SW", 
        "PROGRA WEB",
        "LENGUAJES Y AUTOMATAS",
        "BASES DE DATOS", 
        "SALIDA"
    ],
    viernes: [
        "",
        "ARQUI DE COMPU",
        "",
        "", 
        "",
        "",
        "", 
        ""
    ],
    imprimirHorario: function() {
        let tablaHTML = "<table><thead><tr><th>Hora</th><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th></tr></thead><tbody>";


        const horas = [
            "1:00-2:00 PM", "2:00-3:00 PM", "3:00-4:00 PM", "4:00-5:00 PM", 
            "5:00-6:00 PM", "6:00-7:00 PM", "7:00-8:00 PM", 
        ];


        for (let i = 0; i < 7; i++) {
            tablaHTML += `<tr><td>${horas[i]}</td>`;
            for (const dia in this) {
                if (Array.isArray(this[dia])) {
                    const clase = this[dia][i] || "";  
                    tablaHTML += `<td>${clase}</td>`;
                }
            }
            tablaHTML += "</tr>";
        }

        tablaHTML += "</tbody></table>";
        
        document.getElementById("tablaHorario").innerHTML = tablaHTML;
    }
};


function decidirEjecutarHorario() {
    const decision = confirm("¿Deseas ver el horario del semestre?");
    if (decision) {
        horarioSemestre.imprimirHorario();  
    } else {
        document.getElementById("tablaHorario").innerHTML = "<p>No se imprimirá el horario.</p>";
    }
}
