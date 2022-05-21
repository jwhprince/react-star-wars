import PeoplePage from '@pages/PeoplePage';
import PersonPage from '@pages/PersonPage';
import HomePage from '@pages/HomePage';
import NotFoundPage from '@pages/NotFoundPage';
import FavoritesPage from '@pages/FavoritesPage';



const routesConfig = [
    {
        path:'/',
        element: <HomePage />
    },
    {
        path:'/people',
        element: <PeoplePage />
    },
    {
        path:'/favorites',
        element: <FavoritesPage  />
    },
    {
        path:'/people/:id',
        element: <PersonPage />
    },
    {
        path:'/not-found',
        element: <NotFoundPage />
    },
    {
        path:'*',
        element: <NotFoundPage />
    }
];

export default routesConfig;
