import Item from './Item'
import getItems from '../../services/mockService'
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

function ItemListContainer() {
  const [products, setProducts] = useState([])
const {id} = useParams()

  useEffect(
    () =>{
      getItems(id)
  .then((respuestaItems) => {
    setProducts(respuestaItems)
  })
    },
    [id]
  )

  return (
    <div className='container containerCards'>      
    
 {products.map((product) => {
  return(
    <Item 
    key= {product.id}    
    id= {product.id}
    imagen= {product.imagen}
    nombre= {product.nombre}
    precio= {product.precio}
    category= {product.category}  
    stock= {product.stock}
    />    
 )
   })}
   </div>
   
  )
}



export default ItemListContainer



