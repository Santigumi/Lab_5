import './screens/dashboard';
import styles from './index.css'
import ShoppingItems, {AttributeItem} from './components/ShoppingCartItem/ShoppingCartItems';
import { appState } from './store/store';
class Appcontainer extends HTMLElement{
    constructor(){
    super()
    this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
    this.render();
    }

    render(){
        if(this.shadowRoot){
        const title = this.ownerDocument.createElement('h1')
        title.innerText = "Store"
        this.shadowRoot.appendChild(title)
        title.style.margin = "5px"
        title.style.fontFamily = "Helvetica"

        const dashboard = this.ownerDocument.createElement('app-dashboard');
        this.shadowRoot.appendChild(dashboard)

        const cssProducts = this.ownerDocument.createElement("style");
        cssProducts.innerHTML = styles;
        this.shadowRoot?.appendChild(cssProducts);
    }
    }
}

customElements.define('app-container', Appcontainer)