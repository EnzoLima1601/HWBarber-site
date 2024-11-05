if (!localStorage.getItem("verificador")) {
  localStorage.setItem("verificador", "false"); // Define "variavel" como "false" caso não exista ainda
}

//função que mexe nos cutpoints

if (!localStorage.getItem("cutpointsReset")) {
  // Redefine o valor de 'cutpoints' para 0
  localStorage.setItem("cutpoints", 0);

  // Marca que a redefinição foi realizada
  localStorage.setItem("cutpointsReset", "true");
}
// Recupera e exibe o valor de cutpoints
if (localStorage.getItem("verificador") === "true") {
  // Definindo o valor de 'numero'
  let numero = parseInt(localStorage.getItem("cutpoints")) || 0; // Usa o valor salvo em localStorage, ou 0 se não existir

  // Obtendo o elemento e atualizando o conteúdo
  const cutpointsSpan = document.getElementById("cutpointsValor");

  // Verifica se o elemento existe antes de tentar atualizá-lo
  if (cutpointsSpan) {
    cutpointsSpan.textContent = numero; // Define o texto do elemento com o valor de 'numero'
    cutpointsSpan.hidden = false; // Garante que o elemento seja exibido
  } else {
    console.error("Elemento 'cutpointsValor' não encontrado.");
  }
}

//fimunção que mexe nos cutpoints

if (localStorage.getItem("verificador") === "true") {
  escolhaServico = "";
  const TocarCompra = document.getElementById("cutpointsValor");
  cutpointsSpan.textContent = escolhaServico;
  cutpointsSpan.hidden = false;
}

document.addEventListener("DOMContentLoaded", function () {
  TrocaParaPagAgendamento();
  header();
  // carregarTemplate();
  funcaologar();
  trocaTela();
  Pagamento();
  clicarBotao();
  // redirecionarParaProximaPagina();
});

// Template
// const TemplateTentativa = document.querySelector("body");

// function PopUp(){

// }
// Fim Template


//função logar

function funcaologar() {
  document
    .getElementById("Botaofinalizar")
    .addEventListener("click", function () {
      localStorage.setItem("verificador", "true");

      window.location.href = "../../TelaInicio/TelaInicio.html";
    });
}

//fimfunção logar

//função deslogar
document.addEventListener("DOMContentLoaded", function () {
  // Adiciona o listener ao botão de deslogar assim que o DOM estiver carregado
  const buttonFinalizar = document.getElementById("Botaofinalizar");
});
function deslogar() {
  localStorage.setItem("verificador", "false");
  window.location.href = "../../TelaInicio/TelaInicio.html";
}

//fim função deslogar

//comeco funcao header
function header() {
  var Inicio = document.getElementById("botaoInicio");
  if (Inicio) {
    Inicio.addEventListener("click", function () {
      window.location.href = "../../TelaInicio/TelaInicio.html";
    });
  }

  //para perfil, quando não esta logado, ir para a tela de login.
  if (localStorage.getItem("verificador") === "false") {
    perfil = document.getElementById("botaoPerfil");
    if (perfil) {
      perfil.addEventListener("click", function () {
        window.location.href = "/tela login/TelaLogin.html";
      });
    }
  }

  //carrinho
  carrinho = document.getElementById("Carrinho");
  if (carrinho) {
    if (localStorage.getItem("verificador") === "true") {
      carrinho.addEventListener("click", function () {
        window.location.href = "/Pagamento/carrinho.html";
      });
    }
    if (localStorage.getItem("verificador") === "false") {
      carrinho.addEventListener("click", function () {
        window.location.href = "/tela login/TelaLogin.html";
      });
    }
  }

  //funçãoverificador
  if (localStorage.getItem("verificador") === "true") {
    var Cortes = document.getElementById("botaoCortes");
    if (Cortes) {
      Cortes.addEventListener("click", function () {
        window.location.href = "../../Servicos/servico1.html";
      });
    }
    var Horarios = document.getElementById("botaoHorarios");
    if (Horarios) {
      Horarios.addEventListener("click", function () {
        window.location.href = "../TelaHora/Hora.html";
      });
    }
    var perfil = document.getElementById("botaoPerfil");
    if (perfil) {
      perfil.addEventListener("click", function () {
        window.location.href = "../Tela Usuario/TelaUsuario.html";
      });
    }
  }

  //Fimverificador

 
}
//FimHeader

