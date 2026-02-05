import { OptekaCartItem } from "./components/opteka-cart-item/element.js"
import { getCart } from "./data/cart.js"
import { getProducts } from "./data/products.js"
import formatPrice from "./util/formatPrice.js"

const products = getProducts()
const itemsContainer = document.querySelector('.items-container')
/** @type HTMLDivElement */
const totalDiv = document.querySelector('.total')

const updateTotal = () => {
    const products = getProducts()

    const total = formatPrice(getCart().map(cr => cr.quantity * products.find(p => p.id == cr.productId).price).reduce((acc, n) => { return acc + n }, 0))

    totalDiv.innerText = 'Общая сумма: ' + total
}

updateTotal()

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

itemsContainer.addEventListener('cartChange', updateTotal)
