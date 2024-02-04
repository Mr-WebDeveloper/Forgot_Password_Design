import React from "react";
import logo from '../assets/images/LocationG.png'
import home from '../assets/images/home.png'



function Signup(){
    return ( 
    <>

     <div className="container-fluid d-flex p-0">

        {/* Logo */}
        <div className="pt-5 container-fluid p-0 ">
            <div className="bg-light rounded-4 p-5 shadow ">

                <div className="d-flex pt-5 ">

                    <img src={home} height={300} width={400}  alt="Home"/>

                    <div className="col-6 p-3">
                        <div className="d-flex">
                            <img  src={logo} alt="logo" width={35} height={60}/>
                            <h2 className="fs-1 ps-5">LIESE</h2>
                        </div>
                        <div className="">
                            <h5 className="fs-5">Lorem ipsum dolor sit amet</h5> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec egestas ante. Etiam vel dignissim lectus. Cras in ultrices est. </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Sign in */}
        <div className="p-3 px-5 pt-5 container-fluid ">
            <div className="bg-light rounded-4 p-5 shadow">
                <h2>Sign in</h2>
                <p>enter to continue and explore with grasp</p>



                <form action="" method="">
                    <div>
                        <p className="">
                            <p  className="fw-light">Email Address</p>
                            <input type="email" class="form-control border-bottom border-secondary" name="email" id="email" placeholder="Enter Your Email" required/>
                        </p>
                        <p>                        
                            <p className="fw-light">Password</p>
                            <input type="password" class="form-control border-bottom border-secondary" name="password" id="password" placeholder="Enter Your Password" required/>
                            <i class="bi bi-eye-slash" id="togglePassword"></i>
                            <i class="bi bi-eye" id="togglePassword"></i>
                        </p>

                    </div>
                        
                        <button type="button" class="btn btn-transparent fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Forgot Password
                        </button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Reset Password</h5>
                                    {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                                </div>
                                <div class="modal-body">
                                    <input type="text" class="form-control border-success"  name="forgotValue" id="forgotValue" placeholder="Phone, email or username" />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                                    <button type="button" class="btn btn-success px-5" data-bs-target="#verification" data-bs-toggle="modal" >Reset</button>
                                </div>
                                </div>
                            </div>
                        </div>


                        <div className="modal fade" id="verification" tabindex="-1" aria-labelledby="verification" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">

                                    <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Reset Password</h5>
                                    </div>
                                    <div class="modal-body ">
                                        <div className="pt-2 text-center">
                                            <div>
                                                <p className="fw-bold">Enter Verification Code</p>
                                                <p className="fw-light">Enter OTP Code that was send to</p>
                                                <p>Your Email ID</p>
                                            </div>
                                        </div>
                                        <form>
                                            <div className="d-flex px-5">
                                            <div className=" d-flex px-4">
                                                <p className="px-2"><input type="text" class="form-control border-success py-2" id="otp1" required/></p>
                                                <p className="px-2"><input type="text" class="form-control border-success py-2" id="otp2" required/></p>
                                                <p className="px-2"><input type="text" class="form-control border-success py-2" id="otp3" required/></p>
                                                <p className="px-2"><input type="text" class="form-control border-success py-2" id="otp4" required/></p>
                                            </div>
                                            </div>
                                            <div className="text-center">
                                                <a href="#home" className="text-decoration-none fw-bold">Resend the Code</a>
                                            </div>
                                            <div class="d-flex justify-content-center p-3">
                                                <div className="rounded-circle border border-2 border-success p-1">
                                                    <button className="btn btn-success rounded-circle fs-3" type="submit"><i class="bi bi-chevron-compact-right"></i></button>
                                                </div>
                                            </div>
                                        </form>
                                      </div>



                                </div>
                            </div>
                                
                        </div>

                    <div className="d-grid p-3 pt-5">
                        <input type="submit" value="Login to Continue" className="btn btn-success p-3" />
                    </div>
                </form>

            </div>
        </div>
     </div>
    </>
    );
}

export default Signup;