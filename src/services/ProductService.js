import axios from 'axios';

class ProductService {

  async getProducts() {
    return axios.get('https://cherrybookstore-back-ul5xycu2sa-uc.a.run.app/Products')
        .then(response => {
          return response.data;
        })
  }
}

export default new ProductService();
