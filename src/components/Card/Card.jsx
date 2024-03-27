import "./Card.scss";
import { Link } from "react-router-dom";

function Card({ id, title,  picture}) {

    return (
        <Link to={`/fiches/${id}`}>
            <figure className="card">
                    <img src={picture} alt={title} />
                    <figcaption className="title">{title}</figcaption>
            </figure>
        </Link>
    )
}


export default Card