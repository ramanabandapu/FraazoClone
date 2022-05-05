export const ADD_FRUITS= "ADD_FRUITS";
export const ADD_VEG="ADD_VEG";
export const ADD_CARTPRODUCT="ADD_CARTPRODUCT"
export const Remove_CART="Remove_CART";

export const addFruits=(payload)=>{

    return{
        type: ADD_FRUITS,
        payload:payload,
    }

}
export const addVeg=(payload)=>{

    return{
        type: ADD_VEG,
        payload:payload,
    }

}

export const addCartproduct=(payload)=>{
    return {
        type:ADD_CARTPRODUCT,
        payload:payload,
        
    } 
 
}

export const removeCart=(id)=>{
    return {
        type:Remove_CART,
        payload:id,
    }
  } 

