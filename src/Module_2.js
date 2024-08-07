import React from "react";

function Module_2() {

    const obj = {}

    const handleChange = (id,price,output)=>{
        const inputvalue = document.getElementById(`${id}`).value
        const outputvalue = document.getElementById(`${output}`)
        const total = document.getElementById('subtotal')
        outputvalue.innerHTML = inputvalue*price

        obj[output] = inputvalue*price

        let subtotal = 0
        for (const key in obj) {
            console.log(obj[key]);
            subtotal = subtotal + obj[key]
        }   
        
        total.innerHTML = subtotal
        

    }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-hover border">
              <thead>
                <tr>
                  <th scope="col">Product Info</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Price Subtotal</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">Fortunata Window Hardware - Decorative Holdbacks - Mocha</td>
                  <td><input placeholder="number" id="input1" onKeyUp={()=>handleChange('input1',"29.99","first")}></input></td>
                  <td>$29.99</td>
                  <td id="first"></td>
                  <td><button className="btn btn-danger">Remove</button></td>
                </tr>
                <tr>
                  <td scope="row">Woven Trillies Window Hardware -Clip Rings -Bronze</td>
                  <td><input placeholder="number" id="input2" onKeyUp={()=>handleChange('input2',"12.99","second")}></input></td>
                  <td>$12.99</td>
                  <td id="second"></td>
                  <td><button className="btn btn-danger">Remove</button></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td id="subtotal"></td>
                    <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Module_2;
