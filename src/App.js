import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./components/product";
import Footer from "../src/components/Footer/Footer";
import Amazon from "./components/amazon";
import Slidershow from "./components/Slidershow/slidershow";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import Menu from "./components/Menu/hamburguermenu";
import { AuthProvider } from "./contexts/auth";
import GlobalStyle from "./styles/global";
import Recomend from "./components/recomend";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

const App = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <AuthProvider>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/login" element={<Signin />} />
          <Route exact path="/cadastro" element={<Signup />} />
          <Route path="*" element={<Signin />} />
          <Route
            path="/"
            element={
              <>
                <Navbar
                  handleClick={handleClick}
                  setShow={setShow}
                  size={cart.length}
                />
                <Menu
                  setShow={setShow}
                  size={cart.length}
                  handleChange={handleChange}
                />
                {show ? <Slidershow handleClick={handleClick} /> : <a />}

                {show ? (
                  <Amazon handleClick={handleClick} />
                ) : (
                  <Cart
                    cart={cart}
                    setCart={setCart}
                    handleChange={handleChange}
                  />
                )}

                <Footer />
              </>
            }
          />
          <Route
            path="/product/:id"
            element={
              <>
                <Navbar
                  handleClick={handleClick}
                  setShow={setShow}
                  size={cart.length}
                />
                <Menu
                  setShow={setShow}
                  size={cart.length}
                  handleChange={handleChange}
                />
                {show ? <Slidershow handleClick={handleClick} /> : <a />}

                {show ? (
                  <Product handleClick={handleClick} />
                ) : (
                  <Cart
                    cart={cart}
                    setCart={setCart}
                    handleChange={handleChange}
                  />
                )}
                <Recomend />

                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};
//Tem que mudar o header quando tiver 1310px width
export default App;
