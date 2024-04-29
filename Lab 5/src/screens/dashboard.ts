import Products, { AttributeProduct } from "../components/Product/Product"
import { addObserver, appState, dispatch } from "../store/store"
import styles from "./dashboard.css"
import { getProductsData } from "../store/actions"
import ShoppingItems, {AttributeItem} from "../components/ShoppingCartItem/ShoppingCartItems"


class Dashboard extends HTMLElement{
    constructor(){
    super()
    this.attachShadow({mode: 'open'})
    addObserver(this)
    }

    async connectedCallback(){
    const action = await getProductsData()
    dispatch(action)
    const storedDataString = localStorage.getItem('Appstate');
    const Storage = JSON.stringify(appState)
    localStorage.setItem('Appstate', Storage)
    }

    render(){
    if (this.shadowRoot) {
    this.shadowRoot.innerHTML = ``  
    }
    const local_storage: any = window.localStorage
    const localData = JSON.parse(local_storage.getItem('Appstate'))

    localData.Products.forEach((product: any)=>{
    const cart = document.createElement('my-products') as Products;
    cart.setAttribute(AttributeProduct.image, product.image)
    cart.setAttribute(AttributeProduct.title, product.title)
    cart.setAttribute(AttributeProduct.description, product.description)
    cart.setAttribute(AttributeProduct.category, product.category)
    cart.setAttribute(AttributeProduct.price, JSON.stringify(product.price))
    cart.setAttribute(AttributeProduct.ratingcount, JSON.stringify(product.rating.rate))
    cart.setAttribute(AttributeProduct.ratingrate, JSON.stringify(product.rating.count))
    this.shadowRoot?.appendChild(cart)
    })
    appState.ShoppingItems.forEach((product: any) => {
        const item = document.createElement('my-shoppingitems') as ShoppingItems;
        item.setAttribute(AttributeItem.image, product.image);
        item.setAttribute(AttributeItem.title, product.title);
        item.setAttribute(AttributeItem.price, JSON.stringify(product.price));
        this.shadowRoot?.appendChild(item);
    });


    const cssDasboard = this.ownerDocument.createElement("style");
    cssDasboard.innerHTML = styles;
    this.shadowRoot?.appendChild(cssDasboard);
    }
}
customElements.define('app-dashboard', Dashboard);
export default Dashboard