require('@babel/register')({
    presets: ['react']
})

const express = require('express');
const app = express();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const HomePage = require('../ui/pages/home/home');


const MELI_API = 'https://api.mercadolibre.com/sites/MLA/search?q=';

//app.get(`${MELI_API}${search}`, function (req, res) {
//   res.send(response);
//})

app.get('/home', function (req, res) {
    const homePage = ReactDOMServer.renderToString(
        React.createElement(HomePage)
    )
    res.send(homePage);
})

app.listen(3001, () => {
    console.log('Hola soy server');
});
