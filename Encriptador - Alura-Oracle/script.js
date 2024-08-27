

function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

function encriptar() {
    const input = document.getElementById('input-text').value;
    const errorMessage = document.getElementById('error-message');
    const inco = document.getElementById('inco');

    if (!validarTexto(input) || input.trim() === '') {
        errorMessage.textContent = 'Que sean sin mayús y sin acentos, por favor, gracias :)';
        return;
    }

    const textoEncriptado = input
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById('output-text').value = textoEncriptado;
    errorMessage.textContent = ''; 
    inco.style.display = 'none'; 
}

function desencriptar() {
    const input = document.getElementById('input-text').value;
    const errorMessage = document.getElementById('error-message');
    const inco = document.getElementById('inco');

    if (!validarTexto(input) || input.trim() === '') {
        errorMessage.textContent = 'Por favor, ingrese solo letras minúsculas sin caracteres especiales.';
        return;
    }

    const textoDesencriptado = input
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById('output-text').value = textoDesencriptado;
    errorMessage.textContent = '';
    inco.style.display = 'none'; 
}

document.getElementById('input-text').addEventListener('input', function() {
    if (this.value === '') {
        document.getElementById('inco').style.display = 'block'; 
    }
});


