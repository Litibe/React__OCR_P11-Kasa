import { Link } from 'react-router-dom';

export default function GridAppartement(props) {
    return (
        <section className="section__gridAppartement">
            {props.data !== undefined &&
                props.data.map((appart) => (
                    <Link
                        to={{
                            pathname: `/appartment/${appart.id}`,
                        }}
                        className="section__gridAppartement-cardAppart"
                        key={appart.id}
                    >
                        <img src={appart.cover} alt={appart.title} />
                        <h2>{appart.title}</h2>
                    </Link>
                ))}
        </section>
    );
}
