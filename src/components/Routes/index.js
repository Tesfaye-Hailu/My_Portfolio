import About from "../About";
import Contact from "../Contact";
import Home from "../Home";
import Portfolio from "../Portfolio";
import CV from "../CV";

const routes = [
    {
        path: '/portfolio',
        component: Portfolio,
        exact: true   //The route will be rendered only if the URL exactly matches the path
    },
    {
        path: '/about',
        component: About,
        exact: true
    },
    {
        path: '/contact',
        component: Contact,
        exact: true
    },
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/cv',
        component: CV,
        exact: true
    },
]

export default routes;