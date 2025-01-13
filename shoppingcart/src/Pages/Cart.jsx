import React, { useContext } from 'react'
import { CartContext } from '../Features/ContextProvider';
import CartProduct from '../Components/CartProduct';
import { totalItem } from '../Features/CartReducer';
import { totalPrice } from '../Features/CartReducer';

const Cart=()=>{
    const {cart}=useContext(CartContext)
    return(
        <div className='container mt-3'>
            <div className="row">
                <div className="col-8">
                    {cart.map(p=>(
                        <CartProduct product={p}></CartProduct>
                    ))}
                </div>
                <div className="col-3 p-3">
                    <div className='bg-secondary p-2 text-white'>
                        <h5>Total Items: {totalItem(cart)}</h5>
                        <h5>Total Price: ₹ {totalPrice(cart)}</h5>
                        <button className='btn btn-success bg-green'>Checkout</button>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default Cart;