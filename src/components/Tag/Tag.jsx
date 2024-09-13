import './Tag.scss';

function Tag({text}) {
    return (
        <span data-value={text} className="tag">{text}</span>

    )
}


export default Tag;