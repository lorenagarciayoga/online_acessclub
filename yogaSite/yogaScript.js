// selecione o botão de compra
const botaoCompra = document.querySelector('.botao_compra');

// selecione o link externo
const linkExterno = 'https://pay.hotmart.com/K81869953M?off=qsogbc9x&checkoutMode=10';

// adicione um evento de carga à página
window.addEventListener('load', () => {
  // pré-carregue o link externo
  const linkPreCarregado = document.createElement('link');
  linkPreCarregado.rel = 'prefetch';
  linkPreCarregado.href = linkExterno;
  document.head.appendChild(linkPreCarregado);
});

// adicione um evento de clique ao botão de compra
botaoCompra.addEventListener('click', () => {
  // abra o link externo após o clique do usuário
  window.open(linkExterno);
});
