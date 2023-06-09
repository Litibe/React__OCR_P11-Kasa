import { render } from '@testing-library/react';
import LogoKasaWhiteSmall from './logoKasaWhiteSmall.jsx';

describe('LogoKasaWhiteSmall', () => {
    test('Should render without crash', async () => {
        render(<LogoKasaWhiteSmall />);
    });
});
