import { Routes, Route } from "react-router-dom";
import { Cart } from "../Pages/Cart";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";

export const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/customer/account/login" element={<Login />}></Route>
      <Route path="/checkout/cart" element={<Cart />}></Route>
    </Routes>
  );
};
