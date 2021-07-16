import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Cards from "./Cards";
import Service from "../../services/http-service";
import MainSlider from "./Slider/Slider";

function Books() {
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
  return (
    <>
      <MainSlider />
      {goods ? (
        <Grid container justifyContent="center" alignItems="center">
          {goods.map((item) => (
            <Grid
              item
              lg={4}
              sm={6}
              container
              justifyContent="center"
              key={item.id}
            >
              <Cards
                id={item.id}
                title={item.title}
                img={item.img}
                alt={item.alt}
                text={item.text}
                path={`/books/id-${item.id}`}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container justifyContent="center" alignItems="center">
          <CircularProgress />
        </Grid>
      )}
    </>
  );
}

export default Books;
