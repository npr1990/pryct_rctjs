import { useContext } from "react"
import { CartContext } from "../CartContext"

const ItemCounter = ({item}) => {
  const {addToCart, substractFromCart, getItemQuantity} = useContext(CartContext) 
  const onAdd = ()=>{
    addToCart(item)
  }
  const onSubstract = ()=>{
    substractFromCart(item)
  }
  return (
    <div className="fila">
      <button onClick={onSubstract}>-</button>
      <span>{getItemQuantity(item.id)}</span>
      <button onClick={onAdd}>+</button>
    </div>
  )
}

export default ItemCounter