import styles from "./products.css"
import { loadCss } from "../../utils/styles";
import { addObserver, appState, dispatch } from "../../store/store";
import { Addfavorites } from "../../store/actions";


export enum AttributeProduct {
    'image' = 'image',
    'title' = 'Title',
    'description' = 'description',
    'category' = 'category',
    'price' = 'price',
    'ratingcount' = 'ratingcount',
    'ratingrate' = 'ratingrate'
 }

 class Products extends HTMLElement {

    image?: string;
    Title?: string;
    description?: string;
    category?: string;
    price?: number;
    ratingcount?: number;
    ratingrate?: number;

    constructor(){
    super()
    this.attachShadow({mode: 'open'})
    addObserver(this)
    }

    static get observedAttributes(){
    const attrs: Record<AttributeProduct, null> = {
    image: null,
    Title: null,
    description: null,
    category: null,
    price: null,
    ratingcount: null,
    ratingrate: null
    }
    return Object.keys(attrs)
    }

    attributeChangedCallback(propName: AttributeProduct, oldValue: string, newValue: string){
    switch (propName) {
        case AttributeProduct.price:
            this.price = newValue ? Number (newValue): undefined;
            break;
        case AttributeProduct.ratingcount:
            this.ratingcount = newValue ? Number (newValue): undefined;
            break;
        case AttributeProduct.ratingrate:
            this.ratingrate = newValue ? Number (newValue): undefined;
            break;
        default:
            this[propName] = newValue
            break;
    }
    }

    connectedCallback(){
    this.render()
    const button = this.shadowRoot?.querySelector('button')
    button?.addEventListener('click', (event) =>{
    event.stopPropagation();
    dispatch(Addfavorites([{image: this.image, title: this.title, price: this.price}]))
    console.log(appState.ShoppingItems)
    localStorage.setItem('Shoppingitems', JSON.stringify(appState.ShoppingItems))
    })
    }

    render(){
    if(this.shadowRoot){
    this.shadowRoot.innerHTML = `
    <div class="top">
    <img class="image" src="${this.image}" alt="Imagen de un producto">
    </div>
    
    <h2>${this.title}</h2>
    <p class="Description">Description: ${this.description}</p>
    <div class="center">
    <p>Rating: rate: ${this.ratingcount} count: ${this.ratingrate}</p>
    <p>Category: ${this.category}</p>
    </div>

    <div class ="bottom">
    <h3>Price: ${this.price}</h3>
    <button type="submit">Add Shopping cart</button>
    </div>
    `
    const cssProducts = this.ownerDocument.createElement("style");
    cssProducts.innerHTML = styles;
    this.shadowRoot?.appendChild(cssProducts);
    }
    }
 }
 export default Products
 customElements.define('my-products', Products)