/* FUNCTION TO CREATE THE USER LIST
 *
 * Creates the Array to store users
 */

var userNomes = [];
var userComidas = [];
var userPagamentos = [];

function saveUser() {
    let nomeUser = document.getElementById("nomeUser").value;
    let comidaUser = document.getElementById("comidaUser").value;
    let pagamentoUser = document.getElementById("pagamentoUser").checked;

    if (nomeUser) {
        userNomes.push(nomeUser);
        userComidas.push(comidaUser);
        pagamentoUser ? userPagamentos.push("Sim") : userPagamentos.push("Não");

        createList();

        document.getElementById("nomeUser").value = null;
        document.getElementById("comidaUser").value = null;
        document.getElementById("pagamentoUser").checked = false;
    } else {
        alert("Digite um nome");
        document.getElementById("nomeUser").focus();
    }
}

function createList() {
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuário</th><th>Levará</th><th>Pagou os R$25?</th><th>Ações</th></tr>";

    for (let i = 0; i < userNomes.length; i++) {
        tabela += "<tr><td class=\"" + userPagamentos[i] + "\">" + userNomes[i] + "</td><td>" + userComidas[i] + "</td><td>" + userPagamentos[i] + "</td><td><button class=\"btn btn-success\" onclick=\"edit(this.parentNode.parentNode.rowIndex)\">Editar</button><button class=\"btn btn-danger\" onclick=\"remove(this.parentNode.parentNode.rowIndex)\">Excluir</button></td></tr>";
        document.getElementById("tabela").innerHTML = tabela;
    }
}

// NAME EDIT FUNCTION

function edit(i) {
    document.getElementById("nomeUser").value = userNomes[i - 1];
    document.getElementById("comidaUser").value = userComidas[i - 1];
    userPagamentos[i - 1] == "Sim"
                           ? document.getElementById("pagamentoUser").checked = true
                           : document.getElementById("pagamentoUser").checked = false;
    
    userNomes.splice(i - 1, 1);
    userComidas.splice(i - 1, 1);
    userPagamentos.splice(i - 1, 1);
}

// NAME DELETE FUNCTION

function remove(i) {
    userNomes.splice(i - 1, 1);
    userComidas.splice(i - 1, 1);
    userPagamentos.splice(i - 1, 1);
    document.getElementById("tabela").deleteRow(i);
}
