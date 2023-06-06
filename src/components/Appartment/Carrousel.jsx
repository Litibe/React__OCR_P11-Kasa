import { useEffect, useState } from 'react';

export default function Carrousel(props) {
    const [indexImg, setIndexImg] = useState(0);
    const totalImg = props.appartment.pictures.length;
    const [imgToDisplay, setImgToDisplay] = useState(
        props.appartment.pictures[indexImg]
    );
    const handleChangeLeft = (e) => {
        if (indexImg === 0) {
            setIndexImg(totalImg - 1);
        } else {
            setIndexImg(indexImg - 1);
        }
    };
    const handleChangeRight = (e) => {
        if (indexImg === totalImg - 1) {
            setIndexImg(0);
        } else {
            setIndexImg(indexImg + 1);
        }
    };
    useEffect(() => {
        setImgToDisplay(props.appartment.pictures[indexImg]);
    }, [indexImg]);

    return (
        <>
            <div className="carroussel-content">
                <div>
                    <button
                        className="carroussel-button arrow-left"
                        aria-label="Boutton Flèche Gauche pour accéder à la Photo Précédente"
                        onClick={handleChangeLeft}
                    >
                        <strong className="fa-solid fa-chevron-left"></strong>
                    </button>
                    <button
                        className="carroussel-button arrow-right"
                        aria-label="Boutton Flèche Droite pour accéder à la Photo Suivante"
                        onClick={handleChangeRight}
                    >
                        <strong className="fa-solid fa-chevron-right"></strong>
                    </button>
                </div>
                <img
                    src={imgToDisplay}
                    className="appart__cover-banner"
                    alt={props.appartment.title}
                    loading="lazy"
                />
            </div>
            <div className="pagination-carroussel">
                {indexImg + 1}/{totalImg}
            </div>
        </>
    );
}
