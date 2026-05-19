// Uso de Date() — Relógio em tempo real

const relogioTexto =
  document.getElementById("relogioTexto");

function atualizarRelogio(){

  // Uso de Date()
  const agora = new Date();

  relogioTexto.innerHTML =
    agora.toLocaleTimeString("pt-BR");

}

// Uso de setInterval() — atualiza a cada 1 segundo
setInterval(atualizarRelogio, 1000);

atualizarRelogio();

// ELEMENTOS

const cards =
  document.querySelectorAll(".card");

const modal =
  document.getElementById("modal");

const overlay =
  document.getElementById("overlay");

const fechar =
  document.getElementById("fechar");

const tituloModal =
  document.getElementById("tituloModal");

const descricaoModal =
  document.getElementById("descricaoModal");

const imagemModal =
  document.getElementById("imagemModal");

const abrirCompra =
  document.getElementById("abrirCompra");

const modalCompra =
  document.getElementById("modalCompra");

const fecharCompra =
  document.getElementById("fecharCompra");

let imagens = [];
let index = 0;
let intervalo;

// addEventListener() — Evento click nos cards
// Manipulação de HTML e CSS dinamicamente

cards.forEach(card => {

  const botao =
    card.querySelector(".saibaMais");

  // Evento click
  botao.addEventListener("click",
  function(){

    // Manipulação HTML
    tituloModal.innerHTML =
      card.dataset.titulo;

    descricaoModal.innerHTML =
      card.dataset.descricao;

    // Manipulação CSS — muda cor de fundo do body
    document.body.style.background =
      card.dataset.cor;

    overlay.classList.add("active");
    modal.classList.add("active");

    imagens = [
      card.dataset.img1,
      card.dataset.img2,
      card.dataset.img3
    ];

    imagemModal.src = imagens[0];
    index = 0;

    // Uso de setInterval() — carrossel de imagens

    clearInterval(intervalo);

    intervalo = setInterval(() => {

      index++;

      if(index >= imagens.length){
        index = 0;
      }

      // Manipulação CSS — troca src da imagem
      imagemModal.src = imagens[index];

    }, 3000);

  });

});


// addEventListener() — Abrir modal compra
// Evento click


abrirCompra.addEventListener("click",
function(){

  modalCompra.classList.add("active");

});

// addEventListener() — Fechar modal detalhes
// Evento click

fechar.addEventListener("click",
function(){

  modal.classList.remove("active");
  overlay.classList.remove("active");

  // Manipulação CSS — restaura cor de fundo
  document.body.style.background = "";

  clearInterval(intervalo);

});

// addEventListener() — Fechar modal compra
// Evento click

fecharCompra.addEventListener("click",
function(){

  modalCompra.classList.remove("active");

});


// Eventos do mouse — mouseover e mouseout

cards.forEach(card => {

  // Evento mouseover
  card.addEventListener("mouseover",
  function(){

    card.style.transform =
      "translateY(-8px) scale(1.01)";

  });

  // Evento mouseout
  card.addEventListener("mouseout",
  function(){

    card.style.transform =
      "translateY(0) scale(1)";

  });

});


// Eventos do mouse — mousedown e mouseup

const botoes =
  document.querySelectorAll("button");

botoes.forEach(botao => {

  // Evento mousedown
  botao.addEventListener("mousedown",
  function(){

    botao.style.transform = "scale(0.96)";

  });

  // Evento mouseup
  botao.addEventListener("mouseup",
  function(){

    botao.style.transform = "scale(1)";

  });

});


// Eventos de foco — focus e blur


const nome =
  document.getElementById("nome");

const quantidade =
  document.getElementById("quantidade");


// Evento focus — campo nome
nome.addEventListener("focus",
function(){

  nome.classList.add("focusInput");

});

// Evento blur — campo nome
nome.addEventListener("blur",
function(){

  nome.classList.remove("focusInput");

});

// Evento focus — campo quantidade
quantidade.addEventListener("focus",
function(){

  quantidade.classList.add("focusInput");

});

// Evento blur — campo quantidade
quantidade.addEventListener("blur",
function(){

  quantidade.classList.remove("focusInput");

});


// addEventListener() — Finalizar compra
// Evento click + Manipulação HTML


const finalizar =
  document.getElementById("finalizar");

const mensagem =
  document.getElementById("mensagem");

finalizar.addEventListener("click",
function(){

  if(nome.value === "" ||
     quantidade.value === ""){

    // Manipulação HTML — exibe mensagem de erro
    mensagem.style.color = "#f87171";
    mensagem.innerHTML =
      "⚠ Preencha todos os campos.";

  } else {

    // Manipulação HTML — exibe mensagem de sucesso
    mensagem.style.color = "";
    mensagem.innerHTML =
      `✔ Compra realizada para ${nome.value}! Bom espetáculo.`;

    // Limpa campos após compra
    setTimeout(() => {
      nome.value = "";
      quantidade.value = "";
      mensagem.innerHTML = "";
      modalCompra.classList.remove("active");
    }, 2500);

  }

});