import React, { useEffect, useState } from 'react'

function useCart() {
    const [cart,setcart]=useState([])

    const addcart= (item)=>{
      console.log(item);
      
        const exist = cart.find((value)=>value.id === item.id)
        if (exist) {
          setcart(cart.map((value)=>{
            return value.id === item.id ? {...value,quantity:value.quantity+1}:value
            }))  
           
      } else{
          setcart((prev)=>[...prev,{...item,quantity:1}])  
      }}

      useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        if (cart) {
         setcart(cart);
        }
      }, []);

      useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
      }, [cart]);
    
    
     

    return {cart ,addcart}
}



export default useCart