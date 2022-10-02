import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { UserAuthContextProvider } from "./Contexts/UserAuth";
import { CartContextProvide } from "./Contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <CartContextProvide>
        <UserAuthContextProvider>
          <App />
        </UserAuthContextProvider>
      </CartContextProvide>
    </BrowserRouter>
  </ChakraProvider>
);
