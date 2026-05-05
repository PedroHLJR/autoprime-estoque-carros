// ================================
//   AutoPrime - script.js
//   Minha primeira vez usando JavaScript num projeto real!
//   Adicionei busca em tempo real e filtro por marca.
// ================================

// Aguarda o HTML carregar completamente antes de rodar o script
document.addEventListener("DOMContentLoaded", function () {

  // -------- Pegando os elementos do HTML --------
  // Aprendi que o getElementById busca um elemento pelo id
  var campoBusca    = document.getElementById("q");
  var contadorTexto = document.getElementById("contador");
  var botoesMarca   = document.querySelectorAll(".btn-marca");

  // Pego todos os cards de carro de uma vez usando querySelectorAll
  var todosOsCards  = document.querySelectorAll(".car-card");

  // Variável que guarda qual marca está selecionada no momento
  // "todas" significa que nenhum filtro está ativo
  var marcaSelecionada = "todas";


  // -------- Função principal de filtragem --------
  // Essa função roda toda vez que o usuário digita ou clica numa marca
  function filtrar() {

    // Pego o texto digitado, tiro espaços das pontas e deixo tudo minúsculo
    // Isso evita problemas como "toyota" vs "Toyota" vs "TOYOTA"
    var textoBusca = campoBusca.value.trim().toLowerCase();

    // Contador para saber quantos cards estão visíveis
    var visiveis = 0;

    // Percorro cada card com forEach — aprendi que é melhor que um for normal aqui
    todosOsCards.forEach(function (card) {

      // Pego o texto do título do carro dentro desse card
      var titulo = card.querySelector(".car-title").textContent.toLowerCase();

      // Pego a marca guardada no atributo data-marca do card
      var marcaDoCard = card.getAttribute("data-marca");

      // Verifico se o título contém o texto que o usuário digitou
      var passouBusca = titulo.includes(textoBusca);

      // Verifico se a marca bate com o filtro ativo
      // Se marcaSelecionada for "todas", qualquer marca passa
      var passouMarca = (marcaSelecionada === "todas") || (marcaDoCard === marcaSelecionada);

      // Se passou nas duas verificações, mostro o card
      // Caso contrário, escondo com display: none
      if (passouBusca && passouMarca) {
        card.style.display = "";   // mostra (volta ao padrão do CSS)
        visiveis++;                // conta mais um visível
      } else {
        card.style.display = "none"; // esconde
      }

    });

    // Atualizo o contador de carros visíveis no cabeçalho do estoque
    if (visiveis === 1) {
      contadorTexto.textContent = "Mostrando 1 carro disponível";
    } else if (visiveis === 0) {
      contadorTexto.textContent = "Nenhum carro encontrado";
    } else {
      contadorTexto.textContent = "Mostrando " + visiveis + " carros disponíveis";
    }

  }


  // -------- Evento de busca em tempo real --------
  // O evento "input" dispara toda vez que o usuário digita algo no campo
  // Diferente do "submit", ele não precisa pressionar Enter
  campoBusca.addEventListener("input", function () {
    filtrar();
  });

  // Impede o formulário de recarregar a página ao pressionar Enter
  campoBusca.closest("form").addEventListener("submit", function (evento) {
    evento.preventDefault();
    filtrar();
  });


  // -------- Evento de filtro por marca --------
  // Percorro cada botão de marca e adiciono um evento de clique
  botoesMarca.forEach(function (botao) {

    botao.addEventListener("click", function () {

      // Pego qual marca esse botão representa (guardei no data-marca)
      marcaSelecionada = botao.getAttribute("data-marca");

      // Removo a classe "ativo" de todos os botões
      botoesMarca.forEach(function (b) {
        b.classList.remove("ativo");
      });

      // Adiciono a classe "ativo" só no botão clicado
      // Isso muda a cor dele via CSS para mostrar que está selecionado
      botao.classList.add("ativo");

      // Chamo a função de filtro para atualizar os cards
      filtrar();

    });

  });

}); // fim do DOMContentLoaded
