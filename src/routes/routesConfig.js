import PeoplePage from '@pages/PeoplePage';
import HomePage from '@pages/HomePage';

const routesConfig = [
    {
        path:'/',
        element: <HomePage />
    },
    {
        path:'/people',
        element: <PeoplePage />
    }
];

export default routesConfig;