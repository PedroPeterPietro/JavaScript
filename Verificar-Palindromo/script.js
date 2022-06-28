document.getElementById("submit").addEventListener("click", verificaPalindromo);

function verificaPalindromo() {
    let palavra = document.querySelector('#word').value;
    console.log("palavra", palavra);

    if (!palavra) {
        return alert("String inexistente");
    } else if (palavra.split("").reverse().join("") === palavra) {
        return alert("A palavra é um palindromo");
    } else {
        return alert("A palavra não é um palindromo");
    }
}