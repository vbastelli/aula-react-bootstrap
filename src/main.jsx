import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App.jsx';
import Error from './routes/Error/Error';
import Sobre from './routes/Sobre/Sobre';
import Home from './routes/Home/Home';

const router=createBrowserRouter([{
  path:'/', element:<App/>,
  errorElement:<Error/>,

  children:[
    {path: '/', element:<Home/>},
    {path: '/sobre', element:<Sobre/>},
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
