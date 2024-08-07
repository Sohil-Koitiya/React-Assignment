import React from 'react'

function Module_3_Que_10() {
    const arr = [
        {id:1,name:"sohil",email:"sohil@gmail.com"},
        {id:2,name:"ayan",email:"ayan@gmail.com"},
        {id:3,name:"priti",email:"priti@gmail.com"},
    ]

    // console.log(arr);
  return (
    <div>
      <h1>How to Create a List View in React Js?</h1>
      {arr.map( (v) => (
            // console.log(v);
            // {console.log(v.email);}
            <ul key={v.id}>
                <li>{v.id}</li>
                <li>{v.name}</li>
                <li>{v.email}</li>
            </ul>
      ) )}
      {/* {console.log(arr)} */}
    </div>
  )
}

export default Module_3_Que_10
