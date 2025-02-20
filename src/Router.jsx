import React from 'react'
import { useRoutes } from 'react-router'
import Home from './Pages/Home/Home'
import About from './Pages/About-Us/AboutUs'
import Contact from './Pages/Contact/Contact'
import Services from './Pages/Services/Services'

const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/About-Us ',
            element: <About />
        },
        {
            path: '/Contact',
            element: <Contact />
        },
        {
            path: '/Services',
            element: <Services />
        }
    ]
    )
}

export default Router