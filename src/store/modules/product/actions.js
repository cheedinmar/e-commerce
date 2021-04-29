import product from '../../../apis/product';

export const getProducts = ( context ) =>{
    //if length of products is empty then make api call
    //const found = array1.find(element => element > 10);
    
    
    product.all()
    .then(response =>{
        context.commit('SET_PRODUCTS', response.data)
    })
    
}

export const getProduct = ({commit}, productId) => {
    //if product in state does not match with the product id being call, make api call
   product.singleProduct(productId)
    .then(response =>{
        commit('SET_PRODUCT', response.data)
    })
}


export const removeProductFromCart = ({commit}, product) =>{
    commit('REMOVE_PRODUCT_FROM_CART', product)
}

export const clearCartItems = ({commit} ) =>{
    commit ('CLEAR_CART_ITEMS')
}
