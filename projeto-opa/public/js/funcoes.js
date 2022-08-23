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
  //Montar o carrinho a partir do cookie ou do localStorage
  const carrinho = localStorage.getItem('carrinho')
    ? JSON.parse(localStorage.getItem('carrinho'))
    : [];

  // Alterar a quantidade
  const produtoNoCarrinho = carrinho.find((p) => p.id === itemCarrinho.id);
  if (produtoNoCarrinho) {
    //Alterar a quantidade
    produtoNoCarrinho.quantidade = produtoNoCarrinho.quantidade - 1;
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
                                <div class='produto'>
                                `;
    carrinhoTela.innerHTML += `  
                                  <p>
                                      <img src='${produto.foto}' width='50px' />
                                </p>`;
    carrinhoTela.innerHTML += `  
                                  <p>
                                      Nome: ${produto.nome}
                                  </p>`;
    carrinhoTela.innerHTML += `  
                                  <p>
                                      Valor: R$ ${produto.valor}
                                  </p>`;
    carrinhoTela.innerHTML += `  
                                  <p>
                                      Quantidade: ${produto.quantidade}
                                  </p>`;
    carrinhoTela.innerHTML += `  
                                  <p>
                                      Subtotal: R$ ${
                                        produto.quantidade * produto.valor
                                      }
                                  </p>`;
    carrinhoTela.innerHTML += `  
                                  <p>
                                      <button onClick="remover({id:${produto.id}, nome:'${produto.nome}'})">Remover </button>
                                  </p>`;

    carrinhoTela.innerHTML += `</div>`;
  });

  if (!carrinho.length) {
    carrinhoTela.innerHTML += `  
    <h3 style='text-align: center;'>
        <i> Carrinho vazio </i> - <a href='/'>voltar para promoções </a>
    </h3>`;
  }
}
