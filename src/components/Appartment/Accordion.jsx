export default function Accordion(props) {
    return (
        <div className="accordion">
            <h2>{props.title}</h2>
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
