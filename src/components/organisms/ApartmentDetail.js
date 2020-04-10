import React from 'react'
import { useParams } from 'react-router-dom'

const ApartmentDetail = () => {
  let { _id } = useParams()

  return <div>{_id}</div>
}

export default ApartmentDetail
