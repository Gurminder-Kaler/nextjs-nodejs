import FrontEndLayout from "@/components/frontend/FrontEndLayout";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { loginAction } from "@/store/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { GET_ERRORS } from "@/store/types";
import { loginValidator } from "@/validations/loginValidator";

const login = () => {
  const formState = {
    email: "",
    password: "",
  };

  const { auth, error } = useSelector((state) => state);
  const { asPath, push } = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    //middleware auth
    if (auth.isAuthenticated == true) {
      push("/");
    }
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  }, [asPath, auth]);

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const [form, setForm] = useState(formState);

  const onSubmit = () => {
    console.log("sending data from login page : ", JSON.stringify(form));
    const hasError = loginValidator(form, dispatch);
    if (!hasError) loginAction(form, push, dispatch);
    // signIn(JSON.stringify(form));
  };

  const handlePasswordChange = (e) => {
    setForm({ ...form, password: e.target.value });
  };

  const handleEmailChange = (e) => {
    setForm({ ...form, email: e.target.value });
  };

  return (
    <FrontEndLayout>
      <div className="container-fluid my-5 mt-5 mx-5 px-5">
        <div className="columns">
          <div className="column is-4 is-offset-4">
            {/* <Link href="/api/auth/signin">
              <a
                className="btn btn-outline-dark box"
                onClick={(e) => {
                  e.preventDefault();
                  signIn("google");
                }}
                role="button"
              >
                <div className="columns">
                  <div className="column is-2">
                    <img
                      width="20px"
                      alt="Google sign-in"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                    />
                  </div>
                  <div className="column is-10">Login with Google</div>
                </div>
              </a>
            </Link> 
            <hr />*/}
            {/* <div className="column is-4 is-offset-3">
              <button
                type="button"
                onClick={onSubmit}
                className="button is-success is-size-6"
              >
                Login with Credentials
              </button>
            </div> */}
            {/* <div className="column is-4 is-offset-3">
              <Link href="/register">
                <a className="button is-dark is-size-6">New? Register Now!</a>
              </Link>
            </div> */}

            <form className="box">
              <h2 className="title is-2 is-capitalized">Login</h2>
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
                        placeholder="Email"
                        value={form.email}
                        onChange={handleEmailChange}
                      />
                      <span className="icon is-left">
                        <i className="fa fa-envelope"></i>
                      </span>
                      {error ? (
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
                          error && error.password ? "is-danger input" : "input"
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
                {error ? (
                  <span className="has-text-danger">{error.password}</span>
                ) : (
                  ""
                )}
              </div>

              <div className="columns">
                <div className="column is-12">
                  <button
                    type="button"
                    onClick={onSubmit}
                    className="button is-success is-pulled-left is-size-6"
                  >
                    Login
                  </button>
                  <Link href="/register">
                    <a className="button is-dark is-size-6 is-pulled-right">
                      New? Register Now!
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

export default login;
