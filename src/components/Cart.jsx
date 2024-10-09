import React from 'react'
import useCart from '../hook/useCart';
import Card from './Card';


function Cart() {
    const {cart}=useCart()
       

    return (
        <div className='text-center'> 
            <h1>Cart items</h1>
        <div className='flex justify-center text-white ' >
            {cart.map((item)=>{
   return <Card key={item.id} item={item} />
            })}
        </div>
        </div>
    )
}

export default Cart