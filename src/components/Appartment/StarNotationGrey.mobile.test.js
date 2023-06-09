import { render } from '@testing-library/react';
import StarNotationGreyMobile from './StarNotationGrey.mobile.jsx';

describe('StarNotationGreyMobile', () => {
    test('Should render without crash', async () => {
        render(<StarNotationGreyMobile />);
    });
});
