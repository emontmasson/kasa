


import Banner from "../../components/Banner/Banner";
import BannerImage from "../../assets/images/banner-index.png"
import Card from "../../components/Card/Card";
import "./Homs.scss";
import { useEffect,useState } from 'react';


function Home() {
    const getDataHousing=()=>{
        fetch('/data/logements.json'
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
        getDataHousing()
    },[])

    const [dataHousing,setData]=useState([]);


    return (

      <main>
          <Banner image={BannerImage} title="Chez vous, partout et ailleurs" />
          <section id="home">
          {
              dataHousing && dataHousing.length>0 && dataHousing.map((housting)=><Card key={housting.id} id="{housting.id}" title={housting.title} picture={housting.cover} />)
          }
          </section>
      </main>
  )
}

export default Home;
