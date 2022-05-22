import PeoplePage from '@pages/PeoplePage';
import PersonPage from '@pages/PersonPage';
import HomePage from '@pages/HomePage';
import NotFoundPage from '@pages/NotFoundPage';
import FavoritesPage from '@pages/FavoritesPage';
import SearchPage from '@pages/SearchPage';
import ErrorMessage from '@components/ErrorMessage';




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
        path:'/search',
        element: <SearchPage  />
    },
    {
        path:'/people/:id',
        element: <PersonPage />
    },
    {
        path:'/fail',
        element: <ErrorMessage />
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
