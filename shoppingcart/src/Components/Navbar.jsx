import React, { useContext } from 'react'
import { BsCart} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext} from '../Features/ContextProvider'
const Navbar = () => {
    const {cart}=useContext(CartContext)
    return(
        <div className='d-flex justify-content-between bg-black py-3 px-5 text-white'>
            <Link to='/' className='navbar-brand fs-3 fw-bolder'>Shop</Link>
            <h2>WELCOME TO ASMA'S ONLINE SHOPPING SERVICE</h2>
            <Link to='/cart' className='navbar-link fs-3 fw-bolder text-white'> Cart <BsCart />{cart.length}</Link>
        </div>
    )
}
export default Navbar