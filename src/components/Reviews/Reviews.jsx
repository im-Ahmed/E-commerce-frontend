import React from "react";
import "./Review.css";
import ReviewImg from "../assets/hitler.jpg";
import star_png from "../assets/star_icon.png";
import star_dull_png from "../assets/star_dull_icon.png";

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="container">
        <div className="review-img-box">
          <img className="review-img" src={ReviewImg} alt="" />
          <p className="review-name">Adolf Hitler</p>
          <p className="review-email">hitler@gmail.com</p>
        </div>
        <div className="remarks-rating">
          <p>
            Das Unternehmen selbst ist ein sehr erfolgreiches Unternehmen. Wenn
            er mit einem Kind verheiratet sein möchte, wird ihm dieses Vergnügen
            verweigert, und es wird großen Schmerz zur Folge haben.
          </p>
          <div>
            <img src={star_png} alt="" />
            <img src={star_png} alt="" />
            <img src={star_png} alt="" />
            <img src={star_png} alt="" />
            <img src={star_dull_png} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
