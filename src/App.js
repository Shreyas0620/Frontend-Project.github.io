import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Headphone from './Components/Headphone';
import Login from './Components/Login';
import About from './Components/About';
import Details from './Components/Details';
import Speaker from './Components/Speaker';
import Signup from './Components/Signup';
import { CartProvider } from 'react-use-cart';
import Cart from './Components/Cart';
import Footer from './Components/Footer';




function App() {





  return (
    <>
<Router>
  

<Navbar />
<Routes>

  <Route path='/' element={<Home />} />
  <Route path='headphone' element={<Headphone/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='/signup' element={<Signup/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/speaker' element={<Speaker/>} />
  <Route path='/details' element={<Details/>} />
  
  <Route path='/cart' element={<Cart/>} />
 
  
</Routes>
<Footer/>
</Router>



    </>
  );
}

export default App;
