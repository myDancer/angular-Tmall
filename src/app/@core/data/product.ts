export interface Product {
  id: string;
  name: string;
  productImg: string;
  price: number;
  describe: string;
  publisherId: string;
}

export interface User {
  id: string;
  name: string;
  picture: string;
}

export interface Goods {
  user: User;
  product: Product;
}

export abstract class productDetail {
  abstract getProductDetail(id: string): Product;
}
