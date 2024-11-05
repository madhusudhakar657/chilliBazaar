
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import HomePage from "./homeContent";
import Contact from "./contact";
import Products from "./productComponent/productsAll"
import CartPage from "./productComponent/productsInCart"
import ProductDetails from "./productComponent/productDetailes"
import AboutUs from "./aboutUs"
import PageNotFound from "./noPage"
import RegionsComponent from "./regions";
import SellingPage from "./sellingPage";
import SignIn from "../authComponents/signIn";
import LoginPage from "../authComponents/signIn";
import ContactPage from "./contact";
import Header from "../semanticComponents/header";
import SuppliersPage from "./suppliers";
import { useEffect } from "react";
import SearchPage from "./productComponent/searchPage";
import ProductCard from "./productComponent/productsDetailsInfo";


function Layout() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    // <Router className="flex bg-gray-300 flex-col justify-center max-w-screen min-h-screen">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductCard />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/selling" element={<SellingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/supplier" element={<SuppliersPage />} />
        <Route path="/regions" element={<RegionsComponent />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    // </Router    >

  )
}

export default Layout
