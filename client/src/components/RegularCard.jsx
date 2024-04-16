/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

import "../styles/RegularCard.css";
import { formatDate, serialize } from "../utils";

const RegularCard = ({ _id, date, title, cover_photo, content }) => {
  return (
    <Link className="regular-card" to={`article/${_id}`}>
      <div className="regular-card-img-container">
        <img src={cover_photo} alt="The cover photo of the card" />
      </div>
      <div className="regular-card-content">
        <p className="regular-card-date">{formatDate(new Date(date))}</p>
        <p className="regular-card-title">{title}</p>
        <p className="regular-card-description">{serialize(content)}</p>
      </div>
    </Link>
  );
};

export default RegularCard;