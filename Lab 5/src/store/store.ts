import { Appstate } from "../types/products";
import { reducer } from "./reducers";

export let appState: Appstate = {
    Products: [],
    ShoppingItems: []
}

let observers: any = [];

export const dispatch =(action: any) =>{
    const clone = JSON.parse(JSON.stringify(appState));
    appState = reducer(action,clone);
    observers.forEach((o: any) => o.render());
}

export const addObserver = (ref: any) => {
    observers = [...observers, ref];
}
