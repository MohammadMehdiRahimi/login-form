import React, { useState, useEffect } from "react";
import { validity } from "./LoginValidition";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import style from "./Login.module.css";
export default function Login() {
  /* --------------------------------- States && Use --------------------------------- */
  /* -------- States ---------- */
  const [Data, setData] = useState({
    email: "",
    password: "",
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
          sm={{ span: 6, offset: 3 }}
          xs={{ span: 10, offset: 1 }}
          className={style.LogContainer}
        >
          <form onSubmit={submitHandler} className={style.formContainer}>
            <h1>Login</h1>

            <div className={style.formField}>
              <label>Email:</label>
              <div>
                <input
                  className={errors.email && focused.email && style.uncomplete}
                  type="email"
                  name="email"
                  value={Data.email}
                  onChange={changeHandler}
                  onFocus={focuseHandler}
                />
                {errors.email && focused.email && <p>{errors.email}</p>}
              </div>
            </div>
            <div className={style.formField}>
              <label>Password:</label>
              <div>
                {" "}
                <input
                  className={
                    errors.password && focused.password && style.uncomplete
                  }
                  type="password"
                  name="password"
                  value={Data.password}
                  onChange={changeHandler}
                  onFocus={focuseHandler}
                />
                {errors.password && focused.password && (
                  <p>{errors.password}</p>
                )}
              </div>
            </div>

            <div className={style.buttonContainer}>
              <Button variant="primary" type="submit">
                Login
              </Button>
              <Link to="/"> Sign in</Link>
            </div>
          </form>
          <ToastContainer />
        </Col>
      </Row>
    </Container>
  );
}
