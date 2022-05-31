const cardapioController ={
    cardapio: (req, res) => {
        const context = {}
        res.render('cardapio', context);
    },
    cardapioBurguer:(req,res)=>{
        const context = {}
        res.render('burguer',context)
    },
    cardapioDog:(req,res)=>{
        const context = {}
        res.render('dog',context)
    },
    cardapioPorcoes:(req,res)=>{
        const context = {}
        res.render('porcoes',context)
    },
    cardapioBebidas:(req,res)=>{
        const context = {}
        res.render('bebidas',context)
    }
}

module.exports = cardapioController;