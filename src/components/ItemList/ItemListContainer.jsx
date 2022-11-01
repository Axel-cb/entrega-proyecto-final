import Item from './Item'

function ItemListContainer(props) {
  return (
    <div>
    <h2 className="greetingStyle">{props.greeting}</h2>    
   <Item imagen= "/imagenes/alfagris.avif" titulo= "Termo alfa" precio= {3500}/> 
   </div>
  )
}

export default ItemListContainer