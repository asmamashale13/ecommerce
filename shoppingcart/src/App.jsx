import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar.jsx'
import Products from './Pages/Products.jsx'
import Footer from './Components/Footer.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cart from './Pages/Cart.jsx'
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Products></Products>}></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
