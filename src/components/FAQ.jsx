import React from 'react'

const FAQ = ({question, answer}) => {
  return (
    <div>
    <h1 className="font-bold pb-3">{question}</h1>
    <p>{answer}</p>
      
    </div>
  )
}

export default FAQ