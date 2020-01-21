import { writable, derived } from 'svelte/store'

//import localCart from '../localCart'

const cart = writable(getStorageCart())

console.log(`getStorageCart: ${getStorageCart().length}`)

export const cartTotal = derived(cart, $cart => {

    let total = $cart.reduce((acc, curr) => {
        return (acc += (curr.amount * curr.price))
    }, 0)
    return total.toFixed(2)
})

const remove = (id, items) => {
    return items.filter(item => item.id !== id)
}

const toggleAmount = (id, items, action) => {
    return items.map(item => {
        if (item.id === id) {
            return { ...item, amount: (action === 'inc') ? parseInt(item.amount + 1) : parseInt(item.amount - 1) }
        } else {
            return { ...item }
        }
    })
}

export const removeItem = id => {
    cart.update(storeValues => {
        return remove(id, storeValues)
    })
}

export const increaseAmount = (id) => {
    cart.update(storeValues => {
        return toggleAmount(id, storeValues, 'inc')
    })
}

export const decreaseAmount = (id, amount) => {

    cart.update(storeValues => {
        let cart
        if (amount === 1) {
            cart = remove(id, storeValues)
        } else {
            cart = toggleAmount(id, storeValues, 'dec')
        }
        return [...cart]
    })
}

export const addToCart = (product) => {

    cart.update(storeValues => {
        let item = storeValues.find(item => item.id === product.id)
        if (item) {
            return toggleAmount(item.id, storeValues, 'inc')
        } else {

            let newItem = {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                amount: 1
            }

            return [newItem, ...storeValues]
        }
    })
}

function getStorageCart() {

    if (process.browser) {
        return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    } else {
        return []
    }
}

export function setStorageCart(cartValues) {
    if (process.browser) {
        localStorage.setItem('cart',JSON.stringify(cartValues))
    } 
}
export default cart