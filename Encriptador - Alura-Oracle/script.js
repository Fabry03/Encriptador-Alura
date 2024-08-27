

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
        .replace(/a/g, "obo")
        .replace(/e/g, "nen")
        .replace(/i/g, "geo")
        .replace(/o/g, "ober")
        .replace(/u/g, "flai")
        .replace(/b/g,"tai")
        .replace(/p/g, "mon");

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
        .replace(/obo/g, "a")
        .replace(/nen/g, "e")
        .replace(/geo/g, "i")
        .replace(/ober/g, "o")
        .replace(/flai/g, "u")
        .replace(/tai/g, "b")
        .replace(/mon/g, "p");

    document.getElementById('output-text').value = textoDesencriptado;
    errorMessage.textContent = '';
    inco.style.display = 'none'; 
}

document.getElementById('input-text').addEventListener('input', function() {
    if (this.value === '') {
        document.getElementById('inco').style.display = 'block'; 
    }
});


