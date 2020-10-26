import React, { useState }from 'react'



function Form(props) {

  const [name, setName] = useState('')
  
  function handleChange(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    //if(!name.trim())
    if (name.trim()=== '') {
      return;
    }
    props.addTask(name)
    
    setName("")
  }
    
   

  return (
    <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label name="new-todo-input" className="label__lg">
            Start your tasks
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
          placeholder='What needs to be done???'
          style={{fontStyle:"italic"}}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
  )
}

export default Form;
