import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import Service from "../../../services/http-service";
import { clearCart } from "../../../redux/cart/cartReducer";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  form: {
    width: "50%",
    margin: "0 auto",
  },
}));

const validationSchema = yup.object({
  city: yup
    .string("Enter your city")
    .required("City is required")
    .matches(/^[a-z]+$/, "Wrong city name!"),
  address: yup.string("Enter your address").required("Address is required"),
  phone: yup
    .string("Enter your phone humber")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Phone number should be of minimum 10 characters length")
    .required("Phone number is required"),
});

function Checkout() {
  const date = moment().format("YYYY-MM-DD[T]HH:mm");
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const cards = useSelector((state) => state.cart.cards);
  const formik = useFormik({
    initialValues: {
      city: "",
      address: "",
      phone: 380,
    },
    validationSchema,
    onSubmit: (values) => {
      Service.post("/cart", (values, cards)).then((res) => {
        if (res.success) {
          dispatch(clearCart());
          history.push("/books");
        }
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <TextField
        fullWidth
        id="city"
        name="city"
        label="City"
        onChange={formik.handleChange}
        error={formik.touched.city && Boolean(formik.errors.city)}
        helperText={formik.touched.city && formik.errors.city}
      />
      <TextField
        fullWidth
        id="address"
        name="address"
        label="Address"
        onChange={formik.handleChange}
        error={formik.touched.address && Boolean(formik.errors.address)}
        helperText={formik.touched.address && formik.errors.address}
      />
      <TextField
        fullWidth
        id="phone"
        name="phone"
        label="Phone number"
        value={formik.values.phone}
        onChange={formik.handleChange}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
      />
      <TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue={date}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
      </Button>
    </form>
  );
}

export default Checkout;
