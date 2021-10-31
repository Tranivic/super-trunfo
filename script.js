var carta1 = {
    Nome: "Dragao Branco",
    atributos: {
        Ataque: 10,
        Defesa: 8,
        Fogo: 2,
        Veneno: 3,
    },
    img: "https://img.elo7.com.br/product/zoom/26B13A2/painel-de-festa-dragao-como-treinar-seu-dragao.jpg"
}

var carta2 = {
    Nome: "Dragao Infernal",
    atributos: {
        Ataque: 6,
        Defesa: 7,
        Fogo: 9,
        Veneno: 6,
    },
    img: "https://www.rodoinside.com.br/wp-content/uploads/2015/12/sopro-do-dragao-768x480.jpg"

}

var carta3 = {
    Nome: "Dragao Marinho",
    atributos: {
        Ataque: 5,
        Defesa: 7,
        Fogo: 4,
        Veneno: 8,
    },
    img: "https://www.cacadoresdelendas.com.br/japao/wp-content/uploads/2014/06/Ryujin_Rei-Drag%C3%A3o_japanese-dragon_2-1000x691.jpg"
}

var carta4 = {
    Nome: "Dragao Espectral",
    atributos: {
        Ataque: 8,
        Defesa: 7,
        Fogo: 10,
        Veneno: 8,
    },
    img: "https://img.quizur.com/f/img6102b0b322ba72.89322245.png"
}

var cartas = [
    carta1,
    carta2,
    carta3,
    carta4,
]

var cartaJogador
var cartaMaquina


function sortearCarta() {

    cartaJogador = cartas[parseInt(Math.random() * cartas.length)];
    cartaMaquina = cartas[parseInt(Math.random() * cartas.length)];

    if (cartaJogador == cartaMaquina) {

        console.log("As cartas se repetiram")
        sortearCarta()

    } else {


        var imagemCartaJogador = document.getElementById("imagemCartaJogador")
        imagemCartaJogador.innerHTML = "<br><h3 class='nomeDrag'>" + cartaJogador.Nome + "</h3><img class='img' src='" + cartaJogador.img + "'>";

        for (var atributo in cartaJogador.atributos) {
            imagemCartaJogador.innerHTML += "<p class='listaAtributos'>" + atributo.toUpperCase() + ": " + cartaJogador.atributos[atributo] + "</p>";
        }


        document.getElementById("btnJogar").disabled = false;
        document.getElementById("btnResetar").disabled = false;
        document.getElementById("btnSortear").disabled = true;
        document.getElementById("btnSortear").style.display = "none";

        exibirOpcoes()
    }

}

function exibirOpcoes() {

    var opcoes = document.getElementById("opcoes")
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {

        opcoesTexto +=
            "<input type='radio' name='atributo' value=" + atributo + ">" + atributo + "</input>";
        opcoes.innerHTML = opcoesTexto;


    }


}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");

    for (var i = 0; i < radioAtributos.length; i++) {

        if (radioAtributos[i].checked == true) {

            return radioAtributos[i].value

        }

    }



}

function jogar() {

    var atributoSelecionado = obtemAtributoSelecionado();
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

    var elementoResultado = document.getElementById("resultado")

    if (document.querySelectorAll('input[type="radio"]:checked').length === 0) {

        alert("Escolha um atributo antes de jogar")

    } else if (valorCartaJogador > valorCartaMaquina) {
        exibirCartaMaquina()

        elementoResultado.innerHTML = "Você Venceu!"

        elementoResultado.style.color = "black"
        elementoResultado.style.backgroundColor = "green"

        document.getElementById("btnResetar").disabled = false;
        document.getElementById("btnJogar").disabled = true;

    } else if (valorCartaJogador == valorCartaMaquina) {
        exibirCartaMaquina()

        elementoResultado.innerHTML = "Empatou!"

        elementoResultado.style.color = "black"
        elementoResultado.style.backgroundColor = "yellow"

        document.getElementById("btnResetar").disabled = false;
        document.getElementById("btnJogar").disabled = true

    } else {
        exibirCartaMaquina()

        elementoResultado.innerHTML = "Você Perdeu!"

        elementoResultado.style.color = "black"
        elementoResultado.style.backgroundColor = "red"

        document.getElementById("btnResetar").disabled = false;
        document.getElementById("btnJogar").disabled = true
    }



}

function resetar() {

    elementoResultado = "";
    document.getElementById("opcoes").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnSortear").style.display = "initial";
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnResetar").disabled = true;
    document.getElementById("imagemCartaJogador").innerHTML = "";
    document.getElementById("imagemCartaMaquina").innerHTML = "";
}

function exibirCartaMaquina() {

    var imagemMaquina = document.getElementById("imagemCartaMaquina")

    imagemMaquina.innerHTML = "<br><h3 class='nomeDrag'>" + cartaMaquina.Nome + "</h3><img class='img' src='" + cartaMaquina.img + "'>";

    for (var atributo in cartaMaquina.atributos) {

        imagemMaquina.innerHTML += "<p class='listaAtributos'>" + atributo.toUpperCase() + ": " + cartaMaquina.atributos[atributo] + "</p>";
    }
    imagemMaquina.innerHTML += "<br>"



}