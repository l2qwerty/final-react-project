/* eslint-disable react/forbid-prop-types */
import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuBookTwoToneIcon from "@material-ui/icons/MenuBookTwoTone";
import { Link } from "react-router-dom";
import { selectCartNumber } from "../../redux/cart/cartReducer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "transparent",
  },
  menuButton: {
    marginLeft: theme.spacing(1),
    fontSize: "large",
  },
  button: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "transparent",
    color: "black",
    position: "static",
  },
  link: {
    marginLeft: "10px",
    textDecoration: "none",
    color: "black",
  },
}));

function Header() {
  const classes = useStyles();
  const cartNumber = useSelector(selectCartNumber);

  return (
    <header className={classes.root}>
      <AppBar className={classes.header}>
        <Toolbar>
          <MenuBookTwoToneIcon />
          <Typography variant="h6" className={classes.title}>
            <Link to="/books" className={classes.link}>
              GetBooks
            </Link>
          </Typography>
          <div className={classes.link}>
            <Link
              className="MuiButtonBase-root MuiButton-root MuiButton-text"
              to="/contacts"
            >
              Contacts
            </Link>
          </div>
          <div className={classes.link}>
            <Link
              className="MuiButtonBase-root MuiButton-root MuiButton-contained"
              to="/cart"
            >
              {cartNumber > 0 ? cartNumber : ""} Cart
            </Link>
          </div>
          <div className={classes.link}>
            <Link
              className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
              to="/login"
            >
              Log Out
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;
