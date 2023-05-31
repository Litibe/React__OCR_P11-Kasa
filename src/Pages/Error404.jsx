export default function Error404() {
    document.title = 'Oops! - Erreur 404 !';
    return (
        <div id="error-page" className="mt-5 pt-5">
            <h1 className="mt-5 pt-5 text-center">Oops! - Erreur 404 ! </h1>
            <p className="text-center mt-3">
                La page demandée n'existe pas, merci de vérifier l'adresse
                saisie.
            </p>
        </div>
    );
}
