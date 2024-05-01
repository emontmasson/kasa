import {  useLocation } from 'react-router-dom'


import React from "react";

function LogementDetails() {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const jsonData = params.get('data');

    // Vérifiez si jsonData est null ou vide
    if (!jsonData) {
        return <div>Données indisponibles</div>;
    }

    // Essayez de décoder et de parser les données JSON
    let data;
    try {
        data = JSON.parse(decodeURIComponent(jsonData));
    } catch (error) {
        console.error("Erreur lors de l'analyse des données JSON :", error);
        return <div>Erreur lors de l'analyse des données JSON</div>;
    }

    // Utilisez les données du logement trouvé
    return (
        <div>
            <h1>Logement {data.id}</h1>
            <h2>{data.title}</h2>
            {/* Affichez les autres détails du logement ici */}
        </div>
    );
}

export default LogementDetails