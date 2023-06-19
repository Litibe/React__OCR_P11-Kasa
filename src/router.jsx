import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';

import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import HomePage from './Pages/Home.jsx';
import AboutPage from './Pages/About.jsx';
import Error404 from './Pages/Error404.jsx';
import Appartment from './Pages/Appartment.jsx';

export default function Router() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route
                    index
                    path="/"
                    element={
                        <>
                            <Header url={'home'} />
                            <HomePage />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <>
                            <Header url={'about'} />
                            <AboutPage />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/appartment/:idAppartment"
                    element={
                        <>
                            <Header />
                            <Appartment />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="*"
                    element={
                        <>
                            <Header />
                            <Error404 />
                        </>
                    }
                />
            </Route>
        )
    );
    return router;
}
