import React from 'react'
import { Formik, Form, FieldArray } from 'formik'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
// $number: Int!, $block: String!, $residents: [ResidentInput]!
const CREATE_APARTMENT = gql`
  mutation createApartment($input: CreateApartmentInput!) {
    createApartment(input: $input) {
      apartment {
        number
        block
        residents {
          name
        }
      }
    }
  }
`

const CreateApartmentForm = () => {
  const [createApartment, { data }] = useMutation(CREATE_APARTMENT)
  const initialValues = {
    number: '',
    block: '',
    residents: [{ name: '', birthdate: '', phone: '', email: '' }],
  }

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors = {}
        Object.keys(initialValues).map((propertyName) => {
          if (!values[propertyName]) {
            errors[propertyName] = `The field ${propertyName} is required.`
          }
        })
        if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address'
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          createApartment({
            variables: {
              input: values,
            },
          })
          setSubmitting(false)
        }, 400)
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <Form>
          <h1>CREATE APARTMENT:</h1>
          <input type="text" name="number" placeholder="Number" onChange={handleChange} onBlur={handleBlur} value={values.number} />
          {errors.number && touched.number && errors.number}
          <input type="text" name="block" placeholder="Block" onChange={handleChange} onBlur={handleBlur} value={values.block} />
          {errors.block && touched.block && errors.block}
          <FieldArray
            name="residents"
            render={(arrayHelpers) => (
              <div>
                {values.residents.map((resident, index) => (
                  <div key={index}>
                    <input name={`residents.${index}.name`} placeholder="Resident Name" onChange={handleChange} onBlur={handleBlur} value={values.residents[index].name} />
                    <input name={`residents.${index}.birthdate`} placeholder="Resident Birthdate" onChange={handleChange} onBlur={handleBlur} value={values.residents[index].birthdate} />
                    <input name={`residents.${index}.phone`} placeholder="Resident Phone" onChange={handleChange} onBlur={handleBlur} value={values.residents[index].phone} />
                    <input name={`residents.${index}.email`} placeholder="Resident E-mail" onChange={handleChange} onBlur={handleBlur} value={values.residents[index].email} />
                    <button
                      type="button"
                      onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                    >
                      -
                    </button>
                    <button
                      type="button"
                      onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                    >
                      +
                    </button>
                  </div>
                ))}
                <button type="button" onClick={() => arrayHelpers.push('')}>
                  Add a resident
                </button>
              </div>
            )}
          ></FieldArray>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default CreateApartmentForm
