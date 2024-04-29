import getProducts from "../services/data";
import { GetProductsaction, Productsaction, GetShoppingitems} from "../types/products";

export const getProductsData = async(): Promise<GetProductsaction> => {
    const data = await getProducts();    
    return {
        action: Productsaction.GET,
        payload: data,
    }
}

export const Addfavorites = (array:any[]) => {
  return {
  action: Productsaction.ADD,
  payload: array,
  }
}


