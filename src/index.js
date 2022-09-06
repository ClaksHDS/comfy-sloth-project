import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const DOMAIN = `${process.env.REACT_APP_AUTH0_DOMAIN_KEY}`;
const CLIENT_ID = `${process.env.REACT_APP_AUTH0_CLIENT_ID_KEY}`;

ReactDOM.render(
  <Auth0Provider
    domain='dev-jnfv6hxx.eu.auth0.com'
    clientId='4cYxF0lcTZ9R93jyP0zj04ZSjctE3cBw'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
