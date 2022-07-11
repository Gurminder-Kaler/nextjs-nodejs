import React from "react";
import FrontEndLayout from "@/components/frontend/FrontEndLayout";
import ShopCategorySidebar from "@/components/frontend/ShopCategorySidebar";
import ShopProductGrid from "@/components/frontend/ShopProductGrid";

const Shop = () => {
  return (
    <FrontEndLayout>
      <section className="section has-background-light is-clipped">
        <div className="container">
          <div className="columns has-background-white">
            <div className="column is-4">
              <h3 className="title pt-4 px-4 pb-4 is-relative">Discover our products</h3>
            </div>
            <div className="column is-5">
              <div className="pt-4 px-4 pb-4 is-relative">
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Search your product here..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="m-20 columns is-multiline">
            <div className="column is-3-desktop is-3-tablet mb-3">
              <ShopCategorySidebar />
            </div>
            <div className="column is-9-desktop is-9-tablet">
              <ShopProductGrid />
            </div>
          </div>
        </div>
      </section>
    </FrontEndLayout>
  );
};
export default Shop;
