import React, { useState, useEffect } from "react";
import { subscribeToNewsletterAction } from "@/store/actions/newsletterAction";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { GET_ERRORS } from "@/store/types";

export const NewsLetterFooter = () => {
  const initialState = {
    newsletterEmail: "",
  };
  const [newsletterForm, setNewsletterForm] = useState(initialState);
  const { auth, error } = useSelector((state) => state);
  const { asPath } = useRouter();
  const dispatch = useDispatch();

  // let userCaptchaValue = document.getElementById("user_captcha_input").value;

  useEffect(() => {
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  }, [asPath, auth]);
  const submitForm = () => {
    console.log(" Submit Form ", newsletterForm);
    subscribeToNewsletterAction(newsletterForm, dispatch);
  };
  const handleNewsletterEmailChange = (e) => {
    setNewsletterForm({ ...newsletterForm, newsletterEmail: e.target.value });
  };
  return (
    <div className="is-dark">
      <h2>
        <strong>Subscribe to the newsletter</strong>
      </h2>
      <div className="rows">
        <form>
          <div className="row is-12 my-2">
            <div className="control has-icons-left">
              <input
                className={
                  error && error.newsletterEmail ? "is-danger input" : "input"
                }
                type="email"
                name="newsletterEmail"
                placeholder="Enter the email"
                value={newsletterForm.newsletterEmail}
                onChange={handleNewsletterEmailChange}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-envelope"></i>
              </span>
              {error ? (
                <span className="has-text-danger">{error.newsletterEmail}</span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row is-12 my-2">
            <div className="control">
              <div className="block">
                <a className="button is-size-7 is-link" onClick={submitForm}>
                  <i className="fa fa-paper-plane"></i>&nbsp;Subscribe
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetterFooter;
