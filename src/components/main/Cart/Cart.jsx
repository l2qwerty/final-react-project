/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Button } from "@material-ui/core";
import CardsInCart from "./CardsInCart";
import Service from "../../../services/http-service";

function Cart() {
  const [goods, setCards] = useState(null);
  useEffect(() => {
    Service.get("/goods")
      .then((res) => {
        setCards(res.response);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);
  const cards = useSelector((state) => state.cart.cards);

  return (
    <div>
      {cards.length > 0 ? (
        goods ? (
          <Grid container justifyContent="center" alignItems="center">
            {goods
              .reduce(
                (r, { id, title, coast, img, alt, text, path }) =>
                  cards.some((o) => o.id === id)
                    ? (r.push({ id, title, coast, img, alt, text, path }), r)
                    : r,
                []
              )
              .map((item) => (
                <Grid
                  item
                  lg={12}
                  container
                  justifyContent="center"
                  key={item.id}
                >
                  <CardsInCart
                    id={item.id}
                    title={item.title}
                    coast={item.coast}
                    img={item.img}
                    alt={item.alt}
                    text={item.text}
                    path={`/books/id-${item.id}`}
                  />
                </Grid>
              ))}
            <Button variant="contained">Checkout</Button>
          </Grid>
        ) : (
          <Grid container justifyContent="center" alignItems="center">
            <CircularProgress />
          </Grid>
        )
      ) : (
        "Cart is empty"
      )}
    </div>
  );
}

export default Cart;
