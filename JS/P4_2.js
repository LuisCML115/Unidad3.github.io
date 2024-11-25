
const grades = {};

function toggleSchedule() {
    const scheduleContainer = document.getElementById('scheduleContainer');
    if (scheduleContainer.style.display === 'none') {
        scheduleContainer.style.display = 'block';
        horarioSemestre.imprimirHorario();
    } else {
        scheduleContainer.style.display = 'none';
    }
}

function addGrade() {
    const subject = document.getElementById('subjectSelect').value;
    const grade = parseFloat(document.getElementById('gradeInput').value);
    if (subject && !isNaN(grade) && grade >= 0 && grade <= 100) {
        if (confirm(`¿Deseas agregar la calificación ${grade} para ${subject}?`)) {
            grades[subject] = grade;
            updateGradesDisplay();
            calculateAndDisplayResults();
        }
    } else {
        alert('Por favor, selecciona una materia y ingresa una calificación válida (0-100).');
    }
}

function updateGradesDisplay() {
    const display = document.getElementById('gradesDisplay');
    display.innerHTML = '';
    for (const [subject, grade] of Object.entries(grades)) {
        const gradeElement = document.createElement('span');
        gradeElement.className = 'grade-display';
        gradeElement.textContent = `${subject}: ${grade}`;
        display.appendChild(gradeElement);
    }
}

function calculateAndDisplayResults() {
    const sumReduce = Object.values(grades).reduce((acc, curr) => acc + curr, 0);
    let sumFor = 0;
    for (const grade of Object.values(grades)) {
        sumFor += grade;
    }
    const averageReduce = sumReduce / Object.keys(grades).length;
    let averageForEach = 0;
    Object.values(grades).forEach(grade => averageForEach += grade);
    averageForEach /= Object.keys(grades).length;

    const results = document.getElementById('gradeResults');
    results.innerHTML = `
        <p>Suma (usando reduce): ${sumReduce.toFixed(2)}</p>
        <p>Suma (usando for): ${sumFor.toFixed(2)}</p>
        <p>Promedio (usando reduce): ${averageReduce.toFixed(2)}</p>
        <p>Promedio (usando forEach): ${averageForEach.toFixed(2)}</p>
    `;
}

function resetGrades() {
    if (confirm('¿Estás seguro de que quieres reiniciar todas las calificaciones?')) {
        Object.keys(grades).forEach(key => delete grades[key]);
        updateGradesDisplay();
        document.getElementById('gradeResults').innerHTML = '';
        document.getElementById('subjectSelect').value = '';
        document.getElementById('gradeInput').value = '';
    }
}
