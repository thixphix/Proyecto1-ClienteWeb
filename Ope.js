class MatrizTranspuestaInversa {

    constructor() {

        document.onreadystatechange = () => {
            if (document.readyState === "complete") {
                document.getElementById("resultadoTranspuesta").addEventListener("click", () => { this.mostrarResultado(1) })
                document.getElementById("resultadoInversa").addEventListener("click", () => { this.mostrarResultado(2) })
                document.getElementById("crearMatriz").addEventListener("click", () => { this.crearMatriz() })
            }
        }
    }

    mostrarResultado(tipo) {
        const form = document.getElementById("matriz")
        const filas = parseInt(document.getElementById("Filas").value);
        const columnas = parseInt(document.getElementById("Columnas").value);
        const matriz = new Array(filas);

        for (let i = 0; i < filas; i++) {
            matriz[i] = new Array(columnas);

            for (let j = 0; j < columnas; j++) {
                matriz[i][j] = parseInt(form.children[j + (i * columnas)].value);
            }
        }
       
        let matrizResultado = null;

        if (tipo === 1) {
            matrizResultado = this.matrizTranspuesta(matriz);
        } else if (tipo === 2) {
            matrizResultado = this.matrizInversa(matriz);
        }

        const form2 = document.getElementById("matrizResultado");
        form2.style.display = "grid"
        form2.style.gridTemplateColumns = `repeat(${filas}, 55px)`
        form2.style.rowGap = "4px"
        form2.style.borderCollapse = "collapse"
        form2.innerHTML = "";

        for (let i = 0; i < matrizResultado.length; i++) {

            for (let j = 0; j < matrizResultado[i].length; j++) {
                const input = document.createElement("input");
                input.type = "text";
                input.className = "mi-input";
                input.value = matrizResultado[i][j];
                form2.appendChild(input);
            }
            
        }
    }

    crearMatriz() {
        const m = parseInt(document.getElementById("Filas").value);
        const n = parseInt(document.getElementById("Columnas").value);
        
        const matrizN = m * n;
        const matrizForm = document.getElementById("matriz");
        matrizForm.style.display = "grid"
        matrizForm.style.gridTemplateColumns = `repeat(${n}, 55px)`
        matrizForm.style.rowGap = "4px"
        matrizForm.style.borderCollapse = "collapse"
        matrizForm.innerHTML = "";

        for (let i = 0; i < matrizN; i++) {
            const input = document.createElement("input");
            input.type = "text";
            input.className = "mi-input";
            document.getElementById("matriz").appendChild(input);
        }
    }

    matrizTranspuesta(matriz) {
        const m = matriz.length;
        const n = matriz[0].length;
        const matrizTranspuesta = new Array(n);
        for (let i = 0; i < n; i++) {
            matrizTranspuesta[i] = new Array(m);
            for (let j = 0; j < m; j++) {
                matrizTranspuesta[i][j] = matriz[j][i];
            }
        }
        return matrizTranspuesta;
    }

    matrizInversa(matriz) {
        const filas = matriz.length;
        const columnas = matriz[0].length;
    
        if (filas !== columnas) {
          throw new Error('La matriz debe ser cuadrada para calcular su inversa');
        }
    
        // Crear una matriz identidad del mismo tamaño
        const identidad = [];
        for (let i = 0; i < filas; i++) {
          identidad.push ([]);
          for (let j = 0; j < filas; j++) {
    
          // La diagonal principal es 1 y el resto de elementos son 0
            identidad[i][j] = i === j ? 1 : 0;
          }
        }
    
        for (let i = 0; i < filas; i++) {
          // Dividir la fila actual por el pivote
          const pivote = matriz[i][i];
          for (let j = 0; j < filas; j++) {
            matriz[i][j] /= pivote;
            identidad[i][j] /= pivote;
          }
    
          // Restar múltiplos de la fila actual a las filas restantes
          for (let k = 0; k < filas; k++) {
            if (k !== i) {
              const factor = matriz[k][i];
              for (let j = 0; j < filas; j++) {
                matriz[k][j] -= factor * matriz[i][j];
                identidad[k][j] -= factor * identidad[i][j];
              }
            }
          }
        }
        console.log(matriz)
        return identidad;
    }
}

class OperacionesDosMatrices {

    constructor() {
        document.onreadystatechange = () => {
            if (document.readyState === "complete") {
                document.getElementById("resultadoProducto").addEventListener("click", () => { this.mostrarResultadoAB(1) })
                document.getElementById("resultadoSuma").addEventListener("click", () => { this.mostrarResultadoAB(2) })
                document.getElementById("resultadoResta").addEventListener("click", () => { this.mostrarResultadoAB(3) })
                document.getElementById("crearMatriz").addEventListener("click", () => { this.crearMatriz() })
            }
        }
    }

