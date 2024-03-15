import React from 'react'

function SignUp() {
    return (
        <div className='container-fluid py-5 vh-100 bg-light' >
            <div className='col-12 col-md-8 col-lg-6 col-xl-5 p-4 mx-auto bg-white shadow' style={{ borderRadius: "1rem" }}>
                <h3 className="mb-5 text-center">LOGIN</h3>

                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>


                <div className="form-check d-flex justify-content-start mb-3">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form1Example3" />
                    <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                </div>

                <div className="d-grid col-9 mx-auto">

                    <button className="btn btn-primary  btn-block" type="submit">Login</button>
                </div>

                <hr className="my-4" />

                <div className="d-grid gap-2 col-9 mx-auto">
                    <button className="btn btn-block btn-primary" style={{ backgroundColor: "#dd4b39" }}
                        type="submit"><i className="fa-brands fa-google me-2"></i> Sign in with google</button>
                    <button className="btn  btn-block btn-primary" style={{ backgroundColor: "#3b5998" }}
                        type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button>
                </div>

                <h6 className='text-center mt-5'>Don't have an account? Sign Up</h6>

            </div>
        </div>
    )
}

export default SignUp