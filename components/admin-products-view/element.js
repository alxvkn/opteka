// @ts-ignore
import sheet from './style.css' with { type: 'css' }

import { getProducts } from '../../data/products.js'
import { AdminProductCard } from '../admin-product-card/element.js'

const templatePromise = fetch(new URL('./template.html', import.meta.url)).then(r => r.text())

export class AdminProductsView extends HTMLElement {
    constructor() {
        super()
    }

    async connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' })

        shadow.innerHTML = await templatePromise

        shadow.adoptedStyleSheets = [sheet]

        this.render()
    }

    render() {
        const products = getProducts()

        const container = this.shadowRoot.querySelector('.container')

        products.forEach(p => {
            const card = new AdminProductCard(p.id)

            container.appendChild(card)
        })
    }
}

customElements.define('admin-products-view', AdminProductsView)
