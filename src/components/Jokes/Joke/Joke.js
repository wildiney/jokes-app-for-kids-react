import React from 'react'
import PropTypes from 'prop-types'

const Joke = (props) => {
  return (
    <div className="joke">
      <h2>{props.question}</h2>
      <p>{props.answer}</p>
      <button onClick={props.changeNumber}>Nova charada</button>
    </div>
  )
}

Joke.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  changeNumber: PropTypes.func
}

export default Joke
