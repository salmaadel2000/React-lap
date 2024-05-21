import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import Bags from './components/Bags';
import BagsDetails from './components/BagsDetails';
import BagEdit from './components/BagEdit';
import BagsForm from './components/Bagsform';
import NotFound from './components/Notfound';
import Mainlayout from './components/Mainlayout';
import { getAll, getById } from './api/bagApi';
import About from './components/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Mainlayout />
        <Footer />
      </>
    ),
    children: [
      { path: 'about', element: <About />,activeIndex: true},
      { path: 'bags', element: <Bags /> },
      { path: 'bag/:id', element: <BagsDetails /> },
      { path: 'bag/:id/edit', element: <BagEdit/> },
      { path: 'add', element: <BagsForm /> },
    ],
  },
  
  { path: '*', element: <NotFound /> }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
