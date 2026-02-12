import { addProduct, getProducts } from '../../data/products.js'
import { AdminProductCard } from '../admin-product-card/element.js'

const templatePromise = fetch(new URL('./template.html', import.meta.url)).then(r => r.text())
const stylePromise = fetch(new URL('./style.css', import.meta.url)).then(r => r.text())

export class AdminProductsView extends HTMLElement {
    constructor() {
        super()
    }

    async connectedCallback() {
        this.innerHTML = await templatePromise
        const style = document.createElement('style')

        style.textContent = await stylePromise

        this.appendChild(style)

        this.render()

        /** @type HTMLDialogElement */
        const addDialog = this.querySelector('#add-dialog')

        const addBtn = this.querySelector('#add')
        addBtn.addEventListener('click', () => {
            addDialog.showModal()
        })

        addDialog.addEventListener('submit', e => {
            const form = (/** @type HTMLFormElement */ (e.target))

            /** @type HTMLInputElement[] */
            const [
                nameInput,
                priceInput,
                imgSrcInput,
            ] = [
                    form.querySelector('#name'),
                    form.querySelector('#price'),
                    form.querySelector('#img')
                ]

            const name = nameInput.value
            const price = Number(priceInput.value)
            const imgSrc = imgSrcInput.value

            addProduct({
                name,
                price,
                imgSrc
            })

            this.render()
        })
    }

    render() {
        const products = getProducts()

        const container = this.querySelector('.container')

        container.innerHTML = ''
        products.forEach(p => {
            const card = new AdminProductCard(p.id)

            container.appendChild(card)
        })
    }
}

customElements.define('admin-products-view', AdminProductsView)
