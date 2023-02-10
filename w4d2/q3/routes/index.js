const products = require('../models/inventory');
const Product = require('../models/product');
const session = require('express-session');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(session({secret: 'my secret', resave: false}));

router.get('/',(req,res)=>{
    let cartNum = 0;
    let sum = 0;
    if(req.session.cart){
        cartNum = req.session.cart.lenght;
        sum = req.session.cart.map(x=>parseInt(x.price)).reduce((x,y)=>x+y, 0);
    }
    res.render('index', {
        products: products,
        cartNum: cartNum,
        sum: sum
    });
});

router.get('/p',(req,res)=>{
    let pnumber = parseInt(req.query.pnumber);
    let product = products[pnumber];
    let cartNum = 0;
    if(req.session.cart){
        cartNum = req.session.cart.lenght;
    }
    res.render('product',{
        product: product,
        cartNum: cartNum
    })
});

router.post('/add',(req,res)=>{
    let index = parseInt(req.body.i);
    let product = products[index];;
    if(!req.session.cart){
        req.session.cart = [];
    }
    req.session.cart.push(product);
    res.redirect('/');

});

router.get('/cart',(req,res)=>{
    let cartNum = 0;
    if(req.session.cart){
        cartNum = req.session.cart.lenght;
    }
    res.render('cart',{
        cart:  req.session.cart,
        cartNum: cartNum
    })
})

router.get('/contact',(req,res)=>{
    let cartNum1 = 0;
    if(req.session.cart){
        cartNum1 = req.session.cart.lenght;
    }
    res.render('contacts',{
        cart: req.session.cart,
        cartNum1: cartNum1
    })
})

module.exports = router;