import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import PageToRead from './Components/PageToRead/PageToRead.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../public/APIData.json')
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('../public/APIData.json')
      },
      {
        path: "/pagetoread",
        element: <PageToRead></PageToRead>,
        loader: () => fetch('../public/APIData.json')
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
