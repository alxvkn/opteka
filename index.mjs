import { OptekaProductCard } from "./components/opteka-product-card/element.mjs"

const products = [
    {
        name: 'Средство для промывания и орошения полости носа для детей и взрослых Морская вода спрей Vitateka/Витатека 50мл',
        price: '376 руб.',
        imgSrc: 'assets/product_image.jpg',
    },
]

const productsContainer = document.querySelector('.products-container')

products.forEach(product => {
    const card = new OptekaProductCard()

    Object.keys(product).forEach(key => {
        card.dataset[key] = product[key]
    })

    productsContainer.appendChild(card)
})
