import { render } from '@testing-library/react';
import BannerTop from './BannerTop.jsx';

describe('BannerTop', () => {
    test('Should render without crash', async () => {
        render(<BannerTop />);
    });
});
