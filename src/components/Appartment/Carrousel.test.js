import { render } from '@testing-library/react';
import { fireEvent, screen } from '@testing-library/dom';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom/client';
import Carrousel from './Carrousel.jsx';

describe('Carrousel', () => {
    test('Should render without crash', async () => {
        const fakedataAppart = {
            appartment: [
                {
                    id: 'c67ab8a7',
                    title: 'Appartement cosy',
                    cover: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg',
                    pictures: [
                        'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg',
                        'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg',
                        'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg',
                        'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg',
                        'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg',
                    ],
                    description:
                        "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
                    host: {
                        name: 'Nathalie Jean',
                        picture:
                            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg',
                    },
                    rating: '5',
                    location: 'Ile de France - Paris 17e',
                    equipments: [
                        'Équipements de base',
                        'Micro-Ondes',
                        'Douche italienne',
                        'Frigo',
                        'WIFI',
                    ],
                    tags: ['Batignolle', 'Montmartre'],
                },
            ],
        };
        const dataAppart = fakedataAppart.appartment[0];
        render(<Carrousel appartment={dataAppart} />);
    });
    test('change img RIGHT on click', async () => {
        const fakedataAppart = {
            appartment: [
                {
                    id: 'c67ab8a7',
                    title: 'Appartement cosy',
                    cover: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg',
                    pictures: [
                        'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg',
                        'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg',
                        'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg',
                        'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg',
                        'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg',
                    ],
                    description:
                        "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
                    host: {
                        name: 'Nathalie Jean',
                        picture:
                            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg',
                    },
                    rating: '5',
                    location: 'Ile de France - Paris 17e',
                    equipments: [
                        'Équipements de base',
                        'Micro-Ondes',
                        'Douche italienne',
                        'Frigo',
                        'WIFI',
                    ],
                    tags: ['Batignolle', 'Montmartre'],
                },
            ],
        };
        const dataAppart = fakedataAppart.appartment[0];
        const container = document.createElement('div');
        document.body.appendChild(container);
        act(() => {
            ReactDOM.createRoot(container).render(
                <Carrousel appartment={dataAppart} />
            );
        });
        act(() => {
            fireEvent.click(
                screen.getByTestId('carroussel__navigation-button-left')
            );
        });
        act(() => {
            fireEvent.click(
                screen.getByTestId('carroussel__navigation-button-left')
            );
        });
        act(() => {
            fireEvent.click(
                screen.getByTestId('carroussel__navigation-button-left')
            );
        });
        act(() => {
            fireEvent.click(
                screen.getByTestId('carroussel__navigation-button-left')
            );
        });
        act(() => {
            fireEvent.click(
                screen.getByTestId('carroussel__navigation-button-left')
            );
        });
        act(() => {
            fireEvent.click(
                screen.getByTestId('carroussel__navigation-button-left')
            );
        });
    });
    test('change img RIGHT on click', async () => {
        act(() => {
            fireEvent.click(
                screen.getByTestId('carroussel__navigation-button-right')
            );
        });
        act(() => {
            fireEvent.click(
                screen.getByTestId('carroussel__navigation-button-right')
            );
        });
        act(() => {
            fireEvent.click(
                screen.getByTestId('carroussel__navigation-button-right')
            );
        });
        act(() => {
            fireEvent.click(
                screen.getByTestId('carroussel__navigation-button-right')
            );
        });
        act(() => {
            fireEvent.click(
                screen.getByTestId('carroussel__navigation-button-right')
            );
        });
        act(() => {
            fireEvent.click(
                screen.getByTestId('carroussel__navigation-button-right')
            );
        });
    });
});
