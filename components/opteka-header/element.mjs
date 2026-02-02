// @ts-ignore
import sheet from './style.css' with { type: 'css' }

export class OptekaHeader extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' })
        shadow.innerHTML = `
<header>
    <div class="logo">
        <div>Оптека</div>
    </div>
    <nav>
        <ul>
            <li><a href="/index.html">Каталог</a></li>
            <li><a href="/admin.html">Админ панель</a></li>
            <li><a href="/contacts.html">Контакты</a></li>
            <li><a href="/about.html">О нас</a></li>
        </ul>
    </nav>
    <div class="icon-buttons">
        <a href="/account.html">
            <div class="icon-account">
                <img src="/assets/account_circle.svg" alt="Аккаунт">
            </div>
        </a>
        <a href="/favorites.html">
            <div class="icon-favorites">
                <img src="/assets/bookmark.svg" alt="Избранное">
            </div>
        </a>
        <a href="/cart.html">
            <div class="icon-cart">
                <img src="/assets/shopping_cart.svg" alt="Корзина">
            </div>
        </a>
    </div>
</header>
        `

        shadow.adoptedStyleSheets = [sheet]
    }
}

customElements.define('opteka-header', OptekaHeader)
