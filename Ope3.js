function mostrarResultado() {
  const expresion = document.getElementById("funcion").value;
  const a = parseFloat(document.getElementById("limiteA").value);
  const b = parseFloat(document.getElementById("limiteB").value);
  const n = parseInt(document.getElementById("intervalos").value);
  const resultado = calcularIntegral(expresion, a, b, n);
  document.getElementById("resultado").value = resultado;
}

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
      document.getElementById("calcular").addEventListener("click", () => { mostrarResultado() })
  }
}

// Función para evaluar una expresión matemática
function evaluarExpresion(expresion, x) {
  return eval(expresion.replace(/x/g, x));
}

// Función para calcular la integral utilizando la regla del trapecio
export function calcularIntegral(expresion, a, b, n) {
  const h = (b - a) / n;
  let suma = evaluarExpresion(expresion, a) + evaluarExpresion(expresion, b);

  for (let i = 1; i < n; i++) {
    const x = a + i * h;
    suma += 2 * evaluarExpresion(expresion, x);
  }

  return (h / 2) * suma;
}