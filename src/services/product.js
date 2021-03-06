import Axios from 'axios';

const API = 'http://localhost:3001';

//Función que llama a la API del backend para traer la lista de resultados de la busqueda
const productService = {
    getBySearch: (search) => Axios.get(`${API}/api/items?q=${search}`),

    getDetailsProduct: (idProduct) => Axios.get(`${API}/api/items/${idProduct}`)
}

export default productService;