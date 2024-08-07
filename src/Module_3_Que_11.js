import React, { useState } from 'react'

function Module_3_Que_11() {

    let [x,setX] = useState(0)

    function increment(){
        setX(x+1)
    }

    function decrement(){
        setX(x-1)
    }

    function reset(){
        setX(x=0)
    }


  return (
    <div>
        <h1>Create Increment decrement state change by button click?</h1>
        <h3>React Web</h3>
        <h4>{x}</h4>
        <button className='btn btn-primary m-2' onClick={increment}>Increment</button>
        <button className='btn btn-danger m-2' onClick={decrement}>Decrement</button>
        <button className='btn btn-success m-2' onClick={reset}>Reset</button>
    </div>
  )
}

export default Module_3_Que_11