//Rolar para Localização
function scrollToSection() {
  const section = document.getElementById("localization");
  section.scrollIntoView({ behavior: "smooth" });
}

//Tela Inicio
function TrocaParaPagAgendamento() {
  var Trocapag = document.getElementById("TrocaPagina1");
  if (Trocapag) {
    Trocapag.addEventListener("click", function () {
      if (localStorage.getItem("verificador") === "true") {
        window.location.href = "../Tela Agendamento/TelaAgendamento.html";
      } else {
        window.location.href = "../tela login/TelaLogin.html";
      }
    });
  }
  var Trocapag2 = document.getElementById("TrocaPagina2");
  if (Trocapag2) {
    Trocapag2.addEventListener("click", function () {
      if (localStorage.getItem("verificador") === "true") {
        window.location.href = "../Tela Agendamento/TelaAgendamento.html";
      } else {
        window.location.href = "../tela login/TelaLogin.html";
      }
    });
  }
  var Trocapag3 = document.getElementById("TrocaPagina3");
  if (Trocapag3) {
    Trocapag3.addEventListener("click", function () {
      if (localStorage.getItem("verificador") === "true") {
        window.location.href = "../Tela Agendamento/TelaAgendamento.html";
      } else {
        window.location.href = "../tela login/TelaLogin.html";
      }
    });
  }
}

//Troca de tela na tela de login para a tela de login do barbeiro
function trocaTela1() {
  var troca = document.getElementById("trocarTelaLoginBarbeiro");
  if (troca) {
    troca.addEventListener("click", function () {
      window.location.href = "/Tela barbeiro/Tela Login/loginBarbeiro.html";
    });
  }

  var trocaBarbeiro = document.getElementById("trocarTelaLoginBarbeiro1");
  if (trocaBarbeiro) {
    trocaBarbeiro.addEventListener("click", function () {
      window.location.href = "../../tela login/TelaLogin.html";
    });
  }
}
//

//Tela agendamento/hora/serviço
function clicarBotao() {
  var escolherDia = document.getElementById("clickIdAgendamento");
  if (escolherDia) {
    escolherDia.addEventListener("click", function () {
      window.location.href = "/TelaHora/Hora.html";
    });
  }
  var escolherHora = document.getElementById("clickIdHora");
  if (escolherHora) {
    escolherHora.addEventListener("click", function () {
      window.location.href = "/Servicos/servico1.html";
    });
  }

  var escolherServico = document.getElementById("clickIdServico");
  if (escolherServico) {
    escolherServico.addEventListener("click", function () {
      window.location.href = "/Pagamento/carrinho.html";
    });
  }
}

// Tela carrinho - Pix

function Pagamento() {
  var pagamentoPix = document.getElementById("PagamentoPix");
  if (pagamentoPix) {
    pagamentoPix.addEventListener("click", function () {
      window.location.href = "/Pagamento/pix/TelaPix.html";
      //setTimeout(function () {
      //window.location.href = "/Pagamento/pagamentoFinalizado/Finalizado.html"; // Altere para o URL da próxima página
      //}, 5000);
    });
  }
}

function redirecionarParaProximaPagina() {
  setTimeout(function () {
    //atualizar os cutpoints
    let numero = parseInt(localStorage.getItem("cutpoints")) || 0;
    numero += 10;
    localStorage.setItem("cutpoints", numero);
    const cutpointsSpan = document.getElementById("cutpointsValor");
    if (cutpointsSpan) {
      cutpointsSpan.textContent = numero;
    }
    //fimatualizarcutpoints
    window.location.href = "/Pagamento/pagamentoFinalizado/Finalizado.html"; // Substitua com a URL da próxima página
  }, 5000); // 5000 milissegundos = 5 segundos
}

function proximoBarbeiro() {
  var barbeiro = document.getElementById("confirmarContainer");
  if (barbeiro) {
    barbeiro.addEventListener("click", function () {
      window.location.href =
        "/Tela barbeiro/Tela progresso/progressoBarbeiro.html";
    });
  }
}
