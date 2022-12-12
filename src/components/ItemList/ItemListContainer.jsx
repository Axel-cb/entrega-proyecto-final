import getItems, { getItemsByCategory } from '../../services/firestore'
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import ItemList from './ItemList'
import Loaders from '../Loaders/Loaders'
import "../Loaders/loaders.css"




function ItemListContainer() {
  const [products, setProducts] = useState(null)
const {id} = useParams()


async function getItemsAsync() {
  if( !id){
    let respuesta = await getItems();
    setProducts(respuesta);
  }
  else {
    let respuesta = await getItemsByCategory(id)
    setProducts(respuesta)
  }
  
}

useEffect(() => {
  getItemsAsync();    
}, [id]);

  return <>
      {products ? <ItemList products={products} /> : <div className='loaderCenter'><Loaders/></div>}
      </>
}



export default ItemListContainer



