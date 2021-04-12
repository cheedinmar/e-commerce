import axios from 'axios';
export const getProducts = ({ commit }) =>{
    axios.get('https://fakestoreapi.com/products')
    .then(response =>{
        commit('SET_PRODUCTS', response.data)
    })
}
export const getProduct = ({ commit }, productId) => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then(response =>{
        commit('SET_PRODUCT', response.data)
    })
}

export const addProductToCart = ({commit}, {product, quantity}) => {
<<<<<<< HEAD
    commit('ADD_TO_CART', {product, quantity} )
}

=======

    commit('ADD_TO_CART',{ 
    						product, 
    						quantity 
    					});


}
>>>>>>> 0bcda607239868cfc26060b0ba5b2d589c7196d7
