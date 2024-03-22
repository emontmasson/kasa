
import Banner from "../../components/Banner/Banner";
import BannerImage from "../../assets/images/banner-about.png"
import Collapse from "../../components/Collapse/Collapse";
import { useEffect,useState } from 'react';


function About() {
    // récupération des données du fichiers json
    const getDataAbout=()=>{
        fetch('/data/about.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                console.log(response)
                return response.json();
            })
            .then(function(aboutJson) {
                console.log(aboutJson);
                setData(aboutJson)
            });
    }
    useEffect(()=>{
        getDataAbout()
    },[])

    const [dataAbout,setData]=useState([]);

    return (

        <main>
            <Banner image={BannerImage}  />
            {
                dataAbout && dataAbout.length>0 && dataAbout.map((info)=><Collapse title={info.title} content={info.content} />)
            }

        </main>

    )
}

export default About;