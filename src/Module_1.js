import React from 'react'

function Module_1() {
  return (
    <div>
      
      <div className="container">
        <div className="row justify-content-center">
            
            <div className="col-xl-6">
                
                  <h1>Login Form</h1>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email..."/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input type="password" className="form-control" id="password" placeholder="Enter Password..."/>
                    </div>
                    <div>
                      <button type="submit" id="btn1" className="btn btn-primary login">Login</button>
                    </div>
                    
                  
            </div>
        </div>
    </div>

    </div>
  )
}

export default Module_1
