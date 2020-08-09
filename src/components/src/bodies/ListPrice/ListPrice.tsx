import React from "react";
import "./ListPrice.scss";

interface props {
  placeholder?: string;
}
const ListPrice: React.FC<props> = (props) => {
  return (
    <div className="list_price">
      <div className="content_price_list">
        <div className="header_page">هدر صفحه</div>
        <div className="content_page">دیتا</div>
      </div>
    </div>
  );
};

export { ListPrice };
