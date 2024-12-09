// Suma de dos números
const realizarSuma = () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 + num2;
    document.getElementById("resultadoSuma").textContent = `Resultado: ${resultado}`;
  };
  
  // Determinar si un número es par
  const determinarPar = () => {
    const numero = parseInt(document.getElementById("numero").value, 10);
    const esPar = numero % 2 === 0;
    document.getElementById("resultadoPar").textContent = esPar
      ? "El número es par."
      : "El número es impar.";
  };
  
  // Función .map
  const practicaMap = () => {
    const numeros = [1, 2, 3, 4, 5];
    const cuadrados = numeros.map(num => num ** 2);
    document.getElementById("resultadoMap").textContent = `Cuadrados: ${cuadrados.join(", ")}`;
  };
  
  // Obtener nombres de una lista de objetos
  const obtenerNombres = () => {
    const personas = [
      { nombre: "Ana" },
      { nombre: "Luis" },
      { nombre: "María" },
      { nombre: "Pedro" },
    ];
    const nombres = personas.map(persona => persona.nombre);
    document.getElementById("resultadoNombres").textContent = `Nombres: ${nombres.join(", ")}`;
  };
  