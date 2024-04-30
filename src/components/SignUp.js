import React, { useState, useEffect } from "react";
import { validity } from "./validation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import style from "./SignUp.module.css";

export default function SignUp() {
  /* --------------------------------- States && Use --------------------------------- */
  /* -------- States ---------- */

  const [Data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    isActived: false,
    page: "signup",
  });
  const [errors, setErrors] = useState({});
  const [focused, setfocused] = useState({});
  /* -------- Use ---------- */
  useEffect(() => {
    const error = validity(Data);
    setErrors(error);
  }, [Data]);
  /* -------------------------------- Functions -------------------------------- */
  const changeHandler = (event) => {
    if (event.target.name === "isActived") {
      setData({ ...Data, isActived: event.target.checked });
    } else {
      setData({ ...Data, [event.target.name]: event.target.value });
    }
  };
  const focuseHandler = (event) => {
    setfocused({ ...focused, [event.target.name]: true });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("You signed in successfully", "success");
    } else {
      notify("Invalid data ", "error");
      setfocused({
        name: true,
        email: true,
        password: true,
        confirmpassword: true,
        isActived: true,
      });
    }
  };

  /* ----------------------------------- jsx ---------------------------------- */
  return (
    <Container>
      <Row>
        <Col
          lg={{ span: 4, offset: 4 }}
          sm={{ span: 6, offset: 3 }}
          xs={{ span: 10, offset: 1 }}
          className={style.SignContainer}
        >
          <form onSubmit={submitHandler} className={style.formContainer}>
            <h1>Sign in</h1>
            <div className={style.formField}>
              <div className={style.inputField}>
                <input
                  type="text"
                  className={errors.name && focused.name && style.uncomplete}
                  name="name"
                  value={Data.name}
                  onChange={changeHandler}
                  onFocus={focuseHandler}
                  placeholder=""
                  autoFocus
                  id="nameInput"
                />
                <label for="nameInput">Name</label>
              </div>
              {errors.name && focused.name && <p>{errors.name}</p>}
            </div>
            <div className={style.formField}>
              <div className={style.inputField}>
                <input
                  className={errors.email && focused.email && style.uncomplete}
                  type="email"
                  name="email"
                  value={Data.email}
                  onChange={changeHandler}
                  onFocus={focuseHandler}
                  placeholder=""
                  id="email"
                />
                <label for="email">Email</label>
              </div>
              {errors.email && focused.email && <p>{errors.email}</p>}
            </div>
            <div className={style.formField}>
              <div className={style.inputField}>
                <input
                  className={
                    errors.password && focused.password && style.uncomplete
                  }
                  type="password"
                  name="password"
                  value={Data.password}
                  onChange={changeHandler}
                  onFocus={focuseHandler}
                  placeholder=""
                  id="password"
                />
                <label for="password">Password</label>
              </div>
              {errors.password && focused.password && <p>{errors.password}</p>}
            </div>
            <div className={style.formField}>
              <div className={style.inputField}>
                <input
                  className={
                    errors.confirmpassword &&
                    focused.confirmpassword &&
                    style.uncomplete
                  }
                  type="password"
                  name="confirmpassword"
                  value={Data.confirmpassword}
                  onChange={changeHandler}
                  onFocus={focuseHandler}
                  placeholder=""
                  id="confirmpass"
                />
                <label for="confirmpass">Confirm Password </label>
              </div>
              {errors.confirmpassword && focused.confirmpassword && (
                <p className={style.confirmPassword}>
                  {errors.confirmpassword}
                </p>
              )}
            </div>
            <div className={style.signInCheckBoxContainer}>
              <div className={style.signInCheckBox}>
                <label> I accept all services</label>
                <input
                  className={
                    errors.isActived && focused.isActived && style.uncomplete
                  }
                  type="checkbox"
                  name="isActived"
                  value={Data.isActived}
                  onChange={changeHandler}
                  onFocus={focuseHandler}
                />
              </div>
              {errors.isActived && focused.isActived && (
                <p>{errors.isActived}</p>
              )}
            </div>

            <div className={style.buttonContainer}>
              <Link to="/login">
                <Button variant="outline-secondary" className={style.btn}>Login</Button>
              </Link>
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </div>
          </form>
          <ToastContainer />
        </Col>
      </Row>
    </Container>
  );
}
