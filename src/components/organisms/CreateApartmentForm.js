import React from 'react'

import Form from '../molecules/Form'

const CreateApartmentForm = ({mutation}) => {
  const initialValues = {
    number: '',
    block: '',
    residents: [{ name: '', birthdate: '', phone: '', email: '' }],
  }

  return <Form initialValues={initialValues} mutation={mutation} ></Form>
}

export default CreateApartmentForm
