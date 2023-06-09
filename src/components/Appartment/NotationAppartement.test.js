import { render } from '@testing-library/react';
import NotationAppartement from './NotationAppartement.jsx';

describe('NotationAppartement', () => {
    test('Should render without crash with 5 *', async () => {
        render(<NotationAppartement rating={parseInt('5', 20)} />);
    });
    test('Should render without crash with 4 *', async () => {
        render(<NotationAppartement rating={parseInt('4', 20)} />);
    });
});
