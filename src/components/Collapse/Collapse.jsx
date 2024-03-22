import './Collapse.scss';

import { useEffect,useState } from 'react';

function Collapse({ title,  content }) {

    // on met par défaut le collapse fermé
    const [isOpen, setIsOpen] = useState(false);

    // onClick, on met à jour l'état à l'inverse de ce qu'il est, soit true ou false
    // className, on détermine les classes css à mettre selon l'état de isOpen
    return (
        <div>
            <button type="button" onClick={() => setIsOpen(!isOpen)} className="collapsible arrow">{title}<i className={"arrow " + (isOpen ? "down" : "up")}></i></button>
            <div className={"content " + (isOpen ? "display" : "")}>
                <p>{content}</p>
            </div>
        </div>
    )
}



export default Collapse