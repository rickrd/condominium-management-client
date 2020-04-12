import React from 'react'

import Home from '../components/pages/Home'
import ApartmentConfigurationPage from '../components/pages/ApartmentConfigurationPage'
import ApartmentEditPage from '../components/pages/ApartmentEditPage'
import CreateApartmentForm from '../components/organisms/CreateApartmentForm'

export const routes = [
  {
    title: 'Home',
    path: '/',
    component: <Home />,
    isMenuItem: true,
    exact: true,
  },
  {
    title: 'Apartments List',
    path: '/apartments',
    component: <ApartmentConfigurationPage />,
    isMenuItem: true,
    exact: true,
  },
  {
    title: 'Apartment Edit',
    path: '/apartments/edit/:_id',
    component: <ApartmentEditPage />,
    isMenuItem: false,
    exact: false,
  },
  {
    title: 'Create Apartment',
    path: '/apartments/create',
    component: <CreateApartmentForm />,
    isMenuItem: true,
    exact: true,
  },
]
