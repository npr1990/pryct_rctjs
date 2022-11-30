import { useContext } from "react"
import { CartContext } from "../CartContext"
import "./itemCounter.css";

const ItemCounter = ({item}) => {
  const {addToCart, substractFromCart, getItemQuantity} = useContext(CartContext) 
  const onAdd = ()=>{
    addToCart(item)
  }
  const onSubstract = ()=>{
    substractFromCart(item)
  }
  return (
    <div className="d-flex flex-row">
      <button className="btn btn-primary h-100" onClick={onSubstract}>-</button>
      <span className="counter" >{getItemQuantity(item.id)}</span>
      <button className="btn btn-primary h-100" onClick={onAdd}>+</button>
    </div>
  )
}

export default ItemCounter