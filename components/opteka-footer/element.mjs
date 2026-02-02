// @ts-check
// @ts-ignore
import sheet from './style.css' with { type: 'css' }

export class OptekaFooter extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' })
        shadow.innerHTML = `
<footer>
    2026, Все права защищены &copy;
</footer>
        `
        shadow.adoptedStyleSheets = [sheet]
    }
}

customElements.define('opteka-footer', OptekaFooter)
