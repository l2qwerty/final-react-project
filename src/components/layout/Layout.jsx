import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Routes from "../../routes/Routes";
import BooksRoutes from "../../routes/books/BooksRoutes";

const useStyles = makeStyles({
  container: {
    marginBottom: "30px",
  },
  body: {
    minHeight: "76vh",
  },
  footer: {
    marginTop: "20px",
  },
});

function Layout() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} className={classes.container}>
        <Header />
      </Grid>
      <Grid item xs={12} className={classes.body}>
        <Routes>
          <BooksRoutes />
        </Routes>
      </Grid>
      <Grid item xs={12} className={classes.footer}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default Layout;
