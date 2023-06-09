import { render } from '@testing-library/react';
import { fireEvent, screen } from '@testing-library/dom';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom/client';
import Accordion from './Accordion.jsx';
import data from '../../data/logements.json';

describe('Accordion', () => {
    test('Should render without crash accordion show', async () => {
        const dataAppartment = data.appartment;
        const appartment = dataAppartment[0];
        render(
            <Accordion
                title="Équipements"
                listing={appartment.equipments}
                show={true}
            />
        );
    });
    test('Should render without crash accordion not show', async () => {
        const dataAppartment = data.appartment;
        const appartment = dataAppartment[0];
        render(
            <Accordion
                title="Équipements"
                listing={appartment.equipments}
                show={false}
            />
        );
    });
    test('Should render without crash accordion change statut on click', async () => {
        const dataAppartment = data.appartment;
        const appartment = dataAppartment[0];
        const container = document.createElement('div');
        document.body.appendChild(container);
        act(() => {
            ReactDOM.createRoot(container).render(
                <Accordion
                    title="Équipements"
                    listing={appartment.equipments}
                    show={false}
                />
            );
        });
        const element = screen.getByTestId('accordion__header');
        expect(element).toBeDefined();
        act(() => {
            fireEvent.click(element);
        });
    });
});
