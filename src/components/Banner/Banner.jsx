import './Banner.scss';


function Banner({image, title}) {
    let divTitle;
    if(title) {
        divTitle = <div className="centered">{title}</div>;
    }
    return (
        <div id="banner">
            <img src={image} alt="bannière" />
            {divTitle}
        </div>

    )
}


export default Banner;