import React from 'react'
import ButtonCard from '../ButtonCard/ButtonCard';
import "./itemCount.css"


function ItemCount({stock, onAddToCart}) {
let [count, setCount]= React.useState(1)

function handleSuma(){ 
  if(count < stock)
setCount(count+1);
}

function handleResta(){
  if (count > 1)
    setCount(count-1);

}


  return (
    <div className='counterButton'>
      <div className='countCSS'>
        <button className='buttonCountRadius' onClick= {handleResta}>-</button>
        <span className='spanCount'>{count}</span>
        <button className='buttonCountRadius' onClick= {handleSuma}>+</button>
        </div>
        <div>
          <ButtonCard disabled={stock<=0} onClick= { ()=> onAddToCart(count)}>Agregar al carrito</ButtonCard>
        </div>    
    </div>   
  )
}

export default ItemCount