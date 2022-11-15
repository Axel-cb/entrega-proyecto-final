import ItemDetail from './ItemDetail';
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import { getSingleItem } from '../../services/mockService';


function ItemDetailContainer() {
  const [product, setProduct] = useState([])
const {idItem} = useParams()

async function getItemsAsync() {
  let respuesta = await getSingleItem(idItem);
  setProduct(respuesta);
}

useEffect(() => {
  getItemsAsync();
}, [idItem]);

return <ItemDetail product={product} />;
}






export default ItemDetailContainer
