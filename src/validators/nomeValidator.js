function validarNome(nome) {
    const partes = nome.trim().split(" ");

    if (partes.length < 2) return false;

    return partes.every(p => p.length >= 3);
}

module.exports = { validarNome };