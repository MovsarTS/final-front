import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import EmailVerifyPage from "./pages/EmailVerifyPage/EmailVerifyPage";
import MainPage from "./pages/MainPage/MainPage";
import OneAlphabetPage from "./pages/OneAlphabetPage/OneAlphabetPage";
import { Link } from "react-router-dom";
import OneAuction from "./pages/OneAuction/OneAuction";
import Products from "./pages/Products/Products";
import About from "./components/About/Abot"

function App() {
  
  
  return (
    <>
     <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='user/:id/verify/:token' element={<EmailVerifyPage />} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/category/:id' element={<Products/>} />
        <Route path="/oneAuction/:id" element={<OneAuction />} />
        <Route path="/vremenno" element={<OneAlphabetPage />} />
        <Route path='/about' element={<About />} />
      </Routes> 
 
    </>
  );
}

export default App;