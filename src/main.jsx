import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Projects from './components/Projects.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import ConnectMe from './components/ConnectMe.jsx'
import Service from './components/Service.jsx'
import Certificates from './components/Certificates.jsx'

const ErrorPage = () => {
  return (
    <div className="bg-black text-white py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-400">Please try again later or contact support.</p>
      <a href="/" className="mt-4 inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full">
        Back to Home
      </a>
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} errorElement={<ErrorPage />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='connect-me' element={<ConnectMe />} />
      <Route path='projects' element={<Projects />} />
      <Route path='certificates' element={<Certificates />} />
      <Route path='service' element={<Service />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)