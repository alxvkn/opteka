const KEY = 'products'

/**
    * @typedef Product
    * @property id {number}
    * @property name {string}
    * @property price {number}
    * @property imgSrc {string}
*/

const validateProduct = obj =>
    typeof obj === 'object' &&
        typeof obj.id === 'number' &&
        typeof obj.name === 'string' &&
        typeof obj.price === 'number' &&
        typeof obj.imgSrc === 'string'

/** @type Product[] */
const initialProducts = [
    {
        id: 0,
        name: 'Витамин C',
        price: 256,
        imgSrc: 'assets/vitamin_c.jpg',
    },
    {
        id: 1,
        name: 'Средство для промывания и орошения полости носа для детей и взрослых Морская вода спрей Vitateka/Витатека 50мл',
        price: 376,
        imgSrc: 'assets/product_image.jpg',
    },
]

/**
    * @returns {Product[]}
    */
export function getProducts() {
    /** @type Product[] */
    let products

    try {
        products = JSON.parse(localStorage.getItem(KEY))
    } catch (err) {
        console.warn(err, 'while retrieveing products from localStorage. returning an empty array')
    }

    if (!products) {
        localStorage.setItem(KEY, JSON.stringify(initialProducts))
        return initialProducts
    }

    return products.filter(validateProduct)
}

/**
    * @returns {Product}
    * @param {number} id
    */
export function getProductById(id) {
    return getProducts().find(p => p.id === id)
}

/**
 * @param {number} id
 */
export function deleteProduct(id) {
    const products = getProducts().filter(p => p.id !== id)
    localStorage.setItem(KEY, JSON.stringify(products))
}

/**
 * @param {object} product
 * @param {number} product.price
 * @param {string} product.name
 * @param {string} product.imgSrc
 */
export function addProduct(product) {
    let _product = {
        ...product,
        id: Date.now()
    }

    const products = getProducts()

    products.push(_product)

    localStorage.setItem(KEY, JSON.stringify(products))

    return _product
}
