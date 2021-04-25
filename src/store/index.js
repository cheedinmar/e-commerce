 import Vuex from 'vuex';

 import state from './state';
 import * as getters from './getters';
 import * as mutations from './mutations';
 import * as actions from './actions';
 import product from './modules/product'

 export const store =  new Vuex.Store({

    state,
    getters,
    mutations,
    actions,

    modules:{
       product
    }
 })