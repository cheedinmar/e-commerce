export const SET_PRODUCTS = (state, products)  =>{
    state.products = products;  
}

<<<<<<< HEAD
// export const ADD_PRODUCTS_TO_CART = (state,product_cart)  =>{

//     var product_cart_array = [];
//     state.cart = product_cart_array.push(product_cart);
// }
=======
export const ADD_PRODUCTS_TO_CART = (state,product_cart)  =>{
    
    state.cart = product_cart;
}
>>>>>>> 0bcda607239868cfc26060b0ba5b2d589c7196d7

export const SET_PRODUCT =  (state, product) =>{
    state.product = product;
} 

export const ADD_TO_CART = (state, {product, quantity}) => {
	
     state.cart.push({
         product,
         quantity
     })
}