import React, { useState } from "react";
import { subscribeToNewsletterAction } from "@/store/actions/newsletterAction";

function NewsLetterFooter() {
  const initialState = {
    newsletterEmail: null,
  };
  const [newsletterForm, setNewsletterForm] = useState(initialState);
  const submitForm = () => {
    console.log(" Submit Form ", newsletterForm);
    subscribeToNewsletterAction(newsletterForm);
  };
  const handleNewsletterEmailChange = (e) => {
    setNewsletterForm({ ...newsletterForm, newsletterEmail: e.target.value });
  };
  return (
    <>
      <h2>
        <strong>Subscribe to the newsletter</strong>
      </h2>
      <div className="rows">
        <form>
          <div className="row is-12 my-2">
            <div className="control has-icons-left">
              <input
                className="input"
                type="email"
                name="newsletterEmail"
                placeholder="Enter the email"
                value={newsletterForm.newsletterEmail}
                onChange={handleNewsletterEmailChange}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-envelope"></i>
              </span>
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
    </>
  );
}

export default NewsLetterFooter;
