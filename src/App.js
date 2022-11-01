import ItemListContainer from './components/ItemList/ItemListContainer';
import "./App.css";
import './components/NavBar/NavBar.css';
import NavBar from './components/NavBar/NavBar';
import "./components/ItemList/Item.css"
import "./index.css"

function App() {
  return (
     <>    
     
      <header>
      <NavBar/>                
        </header>      
    <ItemListContainer greeting="¡Bienvenidos a Bazar mayorista!"/>
          
    </>    
  );
}


export default App;


