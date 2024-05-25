import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Collections from "./components/Collections";
import Men from "./components/Men";
import Women from "./components/Women";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Collections" element={<Collections />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
