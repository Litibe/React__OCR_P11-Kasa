import { render } from '@testing-library/react';
import LogoKasa from './logoKasa.jsx';

describe('LogoKasa', () => {
    test('Should render without crash', async () => {
        render(<LogoKasa />);
    });
});
