import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router, Routes, Route } from 'react-router-dom';
import Appartment from './Appartment.jsx';

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useParams: jest.fn(),
}));

describe('Appartment', () => {
    test('Should render without crash', async () => {
        const noop = () => {};
        Object.defineProperty(window, 'scrollTo', {
            value: noop,
            writable: true,
        });
        const route = '/appartment/b9123946';
        const history = createMemoryHistory();
        history.push(route);

        render(
            <Router location={history.location} navigator={history}>
                <Routes>
                    <Route
                        path="/appartment/:idAppartment"
                        element={<Appartment />}
                    />
                </Routes>
            </Router>
        );
    });
});
