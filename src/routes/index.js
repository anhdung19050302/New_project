import Home from '~/Pages/Home';
import Hotel from '~/Pages/Hotel';
import List from '~/Pages/List';

export const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/hotels',
        component: List,
    },
    {
        path: '/hotels/:id',
        component: Hotel,
    },
];
