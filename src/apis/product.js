// all apis related to product

import Api from './api';
const END_POINT = 'products';
//now if the end point changes, we can reflect the changes in line 4
export default {
    //here with create methods according to Api requirements

    //fetch all products
    all(){
        return Api.get('END_POINT');
        //returns a promise
    },
    singleProduct(productId){
        return Api.get( `${END_POINT}/${productId}`)
    }
}