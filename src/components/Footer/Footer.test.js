import { render } from '@testing-library/react';
import Footer from './Footer.jsx';

describe('Footer', () => {
    test('Should render without crash', async () => {
        render(<Footer />);
    });
});
