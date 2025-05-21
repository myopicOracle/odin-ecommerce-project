import { useContext } from 'react'
import { ProductContext } from '/src/context/ProductContext'
import ProductCard from './ProductCard'

const ProductList = () => {
  const { productsArray, setProductsArray } = useContext(ProductContext)
  
  console.log("ProductList, productsArray: ", productsArray);

  return (
    <div className="productsContainer w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" >
      {productsArray.map(item => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  )
}

export default ProductList
