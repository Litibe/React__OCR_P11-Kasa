export default function Accordion(props) {
    return (
        <div className="accordion">
            <div className="accordion__header">
                <h2>{props.title}</h2>
                <button className="accordion__button">
                    <strong className="fa-solid fa-chevron-down"></strong>
                </button>
            </div>

            <div className="accordion-content">
                {typeof props.listing === 'object' ? (
                    props.listing.map((element) => (
                        <span key={element}>{element}</span>
                    ))
                ) : (
                    <p>{props.listing}</p>
                )}
            </div>
        </div>
    );
}
