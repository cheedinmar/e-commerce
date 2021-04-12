export const SET_PRODUCTS = (state, products)  =>{
    state.products = products;  
}

// export const ADD_PRODUCTS_TO_CART = (state,product_cart)  =>{

//     var product_cart_array = [];
//     state.cart = product_cart_array.push(product_cart);
// }

export const SET_PRODUCT =  (state, product) =>{
    state.product = product;
} 

export const ADD_TO_CART = (state, {product, quantity}) => {
     state.cart.push({
         product,
         quantity
     })
}