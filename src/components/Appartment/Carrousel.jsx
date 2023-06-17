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
                {totalImg > 2 && (
                    <>
                        <div className="carroussel__navigation">
                            <button
                                className="carroussel__navigation-button arrow-left"
                                aria-label="Boutton Flèche Gauche pour accéder à la Photo Précédente"
                                onClick={handleChangeLeft}
                                data-testid="carroussel__navigation-button-left"
                            >
                                <strong className="fa-solid fa-chevron-left"></strong>
                            </button>
                            <button
                                className="carroussel__navigation-button arrow-right"
                                aria-label="Boutton Flèche Droite pour accéder à la Photo Suivante"
                                onClick={handleChangeRight}
                                data-testid="carroussel__navigation-button-right"
                            >
                                <strong className="fa-solid fa-chevron-right"></strong>
                            </button>
                        </div>
                        <span className="carroussel__pagination">
                            {indexImg + 1}/{totalImg}
                        </span>{' '}
                    </>
                )}
                <img
                    src={imgToDisplay}
                    className="carroussel__cover"
                    alt={props.appartment.title}
                    loading="lazy"
                />
            </div>
        </>
    );
}
