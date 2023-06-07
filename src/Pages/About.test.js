import { render } from '@testing-library/react';
import About from './About.jsx';
import { MemoryRouter } from 'react-router-dom';

describe('About', () => {
    test('Should render without crash', async () => {
        const noop = () => {};
        Object.defineProperty(window, 'scrollTo', {
            value: noop,
            writable: true,
        });
        render(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );
    });
});
