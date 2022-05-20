import PeoplePage from '@pages/PeoplePage';
import PersonPage from '@pages/PersonPage';
import HomePage from '@pages/HomePage';
import NotFoundPage from '@pages/NotFoundPage';

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