import { createBrowserRouter } from 'react-router';
import Root from '../Layouts/Root/Root';
import Home from '../Pages/Home/Home';

import Login from '../Pages/Login/Login';
import Register from '../Pages/Registerr/Register';
import CardDetails from '../Components/CardDetails/CardDetails';
import PrivateRoute from '../Provider/AuthProvider/PrivateRoute';
import Loading from '../Components/Loading/Loading';

import ErrorPage from '../Pages/Error/ErrorPage';
import AddToFindRoommate from '../Pages/AddToFindRoommate/AddToFindRoommate';
import BrowseListing from '../Pages/Browse/BrowseListing';
import MyListings from '../Pages/MyListings/MyListings';
import UpdatePosts from '../Pages/UpadtePost/UpdatePosts';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('https://assigment-10-server-two.vercel.app/posts'),
        hydrateFallbackElement: <Loading></Loading>,
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
        path: '/register',
        Component: Register,
      },
      {
        path: '/browseListing',
        Component: BrowseListing,
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
        path: '/updatePosts/:id',
        element: (
          <PrivateRoute>
            <UpdatePosts></UpdatePosts>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assigment-10-server-two.vercel.app/posts/${params.id}`
          ),
      },
      {
        path: '/cardDetails/:id',
        element: (
          <PrivateRoute>
            <CardDetails></CardDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assigment-10-server-two.vercel.app/posts/${params.id}`
          ),
      },
      {},
    ],
  },
]);

export default router;
