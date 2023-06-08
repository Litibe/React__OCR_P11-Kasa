import { useEffect, useState } from 'react';

import StarNotationColor from './StarNotationColor.jsx';
import StarNotationGrey from './StarNotationGrey.jsx';
import StarNotationColorMobile from './StarNotationColor.mobile.jsx';
import StarNotationGreyMobile from './StarNotationGrey.mobile.jsx';

export default function NotationAppartement(props) {
    const ratingElement = [];
    for (let i = 0; i < 5; i += 1) {
        if (i < props.rating) {
            ratingElement.push(true);
        } else {
            ratingElement.push(false);
        }
    }
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight,
    });
    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', setDimension);

        return () => {
            window.removeEventListener('resize', setDimension);
        };
    }, [screenSize]);
    return (
        <div className="notation">
            {screenSize.dynamicWidth > 767
                ? ratingElement.map((element, index) =>
                      element === true ? (
                          <StarNotationColor key={index} />
                      ) : (
                          <StarNotationGrey key={index} />
                      )
                  )
                : ratingElement.map((element, index) =>
                      element === true ? (
                          <StarNotationColorMobile key={index} />
                      ) : (
                          <StarNotationGreyMobile key={index} />
                      )
                  )}
        </div>
    );
}
