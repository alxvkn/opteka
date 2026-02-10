import { AdminProductsView } from './components/admin-products-view/element.js'
import { AdminStatsView } from './components/admin-stats-view/element.js'

const urlParams = new URLSearchParams(window.location.search)

let view = urlParams.get('view')

const viewElement = document.getElementById('view')

view = view ?? 'stats'

switch (view) {
    case 'stats':
        viewElement.innerHTML = ''
        viewElement.appendChild(new AdminStatsView())
        break
    case 'products':
        viewElement.innerHTML = ''
        viewElement.appendChild(new AdminProductsView())
        break
    case 'orders':
        viewElement.innerHTML = ''
        viewElement.appendChild(new AdminOrdersView())
        break
}
