import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../Features/ContextProvider';

const CartProduct=({product})=>{
    const{cart,dispatch}=useContext(CartContext)
    const Increase=(id)=>{
        const Index=cart.findIndex(p=>p.id===id)
        if(cart[Index].quantity<10){
            dispatch({type: "Increase",id})
        }
    };
    const Decrease=(id)=>{
        const Index=cart.findIndex(p=>p.id===id)
        if(cart[Index].quantity>1){
            dispatch({type: "Decrease",id})
        }

    };
    return(
        <div className='d-flex border mb-4'>
            <img src={product.Img} className='w-25 h-25' alt=""/>
            <div className="detail ms-4">
                <h4>{product.title}</h4>
                <h4>{product.price}</h4>
                <div className="buttons">
                    <button className='rounded-circle px-2' onClick={()=>Decrease( product.id) }><b>-</b></button>
                    <button className=' rounded-circle '>{ product.quantity }</button>
                    <button className='rounded-circle px-2' onClick={()=>Increase(product.id)}><b>+</b></button>
                </div><br></br>
                <button className='btn btn-sm btn-danger' onClick={()=>dispatch({type: "Remove",id:product.id})}>Remove</button>


            </div>

        </div>
    )
}
export default CartProduct;