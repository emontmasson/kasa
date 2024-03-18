import './Footer.scss';


function Footer({image, title}) {
    return (
        <div id="footer">
            <img src={image} alt="Image du footer" />
            <div className="centered">{title}</div>

        </div>

    )
}


export default Footer;