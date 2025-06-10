import { useState, useContext } from "react"

const Checkout = () => {
    

    return (
        <div>
            <form action="submit">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />

                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" />

                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" />

                <label htmlFor="state">State</label>
                <input type="text" name="state" id="state" />

                <label htmlFor="zip">Zip</label>
                <input type="text" name="zip" id="zip" />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Checkout