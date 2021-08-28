import Axios from 'axios';


const productService = {
    getBySearch: (search) => Axios.get(`http://localhost:3001/${search}`),
}

export default productService;