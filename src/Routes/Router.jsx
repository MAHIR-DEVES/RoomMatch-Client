import { createBrowserRouter } from 'react-router';
import Root from '../Layouts/Root/Root';
import Home from '../Pages/Home/Home';
import Profile from '../Pages/Profile/Profile';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Registerr/Register';
import CardDetails from '../Components/CardDetails/CardDetails';
import PrivateRoute from '../Provider/AuthProvider/PrivateRoute';
import Loading from '../Components/Loading/Loading';
import ResatPasswordPage from '../Pages/ResatPasswordPage/ResatPasswordPage';
import ErrorPage from '../Pages/Error/ErrorPage';
import AddToFindRoommate from '../Pages/AddToFindRoommate/AddToFindRoommate';
import BrowseListing from '../Pages/Browse/BrowseListing';
import MyListings from '../Pages/MyListings/MyListings';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('/eventData.json'),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: '/myListings',
        element: (
          <PrivateRoute>
            <MyListings></MyListings>
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/ResatPasswordPage',
        Component: ResatPasswordPage,
      },
      {
        path: '/register',
        Component: Register,
      },
      {
        path: '/browseListing',
        element: (
          <PrivateRoute>
            <BrowseListing></BrowseListing>
          </PrivateRoute>
        ),
      },
      {
        path: '/addToFindRoommate',
        element: (
          <PrivateRoute>
            <AddToFindRoommate></AddToFindRoommate>
          </PrivateRoute>
        ),
      },
      {
        path: '/cardDetails/:id',
        element: (
          <PrivateRoute>
            <CardDetails></CardDetails>
          </PrivateRoute>
        ),
        loader: () => fetch('/eventData.json'),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {},
    ],
  },
]);

export default router;
