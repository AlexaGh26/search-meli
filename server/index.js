const express = require("express");
const axios = require("axios");
const app = express();

const MELI_API = "https://api.mercadolibre.com/sites/MLA/search?q=";
const MELI_API_DETAILS = "https://api.mercadolibre.com/items/";
const MELI_API_DESCRIPTION = "https://api.mercadolibre.com/items/";
const MELI_API_SELLER =
    "https://api.mercadolibre.com/sites/MLA/search?seller_id=";
const MELI_API_CATEGORIES =
    "https://api.mercadolibre.com/sites/MLA/search?category=";

// Endpoint para consultar el resultado de la bsuqueda
app.get("/api/items", async (req, res) => {
    // object y array destructurings para armar el cuerpo del response para el resultado de la busqueda
    const { q } = req.query;
    console.log(q);
    const { data } = await axios.get(`${MELI_API}${q}`);
    const [firstResult] = data.results;
    const { data: categories } = await axios.get(
        `${MELI_API_CATEGORIES}${firstResult.category_id}`
    );
    const { filters } = categories;
    const categoriesList = filters[0].values[0].path_from_root.map(
        (item) => item.name
    );
    const results = data.results.map(
        ({ id, title, price, condition, shipping, thumbnail, address: { city_name } }) => ({
            id,
            title,
            price,
            picture: thumbnail,
            condition,
            free_shipping: shipping.free_shipping,
            city_name
        })
    );

    const response = {
        author: {
            name: "Alexandra",
            lastName: "Gomez",
        },
        categories: [...categoriesList],
        items: [...results]
    };
    res.send(response);
});

// Endpoint para consultar los detalles del producto enviando por parametros de la ruta
app.get("/api/items/:idProduct", async (req, res) => {

    const { idProduct } = req.params;
    try {
        // consulta del producto por id
        const { data } = await axios.get(`${MELI_API_DETAILS}${idProduct}`);
        // consulta de la desripción
        const { data: dataDescription } = await axios.get(
            `${MELI_API_DESCRIPTION}${idProduct}/description`
        );
        // Object destructuring para la creacion del cuerpo del response
        const { id, title, price, currency_id, pictures: { url: picture }, condition, sold_quantity,
            shipping: { free_methods: { free_shipping_flag } } } = data;

        const response = {
            author: {
                name: "Alexandra",
                lastName: "Gomez",
            },
            item: {
                id,
                title,
                price: {
                    currency: currency_id,
                    amount: price
                },
                picture,
                condition,
                free_shipping: free_shipping_flag,
                sold_quantity,
                dataDescription: dataDescription.plain_text
            },
        };

        res.send(response);
    } catch (error) {
        console.log(error);
    }
});

app.listen(3001, () => {
    console.log("server started: http://localhost:3001");
});
