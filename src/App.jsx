import { useState } from "react"
// import './App.css'
import Header from "./components/Header"
import { CartContext } from "./components/CartContext.jsx"

// console.log("App.jsx -- TOP LEVEL Check, cart count: ", cartCount);


function App() {
    const [cartCount, setCartCount] = useState(0)

    console.log("App.jsx -- function App() Check, cart count: ", cartCount);

    return (
        <>
            <div id="outer-wrapper" className="outer-wrapper h-full w-full">
                
                <CartContext.Provider value={{ cartCount, setCartCount }} >
                    <Header />
                </CartContext.Provider>

                {/* <Body>
                    <Products />
                    <Cart />
                    <Checkout />
                    <OrderConfirmation />
                </Body>

                <Footer /> */}
            </div>
        </>
    )
}

export default App
