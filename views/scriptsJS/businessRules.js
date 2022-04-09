class BusinessRules {

    constructor() {

    }

    arredondar(numero) {
        return (Math.round(numero * 100) / 100).toFixed(2);
    }

    //DEFININDO SALÁRIOS
    calculateSalary() {
        var cargo = document.getElementById('occupation').value;
        var salario = document.getElementById('salary').value;

        if (salario <= 0 || salario == undefined || salario == null) {
            if (cargo == 'gerente') {
                document.getElementById('totalSalary').value = this.arredondar(21000.00);
            } else if (cargo == 'analistaDeSistemas') {
                document.getElementById('totalSalary').value = this.arredondar(11000.00);
            } else if (cargo == 'desenvolvedor') {
                document.getElementById('totalSalary').value = this.arredondar(9500.00);
            } else if (cargo == 'dba') {
                document.getElementById('totalSalary').value = this.arredondar(10500.00);
            }
        } else {
            var salarioTipoNumero = parseFloat(document.getElementById('salary').value);
            if (cargo == 'gerente') {
                document.getElementById('totalSalary').value = this.arredondar(salarioTipoNumero += salarioTipoNumero * 0.10);
            } else if (cargo == 'analistaDeSistemas') {
                document.getElementById('totalSalary').value = this.arredondar(salarioTipoNumero += salarioTipoNumero * 0.05);
            } else {
                document.getElementById('totalSalary').value = this.arredondar(salarioTipoNumero);
            }
        }

    }

    calculateAge(birthDate) {
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
        var dataAniversario = birthDate.value;
        var diferenca = moment(data, "YYYY-MM-DD").diff(moment(dataAniversario, "YYYY-MM-DD"));
        var anos = parseInt(moment.duration(diferenca).asYears());

        if (anos < 18) {
            throw new Error('O funcionário deve ser maior de idade para o cadastro!');
        }
    }

    activeDisabled() {
        document.getElementById('salary').removeAttribute('required');
    }

    validateName() {
        var nome = document.getElementById('name').value;
        var cond = !!nome.match(/^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/) + ' ' + nome;
        if (!cond) {
            throw new Error('O campo deve ter no mínimo o nome, segundo nome e/ou sobrenome');
        }
    }
}

var businessRules = new BusinessRules();