import { Route, Routes } from "react-router-dom";
import HomePage from "@pages/Home";
import ProductPage from "@pages/product/Product";
import ProductDetailsPage from "@pages/product-details/ProductDetails";
import Header from "@components/Header";
import Footer from "@components/Footer/Footer";
import Login from "@pages/auth/login/Login";
import Auth from "@pages/auth/Auth";
import Register from "@pages/auth/register/Register"
function App() {
  return (
    <>
      <Header />
      <Routes>
      
        <Route index element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/*" element={<Auth/>}>

          <Route index element={<Login/>} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
