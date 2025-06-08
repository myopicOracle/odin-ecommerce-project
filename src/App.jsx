import { useState } from "react"
import { Outlet } from "react-router-dom"
import { CartContext } from "./context/CartContext"
import { ProductContext } from './context/ProductContext'
import productData from './data/productData'
import Header from "./components/Header"
import Footer from "./components/Footer"

// console.log("App.jsx -- TOP LEVEL Check, cart count: ", cartCount);

function App() {
    const [productsArray, setProductsArray] = useState(productData)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(cartItems.length)

    console.log("//////////////////////////THIS BEGINS A NEW RUN////////////////////////////");
    console.log("App.jsx -- function App() Check, cart count: ", cartCount);

    return (
        <div className="rootWrapper flex flex-col justify-center items-center h-screen w-screen">
            
            <div id="outerWrapper" className="outerWrapper h-full w-full sm:w-[90%]">
                
                <ProductContext.Provider value={{ productsArray, setProductsArray }} >
                    <CartContext.Provider value={{ cartCount, setCartCount, cartItems, setCartItems }} >
                        <Header />
                        <Outlet />
                        <Footer />
                    </CartContext.Provider>
                </ProductContext.Provider>

            </div>
        </div>
    )
}

export default App
