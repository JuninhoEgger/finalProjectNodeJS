function dateLimiter() {
    dataAtual = new Date();
    dia = dataAtual.getDate();
    mes = dataAtual.getMonth() + 1;
    ano = dataAtual.getFullYear();

    if (dia < 10) {
        dia = '0' + dia;
    }

    if (mes < 10) {
        mes = '0' + mes;
    }

    data = ano + "-" + mes + "-" + dia;

    console.log(data)

    document.getElementById('birthDate').setAttribute("max", data);
}