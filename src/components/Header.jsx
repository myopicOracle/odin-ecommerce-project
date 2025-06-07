import { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { CartContext } from '/src/context/CartContext'

// console.log("Header.jsx -- TOP LEVEL Check, cart count: ", cartCount)


const Header = () => {
    const { cartCount, setCartCount } = useContext(CartContext)

    console.log("Header.jsx -- function App() Check, cart count: ", cartCount)

    return (

        <div className="header flex justify-between items-center">
            
            <div className="flex-col gap-4 p-4">
                <h1 className="text-2xl">Version Practice</h1>
                <h2>Context API</h2>
            </div>
            
            <nav className='w-auto h-full flex justify-center gap-4'>
                <Link to="/">Home</Link>
                <Link to="/products">Shop</Link>
                <Link to="/cart">Cart</Link>
            </nav>
            
            <div className='flex items-center'>
                <button className="cart-button flex gap-2" onClick={() => setCartCount(cartCount + 1)}>
                    <span className="cart-icon p-2">🛒</span>
                    <span className="cart-count p-2">{cartCount}</span>
                </button>
                <button className="login-button bg-amber-700 py-2 px-4 mx-2 text-white font-semibold rounded-xl">Login</button>
            </div>
            
        </div>

    )
}

export default Header
