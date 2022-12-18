import ItemDetail from './ItemDetail';
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import { getSingleItem } from '../../services/firestore';
import "../Loaders/loaders.css"
import Loaders from '../Loaders/Loaders'


function ItemDetailContainer() {
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true)
const {idItem} = useParams()

async function getItemsAsync() {
  getSingleItem(idItem).then(respuesta =>{
    setProduct(respuesta)
    setIsLoading(false);
  });

}

useEffect(() => {
  getItemsAsync();
}, [idItem]);

if(isLoading)
return( <div className='loaderCenter'><Loaders/></div>)


return (
<ItemDetail product={product} />
)

}






export default ItemDetailContainer
