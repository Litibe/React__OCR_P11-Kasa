import Header from './Header.jsx';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
    test('Should render without crash', async () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
    });
});
