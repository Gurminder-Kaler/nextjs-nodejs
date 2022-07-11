import React from "react";
import FrontEndLayout from "@/components/frontend/FrontEndLayout";
import ShopCategorySidebar from "@/components/frontend/ShopCategorySidebar";
import ShopProductGrid from "@/components/frontend/ShopProductGrid";

const Shop = () => {
  return (
    <FrontEndLayout>
      <section className="section has-background-light is-clipped">
        <div className="container">
          <h2 className="title m-16 m-24-tablet">Discover our products</h2>
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
