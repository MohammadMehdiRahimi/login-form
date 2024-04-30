import React, { useState, useEffect } from "react";
import { validity } from "./validation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import style from "./Login.module.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
export default function Login() {
  /* --------------------------------- States && Use --------------------------------- */
  /* -------- States ---------- */
  const [Data, setData] = useState({
    email: "",
    password: "",
    page: "login",
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
    setData({ ...Data, [event.target.name]: event.target.value });
  };
  const focuseHandler = (event) => {
    setfocused({ ...focused, [event.target.name]: true });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("You Login successfully", "success");
    } else {
      notify("Invalid data ", "error");
      setfocused({
        email: true,
        password: true,
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
          className={style.LogContainer}
        >
          <form onSubmit={submitHandler} className={style.formContainer}>
            <div className={style.socialWrapper}>
              <h1>Login</h1>
              <div className={style.social}>
                <FaGoogle className={style.google} />
                <FaFacebook className={style.facebook} />
              </div>
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
                  autoFocus
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
            <div className={style.buttonContainer}>
              <Link to="/">
                <Button variant="outline-danger" type="submit">
                  Sign Up
                </Button>
              </Link>

              <Button variant="primary" className={style.btn}>
                Login
              </Button>
            </div>
          </form>
          <ToastContainer />
        </Col>
      </Row>
    </Container>
  );
}
