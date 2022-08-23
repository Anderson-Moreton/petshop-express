const cartController = {
  carrinho: (req, res) => {
    res.render('cart', { session: req.session });
  },
  comprar: (req, res) => {
    if (req.session.loggedUser == true) {
      userEmail = req.session.email;
      orderTotal = carrinho.reduce((a, b) => Number(a.valor) + Number(b.valor));
      carrinho = req.body.carrinho;

      // ADD THESES DATA TO THE DATABASE

      res.send({ ...userEmail })
    } else {
      res.send({
        result: "bad",
      })
    }
  }
}

module.exports = cartController;