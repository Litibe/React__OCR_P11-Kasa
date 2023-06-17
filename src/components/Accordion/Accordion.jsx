import { useEffect, useState } from 'react';

export default function Accordion(props) {
    const [show, setShow] = useState(props.show);

    const divArrowOpen = {
        transform: 'rotate(0)',
    };
    const divArrowClose = {
        transform: 'rotate(180deg)',
    };
    const handleChangeStatut = (e) => {
        setShow(!show);
    };

    useEffect(() => {
        if (show === true) {
            const accordionContent = document.getElementById(props.title);
            accordionContent.classList.remove('accordion-content-none');
        } else {
            const accordionContent = document.getElementById(props.title);
            accordionContent.classList.add('accordion-content-none');
        }
    }, [show]);
    return (
        <div className="accordion">
            <div
                className="accordion__header"
                data-testid="accordion__header"
                onClick={(e) => handleChangeStatut(e)}
            >
                <h2>{props.title}</h2>
                <button className="accordion__button">
                    <strong
                        className="fa-solid fa-chevron-up"
                        style={show === true ? divArrowOpen : divArrowClose}
                    ></strong>
                </button>
            </div>

            <div className="accordion-content" id={props.title}>
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
