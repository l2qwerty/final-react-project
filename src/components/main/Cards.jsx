import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import StarTwoToneIcon from "@material-ui/icons/StarTwoTone";
import ShareTwoToneIcon from "@material-ui/icons/ShareTwoTone";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import { PropTypes } from "prop-types";
import { addToCart } from "../../redux/cart/cartReducer";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
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
function Cards({ id, title, img, alt, text, path }) {
  const cards = useSelector((state) => state.cart.cards);
  const check = cards.some((item) => item.id === id);
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Link to={path} className={classes.link}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <CardMedia id={id} component="img" alt={alt} height="400" image={img} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            aria-label="add to favorites"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <StarTwoToneIcon />
          </IconButton>
          <IconButton
            aria-label="share"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <ShareTwoToneIcon />
          </IconButton>
          <IconButton
            color={check ? "secondary" : "primary"}
            aria-label="buy"
            className={classes.btnRight}
            onClick={(e) => {
              dispatch(addToCart({ id }));
              e.preventDefault();
            }}
          >
            <ShoppingCartTwoToneIcon />
          </IconButton>
        </CardActions>
      </Link>
    </Card>
  );
}

Cards.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Cards;
