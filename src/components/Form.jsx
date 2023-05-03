import React, { useState } from 'react'

const Form = ({saveTodo}) => {
  
  const [text , setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    saveTodo(text)
    setText("")
  }



  
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
    <div className="mb-3">
      <input value={text} type="text" className="form-control rounded-0" placeholder="Enter Todo Here.." required onChange={(e)=>setText(e.target.value)}/>
    </div>
    <button type="submit" className="btn btn-primary w-100 rounded-0">Submit</button>
  </form>
  )
}

export default Form
