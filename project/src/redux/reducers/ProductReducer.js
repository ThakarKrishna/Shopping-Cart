import { actionTypes } from "../Constants/actions-type";
let initialState = {
    products: [],
};
const cart = [];

export const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return { ...state, products: payload }


        default: return state;
    }

}

export const selectedProductsReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case actionTypes.SELECTED_PRODUCTES:
            return { ...state, ...payload };
        case actionTypes.REMOVE_SELECTED_PRODUCTS:
            return {};
        default:
            return state;
    }

}

export const handleCart =(state=cart,action)=>{
// console.log("🚀 ~ file: ProductReducer.js ~ line 31 ~ handleCart ~ action", action)
// console.log("🚀 ~ file: ProductReducer.js ~ line 31 ~ handleCart ~ cart", cart)
     const data =action.payload;
    switch(action.type){
        case "ADD_ITEM":
            const exist = state.find((x)=>x.id === data.id)
            if(exist){
                return state.map((x)=>
                    x.id === data.id? {...x,qty:x.qty+1}:x
                )
            }else{
                const data = action.payload;
                // console.log("🚀 ~ file: ProductReducer.js ~ line 43 ~ handleCart ~ data", data)
                return[
                    ...state,{...data,qty:1 }
                ]
            }
        

           case "DEL_ITEM":
               const exist1 = state.find((x)=>x.id === data.id);
               if(exist1.qty === 1){
                   return state.filter((x)=>x.id !== data.id)
               }else{
                return state.map((x)=>
                    x.id === data.id? {...x,qty:x.qty-1}:x
                )
               }
            ;

            case "REMOVE_FROM_CART":
                const exist2 = state.find((x)=>x.id === data.id);
                if(exist2?.qty === 1){
                    return state.filter((x)=>x.id !== data.id)
                }
                else{
                 return state.map((x)=>
                     x.id === data.id? {qty:0}:x
                 )
                }
               default:
                   return state;
             

    }
}


