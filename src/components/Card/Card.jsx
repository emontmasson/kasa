
import PropTypes from 'prop-types'
function Card({ label,  picture }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <span>{label}</span>
            <img src={picture} alt="freelance" height={80} width={80} />

        </div>
    )
}

/* typage des propriétés avec champs obligatoires */
Card.propTypes = {
    label: PropTypes.string,

    picture: PropTypes.string,
}


export default Card