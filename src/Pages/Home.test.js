import { render } from '@testing-library/react';
import Home from './Home.jsx';
import { MemoryRouter } from 'react-router-dom';

describe('Home', () => {
    test('Should render without crash', async () => {
        const noop = () => {};
        Object.defineProperty(window, 'scrollTo', {
            value: noop,
            writable: true,
        });
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
    });
});
