import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exculsive offers on your Email</h1>
      <p>Subscribe our newsletter and stay updated</p>
      <div className="details">
        <input type="email" placeholder="Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
