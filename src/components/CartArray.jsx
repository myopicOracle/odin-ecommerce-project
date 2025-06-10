import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'

const CartArray= () => {

    const { cartItems, setCartItems } = useContext(CartContext)

    const handleDelete = (id) => {
        const arrayAfterDel = cartItems.filter(item => item.id !== id)
        setCartItems(() => arrayAfterDel)
        setCartCount(() => cartItems.length)
    }

    const handleClearCart= () => {
        setCartItems(() => [])
        setCartCount(() => cartItems.length)
    }

    return (
        <>
            <h1>Shopping Cart</h1>
            {console.log("Cart.jsx -- cartItems: ", cartItems)}
            <div className="cartContainer w-1/3 grid grid-cols-1" >
                {cartItems.map(item => (
                    <CartItem item={item} key={item.id} deleteBtn={() => handleDelete(item.id)} />
                ))}
            </div>
            <button className={"bg-amber-600 text-amber-300 font-bold p-4 m-2 rounded-lg"} onClick={handleClearCart}>Clear Cart</button>
        </>
    )
}

export default CartArray