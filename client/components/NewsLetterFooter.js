import React from "react";

function NewsLetterFooter() {
  return (
    <>
      <h2>
        <strong>Subscribe to the newsletter</strong>
      </h2>
      <div className="rows">
        <div className="row is-12 my-2">
          <div className="control has-icons-left">
            <input
              className="input"
              type="email"
              name="newsletterEmail"
              placeholder="Enter the email"
            />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>
          </div>
        </div>
        <div className="row is-12 my-2">
          <div className="control">
            <div className="block">
              <a className="button is-size-7 is-link">
                <i className="fa fa-paper-plane"></i>&nbsp;Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsLetterFooter;
