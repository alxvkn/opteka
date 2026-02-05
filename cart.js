import { OptekaCartItem } from "./components/opteka-cart-item/element.js"
import { getCart } from "./data/cart.js"
import { getProducts } from "./data/products.js"

const products = getProducts()
const itemsContainer = document.querySelector('.items-container')
const totalDiv = document.querySelector('.total')

const cart = getCart()

itemsContainer.innerHTML = ''

cart.forEach(cartItem => {
    const product = products.find(p => p.id === cartItem.productId)
    if (!product) return

    const item = new OptekaCartItem()
    Object.keys(product).forEach(key => {
        item.dataset[key] = product[key]
    })
    item.dataset.quantity = cartItem.quantity.toString()

    itemsContainer.appendChild(item)
})
