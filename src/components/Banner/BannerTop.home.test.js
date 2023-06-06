import BannerTopHome from './BannerTop.home.jsx';
import { render } from '@testing-library/react';

describe('BannerTopHome', () => {
    test('Should render without crash', async () => {
        render(<BannerTopHome />);
    });
});
