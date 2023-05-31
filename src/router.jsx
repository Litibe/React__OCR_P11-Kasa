import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';

import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import HomePage from './Pages/Home.jsx';
import Error404 from './Pages/Error404.jsx';

export default function Router() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route
                    index
                    path="/"
                    element={
                        <>
                            <Header />
                            <HomePage />
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
                            <Footer />
                        </>
                    }
                />
            </Route>
        )
    );
    return router;
}
