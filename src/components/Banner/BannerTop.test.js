import BannerTop from './BannerTop.jsx';
import { render } from '@testing-library/react';

describe('BannerTop', () => {
    test('Should render without crash', async () => {
        render(<BannerTop />);
    });
});
