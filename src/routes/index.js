import Home from '~/Pages/Home';
import Hotel from '~/Pages/Hotel';
import List from '~/Pages/List';
import Login from '~/Pages/Login';

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
    {
        path: '/login',
        component: Login,
    },
];
