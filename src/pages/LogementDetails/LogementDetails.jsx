
import { useParams } from 'react-router-dom';
import './LogementsDetails.scss';
import React from "react";

import Tag from '../../components/Tag/Tag';
import Collapse from "../../components/Collapse/Collapse";
import useDataFetching from "../../components/UseDataFetching/UseDataFetching";
import Carroussel from "../../components/Carroussel/Carroussel";
import StarRating from "../../components/StarRating/StarRating";
import Profile from "../../components/Profile/Profile";


function LogementDetails() {

    const param = useParams();

    
    const { data, isLoading, error } = useDataFetching('/data/logements.json');

    // Si une erreur survient, affichez le message d'erreur
    if (error) {
        return <div>Il y a eu une erreur lors du chargement des données</div>;
    }

    // Si les données sont encore en cours de chargement, affichez un message de chargement
    if (isLoading) {
        return <div>Chargement...</div>;
    }
    let logement = data.find((logementData) => logementData.id === param.idLogement);



    // Utilisez les données du logement trouvé
    return (
        <main id="logementDetailsMain">
            <Carroussel images={logement.pictures} />
            <div className="partieHaute">
                <div className="informationLogement">
                    <h1>{logement.title}</h1>
                    <h2>{logement.location}</h2>
                </div>

                <Profile alt={logement.host.name} size={90} src={logement.host.picture} name={logement.host.name} />
            </div>
            <div className="stickers">
                {logement.tags && logement.tags.length > 0 && logement.tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                ))}
                <StarRating totalStars={5} rating={logement.rating} />
            </div>

            <div id="detailsLogement">
                <Collapse title="Description" content={logement.description} />
                <Collapse title="Equipements" content={
                    <ul>
                        {
                            logement.equipments && logement.equipments.length > 0 && logement.equipments.map((equipment) => (
                                <li key={equipment}>{equipment}</li>
                            ))
                        }
                    </ul>
                }
                />

            </div>
        </main>
    );
}

export default LogementDetails