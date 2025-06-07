import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from '../components/CartItem'

const Cart = () => {
  const { cartItems } = useContext(CartContext) 

  return (
    <div>
      <h1>Shopping Cart</h1>
      {console.log("Cart.jsx -- cartItems: ", cartItems)}
      <div className="cartContainer w-1/3 grid grid-cols-1" >
          {cartItems.map(item => (
            <CartItem item={item} key={item.id}/>
          ))}
      </div>
    </div>
  )
}

export default Cart