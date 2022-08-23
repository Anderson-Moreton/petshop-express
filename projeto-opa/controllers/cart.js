const cartController = {
    carrinho: (req, res) => {
        const carrinho = [
            {
                id: 44,
                nome: 'X-tudo',
                valor: 16.99,
                foto: '/img/burguer01.jpg'
              },
              {
                id: 12,
                nome: 'x-especial',
                valor: 20,
                foto: '/img/burguer02.jpg'
              },
              {
                id: 17,
                nome: 'x-gulosso',
                valor: 235.99,
                foto: '/img/burguer03.jpg'
              },
              {
                  id: 13,
                  nome: 'x-max',
                  valor: 235.99,
                  foto: '/img/burguer04.jpg'
                },
         ];
        
        res.render('cart',{carrinho});
    }
}

module.exports = cartController;