import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Landing from "./pages/Landing"
import PageNotFound from "./pages/PageNotFound"
import ViewAllProducts from "./pages/ViewAllProducts"
import Cart from "./pages/Cart"
import './App.css'
import ViewProduct from "./pages/ViewProduct"
import WishList from "./pages/WishList"

function App() {
  

  return (
    <>
     <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/viewallproducts' element={<ViewAllProducts/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/viewproduct/:id' element={<ViewProduct/>}/>
        <Route path='/wishlist' element={<WishList/>}/>        
      </Routes>
      <Footer/>
    </>
  )
}

export default App
