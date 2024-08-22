import React from 'react'
import Table from './Module_7_Que_5.1';

const data = [
  { name: 'Amanda Waller Shirt Men', price: '$333' , category: 'Fashion' },
  { name: 'Abercrombie Allen Brook Shirt', price: '$70' , category: 'Fashion' },
  { name: 'Abercrombie Lake Arnold Shirt', price: '$60' , category: 'Fashion' },
  { name: 'Bench Shirt', price: '$29' , category: 'Fashion' },
];

function Module_7_Que_5() {
  return (
    <div className='my-5'>
      <h1>Table with Search Example</h1>
      <Table data={data} />
    </div>
  )
}

export default Module_7_Que_5

