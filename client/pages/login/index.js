import FrontEndLayout from "@/components/frontend/FrontEndLayout";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { loginAction } from "@/store/actions/authAction";
import { useDispatch, useSelector } from "react-redux";

const login = () => {
  const formState = {
    email: "",
    password: "",
  };
  const [form, setForm] = useState(formState);
  const { asPath, push } = useRouter();
  const { auth } = useSelector((state) => state);
  useEffect(() => {
    //middleware auth
    console.log("auth AUTH login index", auth);
    if (auth.isAuthenticated == true) {
      push("/");
    }
  }, [asPath, auth]);

  const dispatch = useDispatch();
  const onSubmit = () => {
    console.log("sending data from login page : ", JSON.stringify(form));
    loginAction(form, push, dispatch);
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
            </Link> */}
            <hr />
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
                        className="input"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleEmailChange}
                      />
                      <span className="icon is-left">
                        <i className="fa fa-envelope"></i>
                      </span>
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
                  <div className="column is-12">
                    <div className="control has-icons-left">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="input"
                        placeholder="password"
                        value={form.password}
                        onChange={handlePasswordChange}
                      />
                      <span className="icon is-left">
                        <i className="fa fa-eye"></i>
                      </span>
                    </div>
                  </div>
                </div>
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
