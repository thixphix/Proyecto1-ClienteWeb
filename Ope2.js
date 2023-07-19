function mostrarResultadoAB(tipo) {
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
        matrizResultadoAB = produto(matrizA, matrizB);
    } else if (tipo === 2) {
        matrizResultadoAB = suma(matrizA, matrizB);
    } else if (tipo === 3) {
        matrizResultadoAB = resta(matrizA, matrizB);
    }

    const form3 = document.getElementById("matrizResultado");

    for (let i = 0; i < matrizResultadoAB.length; i++) {

        for (let j = 0; j < matrizResultadoAB[i].length; j++) {
            form3.children[j + (i * 3)].value = matrizResultadoAB[i][j]
        }
    }
}

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        document.getElementById("resultadoProducto").addEventListener("click", () => { mostrarResultadoAB(1) })
        document.getElementById("resultadoSuma").addEventListener("click", () => { mostrarResultadoAB(2) })
        document.getElementById("resultadoResta").addEventListener("click", () => { mostrarResultadoAB(3) }) 
    }
}

export function produto(matrizA, matrizB) {
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

export function suma(matrizA, matrizB) {
    const suma = new Array(3)
    for (let i = 0; i < 3; i++) {
        suma[i] = new Array(3)
        for (let j = 0; j < 3; j++) {
            suma[i][j] = matrizA[i][j] + matrizB[i][j];
        }
    }
    return suma;
}

export function resta(matrizA, matrizB) {
    const resta = new Array(3)
    for (let i = 0; i < 3; i++) {
        resta[i] = new Array(3)
        for (let j = 0; j < 3; j++) {
            resta[i][j] = matrizA[i][j] - matrizB[i][j];
        }
    }
    return resta;
}




