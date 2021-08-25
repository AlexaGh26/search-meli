import Axios from 'axios';

const MELI_API = 'https://api.mercadolibre.com/sites/MLA/search?q=';

const productService = {
    getBySearch: (search) => Axios.get(`${MELI_API}${search}`),
}

export default productService;