import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from './About.jsx';

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
