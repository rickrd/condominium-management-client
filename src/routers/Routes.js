import React from 'react'
import Home from '../components/pages/Home'
import ApartmentsList from '../components/organisms/ApartmentsList'
import ApartmentDetail from '../components/organisms/ApartmentDetail'

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
    component: <ApartmentsList />,
    isMenuItem: true,
    exact: true,
  },
  {
    title: 'Apartment Detail',
    path: '/apartments/:_id',
    component: <ApartmentDetail />,
    isMenuItem: false,
    exact: false,
  },
]
