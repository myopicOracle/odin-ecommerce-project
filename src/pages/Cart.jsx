import { useState, useContext } from "react"
// import { CartContext } from '../context/CartContext'


const Cart = () => {
    // const { cartCount, setCartCount } = useContext(CartContext)
    const [ testCount, setTestCount ] = useState(0)

    function handleAddToCart() {
        setTestCount(prev => prev + 1)
    }

    return (
        <div>
            <h1>{testCount}</h1>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    )
}

export default Cart