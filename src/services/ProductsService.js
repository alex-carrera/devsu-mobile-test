import axios from 'axios'

class ProductsService {
    async getProductos() {
        const res = await axios.get(process.env.BASE_URL, { headers: authHeader() });
        return res.data;
    }

    async postProductos(data) {
        const res = await axios.post(process.env.BASE_URL, data, { headers: authHeader() });
        return res.data;
    }

    async putProductos(data) {
        const res = await axios.put(process.env.BASE_URL, data, { headers: authHeader() });
        return res.data;
    }

    async deleteProductos(id) {
        const res = await axios.put(process.env.BASE_URL + `?${id}` , data, { headers: authHeader() });
        return res.data;
    }

    async verificationProductos(id) {
        const res = await axios.put(process.env.BASE_URL + `/verification?${id}` , data, { headers: authHeader() });
        return res.data;
    }
}

export default new ProductsService();