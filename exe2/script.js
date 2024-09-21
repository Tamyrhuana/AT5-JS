function lerNomesIdadesSalarios() {
    let continuar = true;
    let contador = 0;
    let alunos = [];

    do {
        contador++;
        let nome = prompt("Informe o nome completo:");
        nome = nome.trim();
        while (isNaN(nome) === false || nome.indexOf(" ") < 3) {
            nome = prompt("Informe o nome completo novamente:");
        }

        let ano = (prompt("Informe o ano de nascimento"));
        while (isNaN(ano) === true || (parseFloat(ano) <= 1901 || parseFloat(salario) >= 2007)) {
            ano = prompt("Informe o ano de nascimeno novamente:");
        }

        let inscricao = prompt("Informe o número de inscrição (deve começar com 2024 e ter no máximo 10 dígitos):");
        while (!inscricao.startsWith("2024") || inscricao.length > 10 || isNaN(inscricao)) {
            inscricao = prompt("Informe o número de inscrição novamente (deve começar com 2024 e ter no máximo 10 dígitos):");
        }

        let natureza = prompt("Informe a nota da materia de natureza:");
        while (isNaN(natureza) === true || (parseFloat(natureza) < 0 || parseFloat(natureza) > 1000)) {
            natureza = (parseFloat(prompt("Informe a nota da matéria de natureza novamente:")));

            if (natureza >= 550) {
                alert("Aprovado");
            } else if (natureza < 400) {
                alert("Reprovado!");
            } else if (natureza < 0)
                continuar = true;
            else if (natureza >= 401 && natureza <= 549)
                continuar = confirm("Recuperação");
            else
                continuar = false;

        }

        let humanas = prompt("Informe a nota da materia de humanas:");
        while (isNaN(humanas) === true || (parseFloat(humanas) < 0 || parseFloat(humanas) > 1000)) {
            humanas = (parseFloat(prompt("Informe a nota da materia de humanas novamente:")));
            if (humanas >= 550) {
                alert("Aprovado");
            } else if (humanas < 400) {
                alert("Reprovado!");
            } else if (humanas < 0)
                continuar = true;
            else if (natureza >= 401 && natureza <= 549)
                continuar = confirm("Recuperação");
            else
                continuar = false;
        }

        let linguagens = prompt("Informe a nota da materia de linguagens:");
        while (isNaN(linguagens) === true || (parseFloat(linguagens) < 0 || parseFloat(linguagens) > 1000)) {
            linguagens = (parseFloat(prompt("Informe a nota da materia de linguagens novamente:")));
            if (linguagens >= 550) {
                alert("Aprovado");
            } else if (linguagens < 400) {
                alert("Reprovado!");
            } else if (linguagens < 0)
                continuar = true;
            else if (linguagens >= 401 && linguagens <= 549)
                continuar = confirm("Recuperação");
            else
                continuar = false;
        }

        let matematica = prompt("Informe a nota da materia de matematica:");
        while (isNaN(matematica) === true || (parseFloat(matematica) < 0 || parseFloat(matematica) > 1000)) {
            matematica = (parseFloat(prompt("Informe a nota da materia de matematica novamente:")));
            if (matematica >= 550) {
                alert("Aprovado");
            } else if (matematica < 400) {
                alert("Reprovado!");
            } else if (matematica < 0)
                continuar = true;
            else if (matematica >= 401 && matematica <= 549)
                continuar = confirm("Recuperação");
            else
                continuar = false;
        }

        let redacao = prompt("Informe a nota da materia de redacao:");
        while (isNaN(redacao) === true || (parseFloat(redacao) < 0 || parseFloat(redacao) > 1000)) {
            redacao = (parseFloat(prompt("Informe a nota da materia de redacao novamente:")));
            if (redacao >= 550) {
                alert("Aprovado");
            } else if (redacao < 400) {
                alert("Reprovado!");
            } else if (redacao < 0)
                continuar = true;
            else if (redacao >= 401 && redacao <= 549)
                continuar = confirm("Recuperação");
            else
                continuar = false;
        }


        let aluno = {
            nome: nome,
            ano: parseInt(ano),
            inscricao: parseFloat(inscricao),
            natureza: parseFloat(natureza),
            humanas: parseFloat(humanas),
            linguagens: parseFloat(linguagens),
            matematica: parseFloat(matematica),
            redacao: parseFloat(redacao)
        };


        alunos.push(alunos);

        if (contador < 5)
            continuar = true;
        else if (contador >= 5 && contador < 20)
            continuar = confirm("Deseja continuar o cadastro?");
        else
            continuar = false;


    } while (continuar === true);

    return alunos;

}

function exibirAlunos(listaAlunos) {
    let mensagem = "";
    for (let i = 0; i < listaAlunos.length; i++) {
        let emp = listaAlunos[i];
        mensagem += `
            Nome: ${emp.nome} <br/>
            Ano: ${emp.ano} anos <br/>
            Número de inscrição: ${emp.inscricao} <br/>
            Nota de Natureza: ${emp.natureza} <br/>
            Nota de Humanas: ${emp.humanas} <br/>
            Nota de Linguagens: ${emp.linguagens} <br/>
            Nota de Matemática: ${emp.matematica} <br/>
            Nota de Redação: ${emp.redacao} <br/>
            <br/><br/>
        `;
    }
    document.write(mensagem);
}

let lista = lerNomesIdadesSalarios();
exibirAlunos(lista);

console.log(lista);