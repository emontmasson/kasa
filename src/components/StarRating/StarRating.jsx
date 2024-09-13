import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./StarRating.scss"

const StarRating = ({ totalStars = 6, rating = 5 }) => {


    return (
        <div className="star-rating">

            {[...Array(totalStars)].map((_, index) => {
                return (
                    <FontAwesomeIcon
                        key={index}
                        icon={faStar}

                        className={index < rating ? "orange" : "gray"}
                    />
                );
            })}
        </div>
    );
};
export default StarRating;
