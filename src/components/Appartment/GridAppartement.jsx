export default function GridAppartement(props) {
    return (
        <section className="section__gridAppartement">
            {props.data !== undefined &&
                props.data.map((appart) => (
                    <div
                        key={appart.id}
                        className="section__gridAppartement-cardAppart"
                    >
                        <img src={appart.cover} alt={appart.title} />
                        <h2>{appart.title}</h2>
                    </div>
                ))}
        </section>
    );
}
