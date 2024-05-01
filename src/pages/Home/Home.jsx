

import React from 'react';
import Banner from "../../components/Banner/Banner";
import BannerImage from "../../assets/images/banner-index.png"
import Card from "../../components/Card/Card";

import "./Homs.scss";

import useDataFetching from "../../components/UseDataFetching/UseDataFetching";


function Home() {

    const { data, isLoading, error } = useDataFetching('./data/logements.json');

    // Si une erreur survient, affichez le message d'erreur
    if (error) {
        return <div>Il y a eu une erreur lors du chargement des données</div>;
    }

    // Si les données sont encore en cours de chargement, affichez un message de chargement
    if (isLoading) {
        return <div>Chargement...</div>;
    }

    // Utilisez les données récupérées
    return (
        <main>
            <Banner image={BannerImage} title="Chez vous, partout et ailleurs" />
            <section id="home">
                {data && data.length>0 && data.map((housting) => (
                    <Card key={housting.id} id={housting.id} title={housting.title} picture={housting.cover} />
                ))}
            </section>
        </main>
    );




}


export default Home;
