let numeroSecreto = Math.floor(Math.random() * 101);
let tentativas = 5;

function adivinhar() {
    let numero = parseFloat(document.getElementById("numero").value);

    if (tentativas > 0) {
        if (numero === numeroSecreto) {
            document.getElementById("resultado").innerHTML = `🎉 Parabéns! Você acertou o número secreto: ${numeroSecreto}`;
            document.getElementById("tentativas").innerHTML = "";
        } else if (numero > numeroSecreto) {
            tentativas--;
            document.getElementById("resultado").innerHTML = `O número secreto é menor!`;
            document.getElementById("tentativas").innerHTML = `Você tem ${tentativas} tentativas restantes.`;
        } else if (numero < numeroSecreto) {
            tentativas--;
            document.getElementById("resultado").innerHTML = `O número secreto é maior!`;
            document.getElementById("tentativas").innerHTML = `Você tem ${tentativas} tentativas restantes.`;
        }


        if (tentativas === 0 && numero !== numeroSecreto) {
            document.getElementById("resultado").innerHTML = `😢 Você perdeu! O número secreto era ${numeroSecreto}.`;
            document.getElementById("tentativas").innerHTML = "";
        }
    }


    document.getElementById("numero").value = "";
}