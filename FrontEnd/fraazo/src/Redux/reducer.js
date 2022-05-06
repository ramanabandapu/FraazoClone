import { ADD_FRUITS, ADD_VEG,ADD_CARTPRODUCT,Remove_CART } from "./action";

const initstate={
    fruiteArr:[],
    vegArr:[],
    cart:[]

}
export const reducer=(store=initstate,{type,payload})=>{
    
         switch(type)
         {

           case  ADD_FRUITS:
             return{...store,fruiteArr:payload};
             
             case  ADD_VEG:
                return{...store,vegArr:payload};


                case ADD_CARTPRODUCT:

                  // return {...store,cart:[...store.cart,payload]};
                  const itemindex=store.cart.findIndex((ele)=>ele.id===payload.id);

                  if(itemindex>=0)
                  {
                    store.cart[itemindex].qty=store.cart[itemindex].qty+1;
                  }

                  else 
                  {
                    
                    return {
                      ...store,cart:[...store.cart,payload]

                       }


                  }

                  case Remove_CART:
                   const data=store.cart.filter((ele)=>ele.id!==payload)
                   return {...store,cart:data}
                  
                                     
          
          
           



               default:
                 return store

         }

    }