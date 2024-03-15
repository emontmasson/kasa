


import Banner from "../../components/Banner/Banner";
import BannerImage from "../../assets/banner-index.png"


function Home() {
  return (

      <section id="accueil">
          <Banner image={BannerImage} title="Chez vous, partout et ailleurs" />
      </section>
  )
}

export default Home;
