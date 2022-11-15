import ItemListContainer from './components/ItemList/ItemListContainer';
import "./App.css";
import './components/NavBar/NavBar.css';
import NavBar from './components/NavBar/NavBar';
import "./components/ItemList/Item.css"
import "./index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';


function App() {
  return (
     <BrowserRouter>
     <NavBar/> 
      <Routes>                        
     <Route path='/' element= {<ItemListContainer/>}/>
     <Route path='/item/:idItem' element= {<ItemDetailContainer/>}/>
     <Route path='/category/:id' element= {<ItemListContainer/>}/>     
     <Route path='*' element= {<p>Error 404: página no encontrada</p>}/>     
      </Routes>      
      </BrowserRouter>        
  );
}


export default App;


