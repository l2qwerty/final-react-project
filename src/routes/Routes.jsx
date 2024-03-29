import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Contacts from "../components/header/Contacts";
import Cart from "../components/main/Cart/Cart";
import Logout from "../components/header/Logout";
import BooksRoutes from "./books/BooksRoutes";
import NotFound from "../components/NotFound";
import Checkout from "../components/main/Cart/Checkout";

function Routes() {
  return (
    <Switch>
      <Route path="/books" component={BooksRoutes} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/login" component={Logout} />
      <Route path="/cart" component={Cart} />
      <Route exact path="/" render={() => <Redirect to="/books" />} />
      <Route path="/checkout" component={Checkout} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Routes;
