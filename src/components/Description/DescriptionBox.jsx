import React, { useState } from "react";
import "./DescriptionBox.css";
import Reviews from "../Reviews/Reviews";
const DescriptionBox = () => {
  const [description, setDescription] = useState("desc");
  return (
    <div className="box">
      <div className="navigator">
        <div
          className={`nav-box ${description === "desc" ? "active" : "fade"}`}
          onClick={() => {
            setDescription("desc");
          }}
        >
          Description
        </div>
        <div
          className={`nav-box ${
            description === "reviews" ? "active" : "fade"
          } `}
          onClick={() => {
            setDescription("reviews");
          }}
        >
          Review (12)
        </div>
      </div>
      <div className="description-box">
        {description === "desc" ? (
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis, adipisci aspernatur similique ea dolorum consectetur,
              voluptas aliquam nulla autem distinctio, voluptate inventore?
              Nulla magni, deserunt impedit vel placeat commodi vitae?
            </p>
          </div>
        ) : (
          <Reviews />
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
