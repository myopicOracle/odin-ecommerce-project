const ProductCard = ({ item }) => {

  // console.log("ProductCard -- Item: ", item);

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

    </div>
  )
}
export default ProductCard