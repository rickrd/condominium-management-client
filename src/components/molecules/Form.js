import React from 'react'
import { Formik, FieldArray } from 'formik'
import { useMutation } from '@apollo/react-hooks'

import Button from '../atoms/Button'
import InputField from '../atoms/InputField'
import { useHistory } from 'react-router-dom'

const Form = ({ initialValues, mutation }) => {
  const [mutationAction, { data }] = useMutation(mutation)

  const history = useHistory()

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
          mutationAction({
            variables: {
              input: values,
            },
          })
          setSubmitting(false)
          setTimeout(() => {
            history.push('/')
          }, 1000)
        }, 400)
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <InputField type="text" name="number" label="Number" onChange={handleChange} onBlur={handleBlur} value={values.number} required />
          {errors.number && touched.number && errors.number}
          <InputField type="text" name="block" label="Block" onChange={handleChange} onBlur={handleBlur} value={values.block} required />
          {errors.block && touched.block && errors.block}
          <FieldArray
            name="residents"
            render={(arrayHelpers) => (
              <div>
                {values.residents.map((resident, index) => (
                  <div key={index}>
                    <InputField name={`residents.${index}.name`} label={`Resident ${index + 1} Name`} onChange={handleChange} onBlur={handleBlur} value={values.residents[index].name} required />
                    <InputField
                      name={`residents.${index}.birthdate`}
                      label={`Resident ${index + 1} Birthdate`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.residents[index].birthdate}
                      required
                    />
                    <InputField name={`residents.${index}.phone`} label={`Resident ${index + 1} Phone`} onChange={handleChange} onBlur={handleBlur} value={values.residents[index].phone} required />
                    <InputField name={`residents.${index}.email`} label={`Resident ${index + 1} E-mail`} onChange={handleChange} onBlur={handleBlur} value={values.residents[index].email} required />
                    {values.residents.length > 1 && (
                      <Button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                        text="-" // remove a friend from the list
                      ></Button>
                    )}
                  </div>
                ))}
                <Button type="button" onClick={() => arrayHelpers.push('')} text="Add a resident"></Button>
              </div>
            )}
          ></FieldArray>
          <Button type="submit" disabled={isSubmitting} text="Submit"></Button>
        </form>
      )}
    </Formik>
  )
}

export default Form
