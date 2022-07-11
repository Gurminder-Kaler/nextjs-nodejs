import FrontEndLayout from "@/components/frontend/FrontEndLayout";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { registerAction } from "@/store/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { GET_ERRORS } from "@/store/types";
import { registerValidator } from "@/validations/registerValidator";

const register = () => {
  const formState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "CUSTOMER",
  };

  const { auth, error } = useSelector((state) => state);
  console.log('UTH ERROR', error);
  const { asPath, push } = useRouter();

  useEffect(() => {
    //middleware auth
    console.log("auth AUTH login index", auth);
    if (auth.isAuthenticated == true) {
      push("/");
    }
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  }, [asPath, auth]);

  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const dispatch = useDispatch();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const toggleConfirmPassword = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const [form, setForm] = useState(formState);

  const onSubmit = async () => {
    const hasError = registerValidator(form, dispatch);
    console.log("sending data from login page : ", JSON.stringify(form));
    console.log('errorrrrr', hasError);
    if (!hasError) registerAction(form, push, dispatch);
  };

  const handleFirstNameChange = (e) => {
    setForm({ ...form, firstName: e.target.value });
  };

  const handleLastNameChange = (e) => {
    setForm({ ...form, lastName: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setForm({ ...form, password: e.target.value });
  };

  const handleConfirmPasswordChange = (e) => {
    setForm({ ...form, confirmPassword: e.target.value });
  };

  const handleEmailChange = (e) => {
    setForm({ ...form, email: e.target.value });
  };

  return (
    <FrontEndLayout>
      <div className="container-fluid my-5 mt-5 mx-5 px-5">
        <div className="columns">
          <div className="column is-4 is-offset-4 box">
            <h2 className="title is-2 is-capitalized">Register</h2>
            <form method="post">
              <div className="field">
                <label
                  htmlFor="firstName"
                  className="label is-size-4 has-text-weight-light"
                ></label>
                <div className="columns">
                  <div className="column is-12">
                    <div className="control has-icons-left">
                      <input
                        type="firstName"
                        name="firstName"
                        id="firstName"
                        className={
                          error && error.firstName ? "is-danger input" : "input"
                        }
                        placeholder="Enter first name"
                        value={form.firstName}
                        onChange={handleFirstNameChange}
                      />
                      <span className="icon is-left">
                        <i className="fa fa-user"></i>
                      </span>
                      {error && error.firstName ? (
                        <span className="has-text-danger">
                          {error.firstName}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="field">
                <label
                  htmlFor="lastName"
                  className="label is-size-4 has-text-weight-light"
                ></label>
                <div className="columns">
                  <div className="column is-12">
                    <div className="control has-icons-left">
                      <input
                        type="lastName"
                        name="lastName"
                        id="lastName"
                        className={
                          error && error.lastName ? "is-danger input" : "input"
                        }
                        placeholder="Enter last name"
                        value={form.lastName}
                        onChange={handleLastNameChange}
                      />
                      <span className="icon is-left">
                        <i className="fa fa-user"></i>
                      </span>
                      {error && error.lastName ? (
                        <span className="has-text-danger">
                          {error.lastName}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="field">
                <label
                  htmlFor="email"
                  className="label is-size-4 has-text-weight-light"
                ></label>
                <div className="columns">
                  <div className="column is-12">
                    <div className="control has-icons-left">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className={
                          error && error.email ? "is-danger input" : "input"
                        }
                        placeholder="Enter email"
                        value={form.email}
                        onChange={handleEmailChange}
                      />
                      <span className="icon is-left">
                        <i className="fa fa-envelope"></i>
                      </span>
                      {error && error.email ? (
                        <span className="has-text-danger">{error.email}</span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="field">
                <label
                  htmlFor="password"
                  className="label is-size-4 has-text-weight-light"
                ></label>

                <div className="columns">
                  <div className="column is-10">
                    <div className="control has-icons-left">
                      <input
                        type={passwordShown ? "text" : "password"}
                        name="password"
                        id="password"
                        className={
                          error && (error.password || error.confirmPassword)
                            ? "is-danger input"
                            : "input"
                        }
                        placeholder="Enter password"
                        value={form.password}
                        onChange={handlePasswordChange}
                      />
                      <span className="icon is-left">
                        <i
                          className={
                            passwordShown ? "fa fa-eye-slash" : "fa fa-eye"
                          }
                        ></i>
                      </span>
                      {error && error.password ? (
                        <span className="has-text-danger">
                          {error.password}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="column is-1">
                    <button
                      type="button"
                      className="mt-1 button is-dark is-size-7"
                      id="showPassword"
                      onClick={togglePassword}
                    >
                      <i
                        className={
                          passwordShown ? "fa fa-eye-slash" : "fa fa-eye"
                        }
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="field">
                <label
                  htmlFor="confirmPassword"
                  className="label is-size-4 has-text-weight-light"
                ></label>

                <div className="columns">
                  <div className="column is-10">
                    <div className="control has-icons-left">
                      <input
                        type={confirmPasswordShown ? "text" : "password"}
                        name="confirmPassword"
                        id="confirmPassword"
                        className={
                          error && (error.password || error.confirmPassword)
                            ? "is-danger input"
                            : "input"
                        }
                        placeholder="Enter the password for confirmation"
                        value={form.confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                      <span className="icon is-left">
                        <i
                          className={
                            confirmPasswordShown
                              ? "fa fa-eye-slash"
                              : "fa fa-eye"
                          }
                        ></i>
                      </span>

                      {error && error.confirmPassword ? (
                        <span className="has-text-danger">
                          {error.confirmPassword}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="column is-1">
                    <button
                      type="button"
                      className="mt-1 button is-dark is-size-7"
                      id="showConfirmPassword"
                      onClick={toggleConfirmPassword}
                    >
                      <i
                        className={
                          confirmPasswordShown ? "fa fa-eye-slash" : "fa fa-eye"
                        }
                      ></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="columns">
                <div className="column is-12">
                  <button
                    type="button"
                    onClick={() => onSubmit()}
                    className="button is-success is-size-6 is-pulled-left"
                  >
                    Register
                  </button>
                  <Link href="/login">
                    <a className="button is-dark is-size-6 is-pulled-right">
                      Already a member? Login Now!
                    </a>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </FrontEndLayout>
  );
};

export default register;
