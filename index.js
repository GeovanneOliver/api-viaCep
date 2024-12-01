import { criarESalvarArquivo } from "./gerarArquivo.js";
import { buscaCep } from "./buscaCep.js"
import promptSync from "prompt-sync";

const prompt = promptSync();

const opcao = prompt("Digite a forma de pesquisar 1: CEP ou 2: Endereco ");
let endereco = "";

if (opcao === "1") {
    endereco = prompt("Digite o cep: ");
} else if (opcao === "2") {
    const estado = prompt("Digite a UF: (ex: SP) ");
    const cidade = prompt("Digite a cidade: ");
    const rua = prompt("Digite o rua: ");

    endereco = estado + "/" + cidade + "/" + rua;
    endereco = endereco.replaceAll(" ", "+");
    
} else {
    console.log("Opção inválida");
}

const resultado = await buscaCep(endereco);
console.log(resultado);

criarESalvarArquivo(endereco.replaceAll("/", "."), resultado);
