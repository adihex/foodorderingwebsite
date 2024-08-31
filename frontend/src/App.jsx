import React from "react";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap-dark/src/bootstrap-dark.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./screens/Signup";
import { OrderProvider } from "./components/ContextReducer";
import Cart from "./screens/Cart.jsx";
import MyOrders from "./screens/MyOrders";
function App() {
  return (
    <OrderProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/myOrder" element={<MyOrders />} />
        </Routes>
      </Router>
    </OrderProvider>
  );
}

export default App;
