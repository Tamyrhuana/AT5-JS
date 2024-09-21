

function lerNomesIdadesSalarios() {



    let continuar = true;

    let contador = 0;

    let pagamento = [];

    do {

        let pagamento = [];

        contador++;

        let nome = prompt("Informe o Nome Completo:");

        nome = nome.trim();

        //Entra em Numeros e Nomes de 2 letras pra baixo

        while (isNaN(nome) === false || nome.indexOf(" ") < 3) {

            nome = prompt("Informe o Nome Completo novamente:");

        }



        let pis = prompt("Informe a o PIS/PASEP:");

        while (isNaN(pis) === true || (parseInt(pis) < 11)) {

            pis = prompt("Informe o PIS/PASEP novamente:");

        }



        let salario = prompt("Informe o Valor da Hora Trabalhada");

        while (isNaN(salario) === true || (parseFloat(salario) < 20 || parseFloat(salario) > 500)) {

            salario = prompt("Informe o Valor da Hora Trabalhada novamente:");

        }



        let horas = prompt("Informe a Quantidade de Horas Trabalhadas");

        while (isNaN(horas) === true || (parseFloat(horas) < 20 || parseFloat(horas) > 200)) {

            horas = prompt("Informe a Quantidade de Horas Trabalhadas novamente:");

        }





        pagamento["nome"] = nome;

        pagamento["idade"] = parseInt(pis);

        pagamento["salario"] = parseFloat(salario);

        pagamento["horas"] = parseFloat(horas);





        let valorTotal = salario * horas;

       

        let mensagem = `${nome}, recebeu R$ ${valorTotal.toFixed(2)} no mês`; ****************



       



        pagamento.push(pagamento);



        if (contador < 5)

            continuar = true;

        else if (contador >= 5 && contador < 50)

            continuar = confirm("Deseja continuar o cadastro?");

        else

            continuar = false;





    } while (continuar === true);



    return pagamento;



}

