import NotationAppartement from './NotationAppartement.jsx';
import { render } from '@testing-library/react';

describe('NotationAppartement', () => {
    test('Should render without crash', async () => {
        render(<NotationAppartement />);
    });
});
