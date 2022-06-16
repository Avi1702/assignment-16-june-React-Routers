
import './App.css';
import Navbar from "./components/navbar.jsx";
import {Routes,Route} from "react-router-dom";
import Home from "./components/home";
import AllProducts from './components/allProducts';
import ProductDetails from './components/productsDetails';

function App() {
  return (

    <div className="App">

    <Navbar />
    <Routes>

<Route path='/' element={<Home />}></Route>
<Route path='/allProducts' element={<AllProducts />}></Route>
<Route path='/allProducts/:productId' element={<ProductDetails />}></Route>


<Route></Route>
    </Routes>
    
    </div>
  );
}

export default App;
