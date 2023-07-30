// Definimos el constructor para el objeto Ambiente
function Ambiente(nombre, metrosCuadrados, color, manos) {
  this.nombre = nombre;
  this.metrosCuadrados = metrosCuadrados;
  this.color = color;
  this.manos = manos;
}

// Método para calcular la cantidad de pintura necesaria por ambiente y color
Ambiente.prototype.calcularPintura = function () {
  const litrosPorMano = 0.11;
  const litrosPorColor = this.metrosCuadrados * this.manos * litrosPorMano;
  return `${this.nombre} - Color ${this.color}: ${litrosPorColor.toFixed(2)} litros`;
};

// Función para calcular la cantidad total de pintura por color en toda la casa
function calcularTotalPorColor(ambientes) {
  const totalPorColor = ambientes.reduce((acc, ambiente) => {
    const litrosPorColor = ambiente.metrosCuadrados * ambiente.manos * 0.11;
    if (!acc[ambiente.color]) {
      acc[ambiente.color] = 0;
    }
    acc[ambiente.color] += litrosPorColor;
    return acc;
  }, {});

  return totalPorColor;
}

// Función principal que maneja los inputs y outputs a través de prompt y console.log
function main() {
  const ambientes = [];
  const numAmbientes = parseInt(prompt("Ingrese la cantidad de ambientes:"));

  for (let i = 0; i < numAmbientes; i++) {
    const nombre = prompt(`Ingrese el nombre del ambiente ${i + 1}:`);
    const metrosCuadrados = parseFloat(prompt(`Ingrese los metros cuadrados del ambiente ${i + 1}:`));
    const color = prompt(`Ingrese el color del ambiente ${i + 1}:`);
    const manos = parseInt(prompt(`Ingrese la cantidad de manos de pintura para el ambiente ${i + 1}:`));

    const ambiente = new Ambiente(nombre, metrosCuadrados, color, manos);
    ambientes.push(ambiente);
  }

  // Ordenamos los ambientes por nombre del color antes de mostrar los resultados
  ambientes.sort((a, b) => a.color.localeCompare(b.color));

  console.log("Resultados:");
  ambientes.forEach(ambiente => {
    console.log(ambiente.calcularPintura());
  });

  const totalPorColor = calcularTotalPorColor(ambientes);
  console.log("\nTotal de litros de pintura por color en toda la casa (ordenado por nombre de color):");
  for (const color in totalPorColor) {
    console.log(`Color ${color}: ${totalPorColor[color].toFixed(2)} litros`);
  }
}

// Llamamos a la función principal para iniciar la calculadora
main();
