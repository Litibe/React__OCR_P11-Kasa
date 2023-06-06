import StarNotationColor from './StarNotationColor.jsx';
import StarNotationGrey from './StarNotationGrey.jsx';

export default function NotationAppartement(props) {
    const ratingElement = [];
    for (let i = 0; i < 5; i += 1) {
        if (i < props.rating) {
            ratingElement.push(true);
        } else {
            ratingElement.push(false);
        }
    }
    return (
        <div className="notation">
            {ratingElement.map((element, index) =>
                element === true ? (
                    <StarNotationColor key={index} />
                ) : (
                    <StarNotationGrey key={index} />
                )
            )}
        </div>
    );
}
