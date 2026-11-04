// ===============================================================
// PROYECTO: CONVERSOR DE UNIDADES DE TEMPERATURA Y LONGITUD
// ===============================================================

// ---------------------------------------------------------------
// 1. FUNCIONES PURAS DE CONVERSIÓN (RF-01 al RF-04 y RF-06)
// ---------------------------------------------------------------

// Celsius a Fahrenheit: F = (C * 9/5) + 32
function celsiusAFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Fahrenheit a Celsius: C = (F - 32) * 5/9
function fahrenheitACelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// Metros a Kilómetros: km = m / 1000
function metrosAKilometros(metros) {
  return metros / 1000;
}

// Kilómetros a Metros: m = km * 1000
function kilometrosAMetros(kilometros) {
  return kilometros * 1000;
}

// ---------------------------------------------------------------
// 2. FUNCIÓN DE VALIDACIÓN DE ENTRADAS (RF-07)
// ---------------------------------------------------------------
function validarEntrada(valorTexto, tipoMagnitud) {
  // Validar si canceló o dejó el campo vacío / puros espacios
  if (valorTexto === null || valorTexto.trim() === "") {
    return { valido: false, mensaje: "Solicitar valor válido: la entrada no puede estar vacía." };
  }

  // Convertir a número
  const numero = Number(valorTexto);

  // Validar si no es un número o si no es finito (NaN, Infinity, etc.)
  if (isNaN(numero) || !Number.isFinite(numero)) {
    return { valido: false, mensaje: "Error: valor no numérico o inválido." };
  }

  // Validar restricción: longitudes no pueden ser negativas
  if (tipoMagnitud === "longitud" && numero < 0) {
    return { valido: false, mensaje: "Error: longitud inválida. No se permiten valores negativos." };
  }

  return { valido: true, valor: numero };
}

// ---------------------------------------------------------------
// 3. MENÚ PRINCIPAL Y CONTROL DE FLUJO (RF-05, RF-08 y RF-09)
// ---------------------------------------------------------------
function IniciarMenu() {
  let opcion = "";

  do {
    opcion = prompt(
      "=== MENÚ CONVERSOR DE UNIDADES ===\n" +
      "1. Convertir de Celsius a Fahrenheit\n" +
      "2. Convertir de Fahrenheit a Celsius\n" +
      "3. Convertir de Metros a Kilómetros\n" +
      "4. Convertir de Kilómetros a Metros\n" +
      "5. Salir\n\n" +
      "Ingrese una opción (1-5):"
    );

    // Si el usuario presiona "Cancelar"
    if (opcion === null) {
      alert("Operación cancelada. Saliendo del programa...");
      break;
    }

    opcion = opcion.trim();

    switch (opcion) {
      case "1": {
        const entrada = prompt("Ingrese la temperatura en grados Celsius (°C):");
        const validacion = validarEntrada(entrada, "temperatura");

        if (validacion.valido) {
          const resultado = celsiusAFahrenheit(validacion.valor);
          alert(`${validacion.valor} °C equivalen a ${resultado} °F`);
        } else {
          alert(validacion.mensaje);
        }
        break;
      }

      case "2": {
        const entrada = prompt("Ingrese la temperatura en grados Fahrenheit (°F):");
        const validacion = validarEntrada(entrada, "temperatura");

        if (validacion.valido) {
          const resultado = fahrenheitACelsius(validacion.valor);
          alert(`${validacion.valor} °F equivalen a ${resultado} °C`);
        } else {
          alert(validacion.mensaje);
        }
        break;
      }

      case "3": {
        const entrada = prompt("Ingrese la distancia en metros (m):");
        const validacion = validarEntrada(entrada, "longitud");

        if (validacion.valido) {
          const resultado = metrosAKilometros(validacion.valor);
          alert(`${validacion.valor} m equivalen a ${resultado} km`);
        } else {
          alert(validacion.mensaje);
        }
        break;
      }

      case "4": {
        const entrada = prompt("Ingrese la distancia en kilómetros (km):");
        const validacion = validarEntrada(entrada, "longitud");

        if (validacion.valido) {
          const resultado = kilometrosAMetros(validacion.valor);
          alert(`${validacion.valor} km equivalen a ${resultado} m`);
        } else {
          alert(validacion.mensaje);
        }
        break;
      }

      case "5":
        alert("Programa finalizado. ¡Hasta pronto!");
        break;

      default:
        alert("Opción inexistente: Opción inválida, seleccione un número del 1 al 5.");
        break;
    }

  } while (opcion !== "5");
}

// ---------------------------------------------------------------
// 4. EJECUCIÓN INICIAL
// ---------------------------------------------------------------
IniciarMenu();