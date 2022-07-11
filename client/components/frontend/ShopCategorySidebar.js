import React from "react";

const ShopCategorySidebar = () => {
  return (
    <>
      <div className="has-background-white pt-4 px-4 pb-4 is-relative">
        <h3
          className="ml-4 m-2-touch m-8-desktop title is-size-4 is-size-5-touch has-text-centered-touch"
          data-config-id="cat-title1"
        >
          Category &nbsp;<button type="buttom" className="is-size-9">Uncheck all <i className="fa fa-check"></i></button>
        </h3>
        <div className="mb-2 is-hidden-touch">
          <label className="m-4 checkbox is-block box">
            <input className="mr-2" type="checkbox" />
            <span data-config-id="cat5-option1">Standard</span>
          </label>
          <label className="m-4 checkbox is-block box">
            <input className="mr-2" type="checkbox" />
            <span data-config-id="cat5-option2">Next day (yes!)</span>
          </label>
        </div>
      </div>
    </>
  );
};

export default ShopCategorySidebar;
