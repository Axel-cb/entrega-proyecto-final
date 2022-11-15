import React from 'react'
import "./itemCount.css"

function ItemCount() {
let [count, setCount]= React.useState(1)

function handleSuma(){
setCount(count+1)
}
function handleResta(){
  if (count > 1)
    setCount(count-1)

}

  return (
    <div className='counterButton'>
        <button className='buttonCountRadius' onClick= {handleResta}>-</button>
        <span className='spanCount'>{count}</span>
        <button className='buttonCountRadius' onClick= {handleSuma}>+</button>
    </div>
  )
}

export default ItemCount