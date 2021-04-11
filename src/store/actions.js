import axios from 'axios';
export const getProducts = ({ commit }) =>{
    axios.get('https://fakestoreapi.com/products?limit=5')
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
    commit('ADD_TO_CART', {product, quantity} )
}