function mostrarResultado() {
    const form = document.getElementById("matriz")
    const matriz = new Array(3);

    for (let i = 0; i < 3; i++) {
        matriz[i] = new Array(3);

        for (let j = 0; j < 3; j++) {
            matriz[i][j] = parseInt(form.children[j + (i * 3)].value);
        }
    }

    const matrizResultado = matrizTranspuesta(matriz);
    const form2 = document.getElementById("matrizResultado");

    for (let i = 0; i < matrizResultado.length; i++) {

        for (let j = 0; j < matrizResultado[i].length; j++) {
            form2.children[j + (i * 3)].value = matrizResultado[i][j]
        }
    }
}

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        document.getElementById("resultadoTranspuesta").addEventListener("click", () => { mostrarResultado() })
    }
}

export function matrizTranspuesta(matriz) {
    const matrizTranspuesta = new Array(3);
    for (let i = 0; i < 3; i++) {
        matrizTranspuesta[i] = new Array(3);
        for (let j = 0; j < 3; j++) {
            matrizTranspuesta[i][j] = matriz[j][i];
        }
    }
    return matrizTranspuesta;
}