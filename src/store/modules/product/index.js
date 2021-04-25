import state from './state';
import * as getters from './getters';
// * means import everything from the directory
import * as actions from './actions';
import * as mutations from './mutations';

 export default{
     state,
     getters,
     actions,
     mutations
 }

 //import the produvt module in the store index.js