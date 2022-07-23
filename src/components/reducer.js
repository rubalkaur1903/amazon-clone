export const initialState = {
    cart: [],
}

// SELECTOR
export const getCartTotal = (cart) => {
    console.log("cart in getCartTotal: ", cart)
    cart?.reduce((amount, item) => Number(item.price) + amount, 0)
}


const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            }
        default:
            return state
    }
}

export default reducer;