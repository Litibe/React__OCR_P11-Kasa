import { render } from '@testing-library/react';
import Appartment from './Appartment.jsx';
import { MemoryRouter } from 'react-router-dom';

describe('Appartment', () => {
    test('Should render without crash', async () => {
        const noop = () => {};
        Object.defineProperty(window, 'scrollTo', {
            value: noop,
            writable: true,
        });
        render(
            <MemoryRouter>
                <Appartment />
            </MemoryRouter>
        );
    });
});
