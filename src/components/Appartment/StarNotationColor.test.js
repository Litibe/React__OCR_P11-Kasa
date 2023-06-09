import { render } from '@testing-library/react';
import StarNotationColor from './StarNotationColor.jsx';

describe('StarNotationColor', () => {
    test('Should render without crash', async () => {
        render(<StarNotationColor />);
    });
});
