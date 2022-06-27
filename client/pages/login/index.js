import FrontEndLayout from "@/components/FrontEndLayout";
import { useState } from "react";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

import { loginAction } from "@/actions/authAction";

const contact = () => {
  const formState = {
    email: "",
    password: "",
  };
  const [form, setForm] = useState(formState);

  const onSubmit = () => {
    console.log("sending data from login page : ", JSON.stringify(form));
    loginAction(form);
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
            <Link href="/api/auth/signin">
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
            <hr />

            <form method="post" className="box">
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

export default contact;
