import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import store from './store/store.js'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login, Signup, PreLogin, PageNotFound} from './pages/index.js'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
    ]
  },
  {
    path : "/login",
    element : <Login/>
  },
  {
    path : "/signup",
    element : <Signup/>
  },
  {
    path : "/pre-login",
    element : <PreLogin/>
  },
  {
    path : "*",
    element : <PageNotFound/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
    <RouterProvider router = {router}/>
    </Provider>
  </StrictMode>,
)
 