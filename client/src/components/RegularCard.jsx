/* eslint-disable react/prop-types */
import "../styles/RegularCard.css";
import { formatDate } from "../utils";

const RegularCard = ({_id, title, date, cover_photo, content}) => {
    return (
        <a href="#" className="regular-card">
            <div className="regular-card-img-container">
                <img src= {cover_photo} alt="This is the article's cover photo" />
            </div>
            <div className="regular-card-content">
                <p className="regular-card-date">{ formatDate(new Date(date)) }</p>
                <p className="regular-card-title">{ title }</p>
                <p className="regular-card-description">{ content }</p>
            </div>
        </a>
    );
};

export default RegularCard;