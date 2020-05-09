import React from 'react'

const Joke = (props)=>{
    return (
        <div className="joke">
            <h2>{props.question}</h2>
            <p>{props.answer}</p>
            <button onClick={props.changeNumber}>Nova charada</button>
        </div>
    )
}

export default Joke
