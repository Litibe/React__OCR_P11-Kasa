import { render } from '@testing-library/react';
import LogoKasaSmall from './logoKasaSmall.jsx';

describe('LogoKasaSmall', () => {
    test('Should render without crash', async () => {
        render(<LogoKasaSmall />);
    });
});
