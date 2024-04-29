import { appState } from "../store/store";
export interface Products {
    image: string;
    title: string;
    description: string;
    category: string;
    price: number;
    rating: {
    rate: number,
    count: number
    }
}

export interface ShoppingItems {
    image: string;
    title: string;
    price: number;
}

async function getProducts (){
    try {
        const getData = await fetch('https://fakestoreapi.com/products').then((res) => res.json());
        return getData; 
    } catch (error) {
        console.log(error);
    }
}

export default getProducts