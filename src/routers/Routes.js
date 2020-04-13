import React from 'react'

import Home from '../components/pages/Home'
import ApartmentConfigurationPage from '../components/pages/ApartmentConfigurationPage'
import ResidentConfigurationPage from '../components/pages/ResidentConfigurationPage'
import ApartmentEditPage from '../components/pages/ApartmentEditPage'
import CreateApartmentForm from '../components/organisms/CreateApartmentForm'

export const routes = [
  {
    title: 'HOME',
    path: '/',
    component: <Home />,
    isMenuItem: true,
    exact: true,
  },
  {
    title: 'APARTMENTS LIST',
    path: '/apartments',
    component: <ApartmentConfigurationPage />,
    isMenuItem: true,
    exact: true,
  },
  {
    title: 'RESIDENTS LIST',
    path: '/residents',
    component: <ResidentConfigurationPage />,
    isMenuItem: true,
    exact: true,
  },
  {
    title: 'APARTMENT EDIT',
    path: '/apartments/edit/:_id',
    component: <ApartmentEditPage />,
    isMenuItem: false,
    exact: false,
  },
  {
    title: 'CREATE APARTMENT',
    path: '/apartments/create',
    component: <CreateApartmentForm />,
    isMenuItem: true,
    exact: true,
  },
]
