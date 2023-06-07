import Accordion from './Accordion.jsx';
import { render } from '@testing-library/react';

describe('Accordion', () => {
    test('Should render without crash', async () => {
        render(<Accordion />);
    });
});
