import GridAppartement from './GridAppartement.jsx';
import { render } from '@testing-library/react';

describe('GridAppartement', () => {
    test('Should render without crash', async () => {
        render(<GridAppartement />);
    });
});
