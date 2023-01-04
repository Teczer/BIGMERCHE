
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import DetailPage from '../pages/DetailPage';
import HomePage from '../pages/HomePage';
import PanierPage from '../pages/PanierPage';


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
            {
                path: 'Panier',
                element: <PanierPage />
            },
            {
                path: 'Detail',
                element: <DetailPage/>
            },
        ],
    },
]);

export default router;