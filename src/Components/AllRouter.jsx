import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "../Contexts/PrivateRoute";
import { Cart } from "../Pages/Cart";
import { Home } from "../Pages/Home";
import { HomeKitchen } from "../Pages/HomeKitchen";
import { Login } from "../Pages/Login";
import { Profile } from "../Pages/Profile";

export const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/customer/account/login" element={<Login />}></Route>
      <Route path="/checkout/cart" element={<Cart />}></Route>
      <Route
        path="/customer/account"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/c/groceries" element={<HomeKitchen />}></Route>
    </Routes>
  );
};
