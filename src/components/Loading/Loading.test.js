import Loading from './Loading.jsx';
import { render } from '@testing-library/react';

describe('Loading', () => {
    test('Should render without crash', async () => {
        render(<Loading />);
    });
});
