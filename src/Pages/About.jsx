import BannerTop from '../components/Banner/BannerTop.jsx';
import backgroundAbout from '../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg';
import Accordion from '../components/Accordion/Accordion.jsx';

export default function AboutPage() {
    document.title = 'Kasa - A propos de nous';
    const fiabilité =
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.';
    const respect =
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';
    const service =
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    const securite =
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

    return (
        <>
            <BannerTop img={backgroundAbout} class="banner--about" />
            <h1 className="d-none">A propos</h1>
            <main className="accordion__about">
                <Accordion title="Fiabilité" listing={fiabilité} />
                <Accordion title="Respect" listing={respect} />
                <Accordion title="Service" listing={service} />
                <Accordion title="Sécurité" listing={securite} />
            </main>
        </>
    );
}
