class MatrizTranspuesta {

    constructor() {

        document.onreadystatechange = () => {
            if (document.readyState === "complete") {
                document.getElementById("resultadoTranspuesta").addEventListener("click", () => { this.mostrarResultado() })
            }
        }
    }

    mostrarResultado() {
        const form = document.getElementById("matriz")
        const matriz = new Array(3);

        for (let i = 0; i < 3; i++) {
            matriz[i] = new Array(3);

            for (let j = 0; j < 3; j++) {
                matriz[i][j] = parseInt(form.children[j + (i * 3)].value);
            }
        }

        const matrizResultado = this.matrizTranspuesta(matriz);
        const form2 = document.getElementById("matrizResultado");

        for (let i = 0; i < matrizResultado.length; i++) {

            for (let j = 0; j < matrizResultado[i].length; j++) {
                form2.children[j + (i * 3)].value = matrizResultado[i][j]
            }
        }
    }




    matrizTranspuesta(matriz) {
        const matrizTranspuesta = new Array(3);
        for (let i = 0; i < 3; i++) {
            matrizTranspuesta[i] = new Array(3);
            for (let j = 0; j < 3; j++) {
                matrizTranspuesta[i][j] = matriz[j][i];
            }
        }
        return matrizTranspuesta;
    }
}

class OperacionesDosMatrices {

    constructor() {
        document.onreadystatechange = () => {
            if (document.readyState === "complete") {
                document.getElementById("resultadoProducto").addEventListener("click", () => { this.mostrarResultadoAB(1) })
                document.getElementById("resultadoSuma").addEventListener("click", () => { this.mostrarResultadoAB(2) })
                document.getElementById("resultadoResta").addEventListener("click", () => { this.mostrarResultadoAB(3) })
            }
        }
    }

    mostrarResultadoAB(tipo) {
        const form = document.getElementById("matrizA")
        const matrizA = new Array(3);

        for (let i = 0; i < 3; i++) {
            matrizA[i] = new Array(3);

            for (let j = 0; j < 3; j++) {
                matrizA[i][j] = parseInt(form.children[j + (i * 3)].value);
            }
        }

        const form2 = document.getElementById("matrizB")
        const matrizB = new Array(3);

        for (let i = 0; i < 3; i++) {
            matrizB[i] = new Array(3);

            for (let j = 0; j < 3; j++) {
                matrizB[i][j] = parseInt(form2.children[j + (i * 3)].value);
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

        const form3 = document.getElementById("matrizResultado");

        for (let i = 0; i < matrizResultadoAB.length; i++) {

            for (let j = 0; j < matrizResultadoAB[i].length; j++) {
                form3.children[j + (i * 3)].value = matrizResultadoAB[i][j]
            }
        }
    }


    produto(matrizA, matrizB) {
        const produto = new Array(3)
        for (let i = 0; i < 3; i++) {
            produto[i] = new Array(3)
            for (let j = 0; j < 3; j++) {
                let suma = 0;
                for (let k = 0; k < 3; k++) {
                    suma += matrizA[i][k] * matrizB[k][j];
                }
                produto[i][j] = suma;
            }
        }
        return produto;
    }

    suma(matrizA, matrizB) {
        const suma = new Array(3)
        for (let i = 0; i < 3; i++) {
            suma[i] = new Array(3)
            for (let j = 0; j < 3; j++) {
                suma[i][j] = matrizA[i][j] + matrizB[i][j];
            }
        }
        return suma;
    }

    resta(matrizA, matrizB) {
        const resta = new Array(3)
        for (let i = 0; i < 3; i++) {
            resta[i] = new Array(3)
            for (let j = 0; j < 3; j++) {
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