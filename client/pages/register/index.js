import FrontEndLayout from "@/components/FrontEndLayout";
import { useState } from "react";
import Link from "next/link";

const contact = () => {
  const formState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const toggleConfirmPassword = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const [form, setForm] = useState(formState);

  const onSubmit = () => {
    console.log("data", JSON.stringify(form));
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
      <div className="container my-5 mt-5 mx-5 px-5">
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
                        className="input"
                        placeholder="Enter first name"
                        value={form.email}
                        onChange={handleFirstNameChange}
                      />
                      <span className="icon is-left">
                        <i className="fa fa-user"></i>
                      </span>
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
                        className="input"
                        placeholder="Enter last name"
                        value={form.email}
                        onChange={handleLastNameChange}
                      />
                      <span className="icon is-left">
                        <i className="fa fa-user"></i>
                      </span>
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
                        className="input"
                        placeholder="Enter email"
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
                  <div className="column is-10">
                    <div className="control has-icons-left">
                      <input
                        type={ passwordShown ? "text" : "password" }
                        name="password"
                        id="password"
                        className="input"
                        placeholder="Enter password"
                        value={form.password}
                        onChange={handlePasswordChange}
                      />
                      <span className="icon is-left">
                        <i className="fa fa-eye"></i>
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
                      <i className="fa fa-eye"></i>
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
                        type={ confirmPasswordShown ? "text" : "password" }
                        name="confirmPassword"
                        id="confirmPassword"
                        className="input"
                        placeholder="Enter the password for confirmation"
                        value={form.confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                      <span className="icon is-left">
                        <i className="fa fa-eye"></i>
                      </span>
                    </div>
                  </div>
                  <div className="column is-1">
                    <button
                      type="button"
                      className="mt-1 button is-dark is-size-7"
                      id="showConfirmPassword"
                      onClick={toggleConfirmPassword}
                    >
                      <i className="fa fa-eye"></i>
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

export default contact;
