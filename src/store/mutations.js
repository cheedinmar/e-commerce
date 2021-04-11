export const SET_PRODUCTS = (state, products)  =>{
    state.products = products;  
}

export const SET_PRODUCT =  (state, product) =>{
    state.product = product;
} 

export const ADD_TO_CART = (state, {product, quantity}) => {
     state.cart.push({
         product,
         quantity
     })
}