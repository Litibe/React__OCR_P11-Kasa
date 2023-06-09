import { render } from '@testing-library/react';
import StarNotationGrey from './StarNotationGrey.jsx';

describe('StarNotationGrey', () => {
    test('Should render without crash', async () => {
        render(<StarNotationGrey />);
    });
});
