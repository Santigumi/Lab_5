import { Products } from "../services/data"
import { ShoppingItems } from "../services/data"

export type observer = ({render: () => void } & HTMLElement)

export type Appstate = {
    Products: Products[]
    ShoppingItems: ShoppingItems[]
}

export enum Productsaction {
    'GET' = 'GET',
    'ADD' = 'ADD'

}

export interface GetProductsaction {
    action: Productsaction.GET,
    payload: Products[],
}

export interface GetShoppingitems {
    action: Productsaction.ADD,
    payload: ShoppingItems[],
}


export type Actions = GetProductsaction | GetShoppingitems
