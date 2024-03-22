
import Banner from "../../components/Banner/Banner";
import BannerImage from "../../assets/images/banner-about.png"
import Collapse from "../../components/Collapse/Collapse";

function About() {
    return (

        <main>
            <Banner image={BannerImage}  />
            <Collapse title="test" content="Lorem ipsum dolor sit amet, consectetur adipisicing orem ipsum dolor sit amet, consectetur adipisicing orem ipsum dolor sit amet, consectetur adipisicing orem ipsum dolor sit amet, consectetur adipisicing orem ipsum dolor sit amet, consectetur adipisicing orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
        </main>

    )
}

export default About;