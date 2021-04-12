export const SET_PRODUCTS = (state, products)  =>{
    state.products = products;  
}

export const ADD_PRODUCTS_TO_CART = (state,product_cart)  =>{
    
    state.cart = product_cart;
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