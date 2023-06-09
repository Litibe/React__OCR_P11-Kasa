import { render } from '@testing-library/react';
import GridAppartement from './GridAppartement.jsx';

describe('GridAppartement', () => {
    test('Should render without crash', async () => {
        render(<GridAppartement />);
    });
});
