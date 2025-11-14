import './Footer.scss';


function Footer({image, title}) {
    return (
        <footer>
            <img src={image} alt="Image du footer" />
            <div className="centered">{title}</div>

        </footer>

    )
}


export default Footer;