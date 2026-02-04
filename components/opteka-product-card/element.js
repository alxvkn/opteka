// @ts-ignore
import sheet from './style.css' with { type: 'css' }

const templatePromise = fetch(new URL('./template.html', import.meta.url)).then(r => r.text())

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

    async connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' })

        shadow.innerHTML = render(await templatePromise, this.dataset)

        shadow.adoptedStyleSheets = [sheet]
    }
}

customElements.define('opteka-product-card', OptekaProductCard)
