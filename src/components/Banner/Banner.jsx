import React from "react";
import "./Banner.scss";

const Banner = ({ title, src }) => {
  return (
    <div className="Banner">
      {title && <h1 className="banner_title">{title}</h1>}
      <img src={src} alt="banniere-kasa" className="banner_img" />
    </div>
  );
};

export default Banner;