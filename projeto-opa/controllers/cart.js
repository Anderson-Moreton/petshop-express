const cartController = {
  carrinho: (req, res) => {
    res.render('cart', { session: req.session });
  },
  comprar: (req, res) => {
    if (req.body.loggedUser == true) {
      const carrinho = req.body.carrinho;
      const totalCompra = carrinho.reduce((a, b) => a.valor + b.valor);
      const userEmail = req.session.email;

      // TABELA DE ORDENS DE COMPRA
      // INSERIR ESSA COMPRA COM O TOTAL, EMAIL E HORÁRIO --> ID DA COMPRA

      // TABELA DE ITENS DA COMPRA
      // PARA CADA ITEM DO CARRINHO, INSERIR NO BANCO DE DADOS, O ID DA COMPRA, O ID DO PRODUTO E A QUANTIDADE

      // RETORNAR NA REQUISIÇÃO O ID E O VALOR DA COMPRA
      res.send(JSON.stringify(totalCompra));
    } else {
      res.send("User not logged");
    }

    //   // ADD THESES DATA TO THE DATABASE

    //   res.send({ ...userEmail })
    // } else {
    //   res.send({
    //     result: "bad",
    //   })
    // }
  }
}

module.exports = cartController;