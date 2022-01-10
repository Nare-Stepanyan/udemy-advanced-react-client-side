import React from "react";
import { reduxForm, Field } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin } from "../../actions";

const Signin = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const onSubmit = (formProps) => {
    dispatch(
      signin(formProps, () => {
        navigate("/feature");
      })
    );
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label>Email</label>
        <Field name="email" type="text" component="input" autoComplete="none" />
      </fieldset>
      <fieldset>
        <label>Password</label>
        <Field
          name="password"
          type="password"
          component="input"
          autoComplete="none"
        />
      </fieldset>
      <div>{errorMessage}</div>
      <button>Sign in!</button>
    </form>
  );
};

export default reduxForm({ form: "signin" })(Signin);
