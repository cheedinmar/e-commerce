import product from '../../../apis/product';

export const getProducts = ( context ) =>{
    //if length of products is empty then make api call
    //const found = array1.find(element => element > 10);
    
    
    product.all()
    .then(response =>{
        context.commit('SET_PRODUCTS', response.data)
    })
    
}


export const getProduct = (context, productId) => {
    //if product in state does not match with the product id being call, make api call
   product.singleProduct(productId)
    .then(response =>{
        context.commit('SET_PRODUCT', response.data)
    })
}