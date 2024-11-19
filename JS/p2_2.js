let confirmacion = prompt("¿Son correctos los datos ingresados? (Responde con 'si' o 'no')").toLowerCase();

if (confirmacion === "si") {
  console.log("Registro guardado correctamente: DATOS");
} else {
  console.log("Registros borrados.");
}