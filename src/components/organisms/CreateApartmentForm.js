import React, { useState } from 'react'

const CreateApartmentForm = () => {
  const [inputs, setInputs] = useState(['input-0'])

  function handleDeleteInput(e) {

  }

  function handleAddInput(e) {
    e.preventDefault()
    setInputs([...inputs, `input-${inputs.length}`])
  }

  function handleFormSubmit(e){
    e.preventDefault()
    console.log(e.target)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>Create apartment:</h1>
      <input type="text" name="number" placeholder="Number"></input>
      <input type="text" name="block" placeholder="Block"></input>
      {inputs.map((input) => (
        <div key={input}>
          <input type="text" name="name" placeholder="Resident name"></input>
          <input type="text" name="birthdate" placeholder="Resident birthdate"></input>
          <input type="text" name="phone" placeholder="Resident phone"></input>
          <input type="text" name="email" placeholder="Resident e-mail"></input>
          <span onClick={handleDeleteInput}>X</span>
        </div>
      ))}
      <button onClick={handleAddInput}>Add Resident</button>
      <button type="submit">Send</button>
    </form>
  )
}

export default CreateApartmentForm
