import ItemListContainer from './components/ItemList/ItemListContainer';
import "./App.css";
import './components/NavBar/NavBar.css';
import NavBar from './components/NavBar/NavBar';
import "./components/ItemList/Item.css"
import "./index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { CartContextProvider } from './context/cartContext';
import CartView from './components/CartView/CartView';
import ThankYouForBuy from './components/ThankYouForBuy/ThankYouForBuy';




function App() {
  
  return (    
    <CartContextProvider>      
     <BrowserRouter>
     <NavBar/>      
      <Routes>                         
     <Route path='/' element= {<ItemListContainer/>}/>
     <Route path='/item/:idItem' element= {<ItemDetailContainer/>}/>
     <Route path='/category/:id' element= {<ItemListContainer/>}/>     
     <Route path="/cart" element={<CartView />}/>    
     <Route path="/thankYouForBuy/:idOrder" element={<ThankYouForBuy/>}/>
     <Route path="*" element={<h1>Error 404: Esta página no existe</h1>}/>        
      </Routes>       
      </BrowserRouter>      
      </CartContextProvider>    
     
  );
}


export default App;


