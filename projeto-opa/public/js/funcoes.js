function adicionar(novoItem) {
  console.log('Item novoItem:', { novoItem });
  const carrinho = localStorage.getItem('carrinho')
    ? JSON.parse(localStorage.getItem('carrinho'))
    : [];

  console.log('O carrinho:', { novoItem, carrinho });

  if (carrinho.find((p) => p?.id == novoItem.id)) {
    console.log('achou...', novoItem.quantidade);
    novoItem.quantidade += carrinho.find(
      (p) => p?.id === novoItem.id
    ).quantidade;
  }
  const copia = [novoItem, ...carrinho.filter((p) => p?.id !== novoItem.id)];

  localStorage.setItem('carrinho', JSON.stringify(copia));
}

function remover(itemCarrinho) {
  console.log("passei aqui ",{itemCarrinho})
  //Montar o carrinho a partir do cookie ou do localStorage
  const carrinho = localStorage.getItem('carrinho')
    ? JSON.parse(localStorage.getItem('carrinho'))
    : [];

  // Alterar a quantidade
  const produtoNoCarrinho = carrinho.find((p) => p.id === itemCarrinho.id);
  console.log("produtos no carrinho ",{carrinho})
  if (produtoNoCarrinho) {
    //Alterar a quantidade
    console.log("passei aqui 1")
    produtoNoCarrinho.quantidade = produtoNoCarrinho.quantidade -1;
    //const copia =  {...produtoNoCarrinho}
  }
  //Remover o produto do array carrinho
  const copiaCarrinho = carrinho.filter((produto) => produto.quantidade >= 1);

  //Atualizar o cookie ou do localStorage com o novo carrinho
  localStorage.setItem('carrinho', JSON.stringify(copiaCarrinho));

  exibirCarrinho();
}

function exibirCarrinho() {
  const carrinhoTela = document.getElementById('carrinho');

  const carrinho = localStorage.getItem('carrinho')
    ? JSON.parse(localStorage.getItem('carrinho'))
    : [];

  //Apagar o carrinho carrinhoTela
  carrinhoTela.innerHTML = '';
  carrinho.map((produto) => {
    carrinhoTela.innerHTML += `  
    <div class="product-offer-container">
    <div>
        <img class="product-offer-image" src="${produto.foto}" alt="">
    </div>
    <div class="product-offer-details">
        <h3>
           ${produto.nome}
        </h3>
        <h3>
        ${produto.quantidade}
      
        </h3>
        <h3>
        ${produto.valor}
     </h3>
    </div>
    <div class="product-offer-button">
        <button
            onclick="remover({id:'${produto.id}', quantidade:1, nome:'${produto.nome}', valor:'${produto.valor}', foto:'/img/burguer04.jpg'})">Remover</button>
    </div>
</div> `;
  });

  if (!carrinho.length) {
    carrinhoTela.innerHTML += `  
    <h3 style='text-align: center;'>
        <i> Carrinho vazio </i> - <a href='/'>voltar para promoções </a>
    </h3>`;
  }
}
