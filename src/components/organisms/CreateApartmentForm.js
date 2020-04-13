import React from 'react'
import { Formik, Form, FieldArray } from 'formik'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import Button from '../atoms/Button'
import InputField from '../atoms/InputField'
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
          <InputField type="text" name="number" label="Number" onChange={handleChange} onBlur={handleBlur} value={values.number} required/>
          {errors.number && touched.number && errors.number}
          <InputField type="text" name="block" label="Block" onChange={handleChange} onBlur={handleBlur} value={values.block} required/>
          {errors.block && touched.block && errors.block}
          <FieldArray
            name="residents"
            render={(arrayHelpers) => (
              <div>
                {values.residents.map((resident, index) => (
                  <div key={index}>
                    <InputField name={`residents.${index}.name`} label={`Resident ${index + 1} Name`} onChange={handleChange} onBlur={handleBlur} value={values.residents[index].name} required/>
                    <InputField name={`residents.${index}.birthdate`} label={`Resident ${index + 1} Birthdate`} onChange={handleChange} onBlur={handleBlur} value={values.residents[index].birthdate} required/>
                    <InputField name={`residents.${index}.phone`} label={`Resident ${index + 1} Phone`} onChange={handleChange} onBlur={handleBlur} value={values.residents[index].phone} required/>
                    <InputField name={`residents.${index}.email`} label={`Resident ${index + 1} E-mail`} onChange={handleChange} onBlur={handleBlur} value={values.residents[index].email} required/>
                    <Button
                      type="button"
                      onClick={() => arrayHelpers.remove(index)}
                      text="-" // remove a friend from the list
                    ></Button>
                  </div>
                ))}
                <Button type="button" onClick={() => arrayHelpers.push('')} text="Add a resident"></Button>
              </div>
            )}
          ></FieldArray>
          <Button type="submit" disabled={isSubmitting} text="Submit"></Button>
        </Form>
      )}
    </Formik>
  )
}

export default CreateApartmentForm
