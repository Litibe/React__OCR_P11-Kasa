import { useEffect, useState } from 'react';

export default function Accordion(props) {
    const [show, setShow] = useState(props.show);
    const divStyleOpen = {
        padding: '30px 20px 20px 20px',
        height: '70%',
    };
    const divStyleClose = {
        padding: '0',
        height: '0',
    };
    const divArrowOpen = {
        transform: 'rotate(0)',
    };
    const divArrowClose = {
        transform: 'rotate(180deg)',
    };
    const handleChangeStatut = (e) => {
        setShow(!show);
    };
    return (
        <div className="accordion">
            <div
                className="accordion__header"
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

            <div
                className="accordion-content"
                style={show === true ? divStyleOpen : divStyleClose}
            >
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
