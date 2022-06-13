import React from "react";

function HomePageBanner() {
  return (
    <>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            The new standard in &lt;insert industry here&gt;
          </h1>
          <h2 className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h2>
        </div>
      </div>
      <div className="box cta">
        <p className="has-text-centered">
          <span className="tag is-primary">New</span> Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>
    </>
  );
}

export default HomePageBanner;
