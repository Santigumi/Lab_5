import Products from "../components/Product/Product";
import { Actions, Appstate, Productsaction, GetProductsaction } from "../types/products";
import { appState } from "./store";

export const reducer = (currentAction: Actions, currentState: Appstate): Appstate => {
    const {action, payload} = currentAction;
    switch (action) {
        case Productsaction.GET:
            return {
            ...currentState,
            Products: payload,
            }
                        
            break;
            case Productsaction.ADD:
            return {
             ...currentState,
             ShoppingItems: currentState.ShoppingItems.concat(payload),
            }  
            break
            break 
        default:
            return currentState;
            break;
    }
}

