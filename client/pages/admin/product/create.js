import FrontEndLayout from "@/components/frontend/FrontEndLayout";
import { useState, useEffect } from "react";

export const create = () => {
  return (
    <FrontEndLayout>
      <div className="container-fluid my-5 mt-5 mx-5 px-5">
        <div className="columns">
          <div className="column is-4 is-offset-4 box">
            <h2 className="title is-2 is-capitalized">Create Product</h2>
            <form method="post">
              <div className="field">
                <label
                  htmlFor="title"
                  className="label is-size-4 has-text-weight-light"
                >Title</label>
                <div className="columns">
                  <div className="column is-12">
                    <div className="control has-icons-left">
                      <input
                        type="title"
                        name="title"
                        id="title"
                        className={
                          error && error.title ? "is-danger input" : "input"
                        }
                        placeholder="Enter first name"
                        value={form.title}
                        onChange={handleTitleChange}
                      />
                      <span className="icon is-left">
                        <i className="fa fa-user"></i>
                      </span>
                      {error && error.title ? (
                        <span className="has-text-danger">
                          {error.title}
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
                  htmlFor="price"
                  className="label is-size-4 has-text-weight-light"
                ></label>
                <div className="columns">
                  <div className="column is-12">
                    <div className="control has-icons-left">
                      <input
                        type="price"
                        name="price"
                        id="price"
                        className={
                          error && error.price ? "is-danger input" : "input"
                        }
                        placeholder="Enter price in $"
                        value={form.price}
                        onChange={handlepriceChange}
                      />
                      <span className="icon is-left">
                        <i className="fa fa-user"></i>
                      </span>
                      {error && error.price ? (
                        <span className="has-text-danger">
                          {error.price}
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
