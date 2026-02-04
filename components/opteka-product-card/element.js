import { addFavorite, getFavorites, removeFavorite } from "../../data/favorites.js"

// @ts-ignore
import sheet from './style.css' with { type: 'css' }

const templatePromise = fetch(new URL('./template.html', import.meta.url)).then(r => r.text())
const REMOVE_FAVORITE_TEXT = 'Удалить из избранного.'
const ADD_FAVORITE_TEXT = 'Добавить в избранное.'

/**
 * @param {string} template
 * @param {DOMStringMap} data
 */
function render(template, data) {
    return template.replace(/\{\{(\w+)\}\}/g, (_, key) => data[key] ?? `{{${key}}}`)
}

export class OptekaProductCard extends HTMLElement {
    constructor() {
        super()
    }

    get isFavorite() {
        return getFavorites().includes(Number(this.dataset.id))
    }

    /**
     * @type {HTMLAnchorElement}
     */
    favoriteLink

    static observedAttributes = ['data-favorite-text']

    /**
     * @param {string} name
     * @param {string} _
     * @param {string} newValue
     */
    async attributeChangedCallback(name, _, newValue) {
        if (!this.shadowRoot) return null

        if (name == 'data-favorite-text') {
            this.favoriteLink.innerText = newValue
        }
    }

    async connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' })

        this.shadowRoot.innerHTML = render(await templatePromise, this.dataset)

        this.favoriteLink = this.shadowRoot.querySelector('a#favorite')

        if (this.isFavorite) {
            this.dataset.favoriteText = REMOVE_FAVORITE_TEXT
        } else {
            this.dataset.favoriteText = ADD_FAVORITE_TEXT
        }

        this.favoriteLink.addEventListener('click', e => {
            e.preventDefault()
            if (this.isFavorite) {
                removeFavorite(Number(this.dataset.id))
                this.dataset.favoriteText = ADD_FAVORITE_TEXT
            } else {
                addFavorite(Number(this.dataset.id))
                this.dataset.favoriteText = REMOVE_FAVORITE_TEXT
            }
            console.log(getFavorites())
        })

        shadow.adoptedStyleSheets = [sheet]
    }
}

customElements.define('opteka-product-card', OptekaProductCard)
