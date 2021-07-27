import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import ExposurePlus1Icon from "@material-ui/icons/ExposurePlus1";
import ExposureNeg1Icon from "@material-ui/icons/ExposureNeg1";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import {
  addToCart,
  addAmount,
  degAmount,
} from "../../../redux/cart/cartReducer";

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    marginBottom: "30px",
  },
  btnRight: {
    marginLeft: "auto!important",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
});
function CardsInCart({ id, title, coast, img, alt, text, path }) {
  const amount = useSelector(
    (state) => state.cart.cards.find((e) => e.id === id).amount
  );
  const count = useSelector(
    (state) => state.cart.cards.find((e) => e.id === id).coast
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Link to={path} className={classes.link}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <CardMedia id={id} component="img" alt={alt} height="340" image={img} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            aria-label="add +1"
            onClick={(e) => {
              dispatch(addAmount({ id, coast }));
              e.preventDefault();
            }}
          >
            <ExposurePlus1Icon />
          </IconButton>
          <Typography gutterBottom variant="h6" component="h2">
            amount: {amount}
          </Typography>
          <IconButton
            aria-label="remove -1"
            onClick={(e) => {
              // eslint-disable-next-line no-unused-expressions
              amount > 1
                ? dispatch(degAmount({ id, coast }))
                : e.preventDefault();
              e.preventDefault();
            }}
          >
            <ExposureNeg1Icon />
          </IconButton>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.btnRight}
          >
            {count}$
          </Typography>
          <IconButton
            aria-label="delete card"
            className={classes.btnRight}
            onClick={(e) => {
              dispatch(addToCart({ id }));
              e.preventDefault();
            }}
          >
            <DeleteTwoToneIcon />
          </IconButton>
        </CardActions>
      </Link>
    </Card>
  );
}

CardsInCart.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  coast: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default CardsInCart;
