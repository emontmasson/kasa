import './Banner.scss';


function Banner({image, title}) {
    return (
        <div id="banner">
            <img src={image} alt="bannière" />
            <div className="centered">{title}</div>
        </div>

    )
}


export default Banner;