import { useContext } from "react"
import ProductList from "./ProductList"

function Products() {

  return (
    
    <div className="outerWrapper w-full h-full">
      <div className="w-full">Products Catalogue</div>
      <div id="productsContainer" className="productsContainer w-full">
        <ProductList />
      </div>
    </div>

  )
}

export default Products