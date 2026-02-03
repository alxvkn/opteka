// @ts-ignore
import sheet from './style.css' with { type: 'css' }

export class OptekaProductCard extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' })
        shadow.innerHTML = `
<div class="product-card">
    <img src="${this.dataset.imgSrc}" alt="Фото продукта">
    <div>
        <div id="name">
            ${this.dataset.name}
        </div>
        <div id="price">
            ${this.dataset.price}
        </div>
        <div id="buttons-container">
            <a id="buy" href="#">
                Купить.
            </a>
            <a id="favorite" href="#">
                Добавить в избранное.
            </a>
        </div>
    </div>
</div>
        `

        shadow.adoptedStyleSheets = [sheet]
    }
}

customElements.define('opteka-product-card', OptekaProductCard)
