import React from 'react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

import GridAppartement from '../../components/Appartment/GridAppartement.jsx';

it('renders appartment data', async () => {
    // setup a DOM element as a render target
    let container = null;
    container = document.createElement('div');
    document.body.appendChild(container);

    jest.spyOn(global, 'fetch').mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve(fakedataAppart) })
    );
});
