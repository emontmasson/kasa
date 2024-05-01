import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

function Card({data} ) {
    // permet de passer l'objet dans l'url pour éviter d'aller le chercher dans le fichier de logements
    const jsonData = JSON.stringify(data);
    return (
        <Link to={{
            pathname: `/logement/${data.id}`,
            search: `?data=${encodeURIComponent(jsonData)}`
        }}>
            <figure className="card">

                <img src={data.cover} alt={data.title} />
                <figcaption className="title">{data.title}</figcaption>
            </figure>
        </Link>
    )
}

export default Card;
