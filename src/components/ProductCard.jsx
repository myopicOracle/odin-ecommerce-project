import { useState, useContext } from 'react'
import { CartContext } from '/src/context/CartContext'

const ProductCard = ({ item }) => {
  const { setCartCount } = useContext(CartContext)
  const [quantity, setQuantity] = useState(item.qty)


  const handleAddCart = () => {
    setCartCount(prev => prev + 1)
  }

  const handleIncrement = () => {
    setQuantity(prev => prev + 1)
  }

  const handleDecrement = () => {
    setQuantity(prev => {
      if (prev > 0) return prev - 1
      else return prev
    })
  }

  return (
    <div className="cardContainer  flex-col justify-between items-start gap-4 p-4 m-2 bg-gray-200 rounded-sm">
        
      <h3>{item.name}</h3>
        {console.log("item.name", item.name)}

      <img src={item.image} alt={item.name} className="rounded-md border-2 border-amber-600"/>
        {console.log("item.image", item.image, "item.name", item.name)}

      <p className="text-base">{item.description}</p>
        {console.log("item.description", item.description)}

      <p className="text-lg font-semibold">{item.price}</p>
        {console.log("item.price", item.price)}

      <div>
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>

      <button className="add-cart-button" onClick={handleAddCart}>Add</button>

    </div>
  )
}
export default ProductCard