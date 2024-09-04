import './Tag.scss';

function Tag({text}) {
    return (
        <span data-value={text} class="tag">{text}</span>

    )
}


export default Tag;