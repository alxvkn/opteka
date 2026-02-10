const KEY = 'products'

/**
    * @typedef Product
    * @property id {number}
    * @property name {string}
    * @property price {number}
    * @property imgSrc {string}
*/

/** @type Product[] */
const products = [
    {
        id: 0,
        name: 'Витамин C',
        price: 256,
        imgSrc: 'assets/product_image.jpg',
    },
    {
        id: 1,
        name: 'Пластырь',
        price: 30,
        imgSrc: 'assets/product_image.jpg',
    },
    {
        id: 2,
        name: 'Витамин B3',
        price: 45,
        imgSrc: 'assets/product_image.jpg',
    },
    {
        id: 3,
        name: 'Средство для промывания и орошения полости носа для детей и взрослых Морская вода спрей Vitateka/Витатека 50мл',
        price: 376,
        imgSrc: 'assets/product_image.jpg',
    },
]
/**
    * @returns {Product[]}
    */
export function getProducts() {
    return products
}

/**
    * @returns {Product}
    * @param {number} id
    */
export function getProductById(id) {
    return products.find(p => p.id === id)
}

/**
 * @param {number} id
 */
export function deleteProduct(id) {
    products.filter(p => p.id !== id)
}

/**
 * @param {Product} product
 */
export function addProduct(product) {

}
