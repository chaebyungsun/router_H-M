import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="product_card" onClick={showDetail}>
      <img className="product_img" src={item?.img} alt="" />
      <div className="product_choice">
        {item?.choice == true ? "Conscious choice" : ""}
      </div>
      <div className="product_title">{item?.title}</div>
      <div className="product_price">₩{item?.price}</div>
      <div className="product_new">{item?.new == true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
