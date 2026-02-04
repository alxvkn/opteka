const KEY = 'favorites'

/**
    * @returns {number[]}
    */
export function getFavorites() {
    return JSON.parse(localStorage.getItem(KEY)) ?? []
}

/**
 * @param {number} id
 */
export function addFavorite(id) {
    localStorage.setItem(KEY, JSON.stringify(getFavorites().concat(id)))
}

/**
 * @param {number} id
 */
export function removeFavorite(id) {
    localStorage.setItem(KEY, JSON.stringify(getFavorites().filter(f => f !== id)))
}
