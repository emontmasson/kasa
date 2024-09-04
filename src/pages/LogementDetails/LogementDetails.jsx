
import { useParams } from 'react-router-dom';
import './LogementsDetails.scss';
import React from "react";

import Tag from '../../components/Tag/Tag';
import Collapse from "../../components/Collapse/Collapse";
import useDataFetching from "../../components/UseDataFetching/UseDataFetching";


function LogementDetails() {

    const param = useParams();

    let equipementHtml;
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

    // s'il y a des équipements pour le logement, on parcours la liste et on le met dans des balises de liste à puces
    /*if(logement.equipments.length > 0) {
        logement.equipments.forEach
    }*/

    // Utilisez les données du logement trouvé
    return (
        <main>
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
            {
                logement.tags && logement.tags.length>0 && logement.tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                ))
            }
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