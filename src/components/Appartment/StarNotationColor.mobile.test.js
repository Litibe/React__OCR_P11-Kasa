import { render } from '@testing-library/react';
import StarNotationColorMobile from './StarNotationColor.mobile.jsx';

describe('StarNotationColorMobile', () => {
    test('Should render without crash', async () => {
        render(<StarNotationColorMobile />);
    });
});
