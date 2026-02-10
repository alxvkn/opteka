// @ts-ignore
import sheet from './style.css' with { type: 'css' }

import { getOrders } from '../../data/orders.js'
import { getProducts } from '../../data/products.js'

const templatePromise = fetch(new URL('./template.html', import.meta.url)).then(r => r.text())

export class AdminStatsView extends HTMLElement {
    constructor() {
        super()
    }

    async connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' })

        shadow.innerHTML = await templatePromise

        shadow.adoptedStyleSheets = [sheet]

        shadow.querySelector('#products-count').innerText = getProducts().length

        shadow.querySelector('#orders-count').innerText = getOrders().length
    }
}

customElements.define('admin-stats-view', AdminStatsView)
