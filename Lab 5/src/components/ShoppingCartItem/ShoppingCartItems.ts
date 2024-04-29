import styles from "./Shopping.css"

export enum AttributeItem {
    'image' = 'image',
    'title' = 'Title',
    'price' = 'price',
 }

 class ShoppingItems extends HTMLElement {
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
    }

    static get observedAttributes(){
    const attrs: Record<AttributeItem, null> = {
    image: null,
    Title: null,
    price: null
    }
    return Object.keys(attrs)
    }

    attributeChangedCallback(propName: AttributeItem, oldValue: string, newValue: string){
    switch (propName) {
        case AttributeItem.price:
            this.price = newValue ? Number (newValue): undefined;
            break;
        default:
            this[propName] = newValue
            break;
    }
    }

    connectedCallback(){
    this.render()
    }

    render(){
    if(this.shadowRoot){
    this.shadowRoot.innerHTML = `
    <div class="top">
    <h1>Your Shopping car</h1>
    <img class="image" src="${this.image}" alt="Imagen de un producto">
    </div>
    <h2>${this.title}</h2>
    <h3>Price: ${this.price}</h3>
    `
    const cssShopping = this.ownerDocument.createElement("style");
    cssShopping.innerHTML = styles;
    this.shadowRoot?.appendChild(cssShopping);
    }
    }
 }
 export default ShoppingItems
 customElements.define('my-shoppingitems', ShoppingItems)