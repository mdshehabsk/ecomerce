import { Route, Routes } from "react-router-dom";
import HomePage from "@pages/Home"
import ProductPage from "@pages/product/Product";
import ProductDetailsPage from "@pages/product-details/ProductDetails";
import Header from "@components/Header";
import Footer from "@components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
