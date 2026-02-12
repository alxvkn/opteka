import { deleteProduct, getProductById } from "../../data/products.js"
import formatPrice from "../../util/formatPrice.js"

// @ts-ignore
import sheet from './style.css' with { type: 'css' }

const templatePromise = fetch(new URL('./template.html', import.meta.url)).then(r => r.text())

export class AdminProductCard extends HTMLElement {
    /**
     * @param {number} [id]
     */
    constructor(id) {
        super()
        this.productId = id
    }

    productId

    /**
     * @type {Element}
     */
    deleteLink

    async connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' })

        shadow.adoptedStyleSheets = [sheet]

        shadow.innerHTML = await templatePromise

        this.deleteLink = this.shadowRoot.querySelector('a#delete')

        this.deleteLink.addEventListener('click', e => {
            e.preventDefault()
            deleteProduct(this.productId)
            this.remove()
        })

        this.render()
    }

    render() {
        const shadow = this.shadowRoot

        const product = getProductById(Number(this.productId))

        /** @type HTMLImageElement */
        const img = shadow.querySelector('div img')
        img.src = product.imgSrc

        const name = shadow.getElementById('name')
        name.innerText = product.name

        const price = shadow.getElementById('price')
        price.innerText = formatPrice(product.price)
    }
}

customElements.define('admin-product-card', AdminProductCard)
