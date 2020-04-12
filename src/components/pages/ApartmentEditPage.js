import React from 'react'
import { useParams } from 'react-router-dom'

const ApartmentEditPage = () => {
  let { _id } = useParams()

  return <div>{_id}</div>
}

export default ApartmentEditPage
