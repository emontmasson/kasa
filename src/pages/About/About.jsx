
import Banner from "../../components/Banner/Banner";
import BannerImage from "../../assets/images/banner-about.png"
import Collapse from "../../components/Collapse/Collapse";
import React from 'react';
import UseDataFetching from "../../components/UseDataFetching/UseDataFetching";




function About() {

    const { data, isLoading, error } = UseDataFetching('./data/about.json');

    // Si une erreur survient, affichez le message d'erreur
    if (error) {
        return <div>Il y a eu une erreur lors du chargement des données</div>;
    }

    // Si les données sont encore en cours de chargement, affichez un message de chargement
    if (isLoading) {
        return <div>Chargement...</div>;
    }


    return (

        <main>
            <Banner image={BannerImage}  />
            {
                data && data.length>0 && data.map((info)=><Collapse title={info.title} content={info.content} />)
            }

        </main>

    )
}

export default About;