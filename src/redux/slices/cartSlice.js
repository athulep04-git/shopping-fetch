import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
     name:"cart",
    initialState:{
        items:[] //all products save
    },
    reducers:{
        //action
        //add to wishlist
        addToCart(state,action){
            const product=action.payload
            const existingProduct=state.items.find((item)=>item.id===product.id)
            if (existingProduct){
                alert("product already exist")
            }
            else{
                state.items.push({...product,quantity:1,totalprice:product.price})
                alert("product added")
            }
        },
        deleteFromCart(state,action){
            const productId=action.payload
            return{...state,items:state.items.filter(item=>item.id!==productId)}
        },
        increment(state,action){
                const  product=action.payload
                const existingProduct=state.items.find((item)=>item.id==product.id)
                existingProduct.quantity++
                existingProduct.totalprice=existingProduct.quantity*existingProduct.price
        },
         decrement(state,action){
                const  product=action.payload
                const existingProduct=state.items.find((item)=>item.id==product.id)
                if(existingProduct.quantity>1){    
                existingProduct.quantity--
                existingProduct.totalprice=existingProduct.quantity*existingProduct.price
                }
                else
                return{...state,items:state.items.filter(item=>item.id!==product.id)}
                
        }
    }
})
export const {addToCart,deleteFromCart,increment,decrement}=cartSlice.actions
export default cartSlice.reducer