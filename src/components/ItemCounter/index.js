import { useContext } from "react"
import { CartContext } from "../CartContext"

const ItemCounter = ({item}) => {
  const {addToCart, substractFromCart} = useContext(CartContext) 
  const onAdd = ()=>{
    addToCart(item)
  }
  const onSubstract = ()=>{
    substractFromCart(item)
  }
  return (
    <div className="fila">
      <button onClick={onSubstract}>-</button>
      <span>5</span>
      <button onClick={onAdd}>+</button>
    </div>
  )
}

export default ItemCounter