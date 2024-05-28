import React from "react";
import Item from "../Item/Item";
import "./listview.css";

function ListView() {
  return (
    <div className="maxcontainer">
      <div className="wrapper">
        <div className="List-view-wrapper">
          <div className="list-view-header">
            <div className="subHeader listv-header">All Products</div>
            <div className=".Navigation listview-para">
              The products we provide only for you as our service are selected
              from the best products with number 1 quality in the world
            </div>
          </div>
          <div className="product-list-wrapper">
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListView;
