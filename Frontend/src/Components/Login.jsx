import React from 'react'

function Login() {
  return (
    <div className='container-fluid py-5 vh-100 bg-light' >
            <div className='col-12 col-md-8 col-lg-6 col-xl-5 p-4 mx-auto bg-white shadow' style={{ borderRadius: "1rem" }}>
                <h3 className="mb-5 text-center">CREATE AN ACCOUNT</h3>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingPassword" placeholder="Name" />
                    <label htmlFor="floatingPassword">Username</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Confirm Password</label>
                </div>

                <div class="form-check mb-5">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>


                <div className="d-grid col-9 mx-auto">

                    <button className="btn btn-primary  btn-block" type="submit">Register</button>
                </div>


                <h6 className='text-center mt-5'>Have already an account? Login here</h6>

            </div>
        </div>
  )
}

export default Login