    mostrarResultadoAB(tipo) {
        const form = document.getElementById("matrizA")
        const form2 = document.getElementById("matrizB")
        const filas = parseInt(document.getElementById("Filas").value);
        const columnas = parseInt(document.getElementById("Columnas").value);

        const matrizA = new Array(filas);
        const matrizB = new Array(filas);
        for (let i = 0; i < filas; i++) {
            matrizA[i] = new Array(columnas);
            matrizB[i] = new Array(columnas);

            for (let j = 0; j < columnas; j++) {
                matrizA[i][j] = parseInt(form.children[j + (i * columnas)].value);
                matrizB[i][j] = parseInt(form2.children[j + (i * columnas)].value);
            }
        }

        let matrizResultadoAB = null;

        if (tipo === 1) {
            matrizResultadoAB = this.produto(matrizA, matrizB);
        } else if (tipo === 2) {
            matrizResultadoAB = this.suma(matrizA, matrizB);
        } else if (tipo === 3) {
            matrizResultadoAB = this.resta(matrizA, matrizB);
        }

        const form3 = document.getElementById("matrizResultadoAB");
        form3.style.display = "grid"
        form3.style.gridTemplateColumns = `repeat(${columnas}, 55px)`
        form3.style.rowGap = "4px"
        form3.style.borderCollapse = "collapse"
        form3.innerHTML = "";

        for (let i = 0; i < matrizResultadoAB.length; i++) {

            for (let j = 0; j < matrizResultadoAB[i].length; j++) {
                const input = document.createElement("input");
                input.type = "text";
                input.className = "mi-input";
                input.value = matrizResultadoAB[i][j];
                form3.appendChild(input);
            }
            
        }
    }

    crearMatriz() {
        const m = parseInt(document.getElementById("Filas").value);
        const n = parseInt(document.getElementById("Columnas").value);
        
        const matrizN = m * n;
        const matrizForm = document.getElementById("matrizA");
        matrizForm.style.display = "grid"
        matrizForm.style.gridTemplateColumns = `repeat(${n}, 55px)`
        matrizForm.style.rowGap = "4px"
        matrizForm.style.borderCollapse = "collapse"
        matrizForm.innerHTML = "";

        for (let i = 0; i < matrizN; i++) {
            const input = document.createElement("input");
            input.type = "text";
            input.className = "mi-input";
            document.getElementById("matrizA").appendChild(input);
        }

        const matrizForm2 = document.getElementById("matrizB");
        matrizForm2.style.display = "grid"
        matrizForm2.style.gridTemplateColumns = `repeat(${n}, 55px)`
        matrizForm2.style.rowGap = "4px"
        matrizForm2.style.borderCollapse = "collapse"
        matrizForm2.innerHTML = "";

        for (let i = 0; i < matrizN; i++) {
            const input = document.createElement("input");
            input.type = "text";
            input.className = "mi-input";
            document.getElementById("matrizB").appendChild(input);
        }
    }


    produto(matrizA, matrizB) {
        const m1 = matrizA.length;
        const n1 = matrizA[0].length;
        const m2 = matrizB.length;
        const n2 = matrizB[0].length;

        const produto = [];
        for (let i = 0; i < m1; i++) {
            produto[i] = [];
            for (let j = 0; j < n2; j++) {
                let suma = 0;
                for (let k = 0; k < n1; k++) {
                    suma += matrizA[i][k] * matrizB[k][j];
                }
                produto[i][j] = suma;
            }
        }
        return produto;
    }

    suma(matrizA, matrizB) {
        const m = matrizA.length;
        const n = matrizA[0].length;
    
        const suma = [];
        for (let i = 0; i < m; i++) {
            suma[i] = [];
            for (let j = 0; j < n; j++) {
                suma[i][j] = matrizA[i][j] + matrizB[i][j];
            }
        }
        return suma;
    }

    resta(matrizA, matrizB) {
        const m = matrizA.length;
        const n = matrizA[0].length;

        const resta = [];
        for (let i = 0; i < m; i++) {
            resta[i] = [];
            for (let j = 0; j < n; j++) {
                resta[i][j] = matrizA[i][j] - matrizB[i][j];
            }
        }
        return resta;
    }

}

class Integrales {

    constructor() {
        document.onreadystatechange = () => {
            if (document.readyState === "complete") {
                document.getElementById("calcular").addEventListener("click", () => { this.mostrarResultado() })
            }
        }
    }

    mostrarResultado() {
        const expresion = document.getElementById("funcion").value;
        const a = parseFloat(document.getElementById("limiteA").value);
        const b = parseFloat(document.getElementById("limiteB").value);
        const n = parseInt(document.getElementById("intervalos").value);
        const resultado = this.calcularIntegral(expresion, a, b, n);
        document.getElementById("resultado").value = resultado;
    }

    // Función para evaluar una expresión matemática
    evaluarExpresion(expresion, x) {
        return eval(expresion.replace(/x/g, x));
    }

    // Función para calcular la integral utilizando la regla del trapecio
    calcularIntegral(expresion, a, b, n) {
        const h = (b - a) / n;
        let suma = this.evaluarExpresion(expresion, a) + this.evaluarExpresion(expresion, b);

        for (let i = 1; i < n; i++) {
            const x = a + i * h;
            suma += 2 * this.evaluarExpresion(expresion, x);
        }

        return (h / 2) * suma;
    }
}