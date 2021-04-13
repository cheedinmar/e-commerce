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
	//if this product already exist in cart then we will increase the quantity
    let productInCart = state.cart.find(item =>{
        return item.product.id === product.id; 
    //in the cart state, we find item, if the product.id in item is === product.id
    //this will return the existing product in the cart

    });
    if (productInCart){
        productInCart.quantity += quantity;
        return;
    }
    //if the function productInCart exist, we will increment the quantity
    //and push product into the cart
     state.cart.push({
         product,
         quantity
     })
}
 export const SET_CART = (state, cartItems) =>{
      state.cart = cartItems;
 }

 export const REMOVE_PRODUCT_FROM_CART =(state, product) =>{
     state.cart = state.cart.filter(item =>{
         return item.product.id != product.id;
         //filter all cart items and return only when that item.product.id != product.id
     })
 }
 export const CLEAR_CART_ITEMS = (state ) =>{
     state.cart = [];
 }