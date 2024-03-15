import { useParams } from 'react-router-dom'

function LogementDetails() {
    const { idLogement } = useParams()

    return (
        <div>
            <h1>Logement 🧮</h1>
            <h2> {idLogement}</h2>
        </div>
    )
}

export default LogementDetails