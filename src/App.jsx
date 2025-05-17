import { useState } from "react"
import Header from "./components/Header"
import { CartContext } from "./components/CartContext.jsx"
import { ProductContext } from './components/ProductContext.jsx'
import Products from "./components/Products.jsx"
import productData from './components/productData.jsx'

// console.log("App.jsx -- TOP LEVEL Check, cart count: ", cartCount);

function App() {
    const [cartCount, setCartCount] = useState(0)
    const [productsArray, setProductsArray] = useState(productData)

    console.log("//////////////////////////THIS BEGINS A NEW RUN////////////////////////////");
    console.log("App.jsx -- function App() Check, cart count: ", cartCount);

    return (
        <div className="rootWrapper flex flex-col justify-center items-center h-screen w-screen">
            
            <div id="outerWrapper" className="outerWrapper h-full w-full sm:w-[90%]">
                
                <CartContext.Provider value={{ cartCount, setCartCount }} >
                    <Header />
                </CartContext.Provider>

                <ProductContext.Provider value={{ productsArray, setProductsArray }} >
                    <Products />
                </ProductContext.Provider>

            </div>
        </div>
    )
}

export default App
