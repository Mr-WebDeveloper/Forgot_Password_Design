import React, { useState, useEffect, useRef  } from "react";

import logo from '../assets/images/LocationG.png'
import home from '../assets/images/home.png'
import Dashboard from "./Dashboard";
// import { App } from "react-bootstrap-icons";




function Signup(){

    const inputRef = useRef(null);   

    const [email, setEmail] = useState("muthu1@gmail.com");
    const [password, setPassword] = useState("1234");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        inputRef.current.focus();
        inputRef.current.classList.add('border-info');


        const timeoutId = setTimeout(() => {
            inputRef.current.classList.remove('border-info');
        }, 3000);

        return () => 
        {
            clearTimeout(timeoutId);
        }

      }, []);


    function checkUser(event) {
        event.preventDefault(); 

        let userEnteredEmail = event.target.email.value;
        let userEnteredPassword = event.target.password.value;
        
        console.log(event.target.email.value);
        console.log(event.target.password.value);

        
        if (email === userEnteredEmail  && password === userEnteredPassword) {
            alert("You are Valid user !!!");
            setIsLoggedIn(true); 
            
        } else {
            alert("Invalid username or password");
        }
    }

    if (isLoggedIn) {
        return <Dashboard />
    }


    return ( 
    <>

     <div className="container-fluid d-flex p-0">

        {/* Logo */}
        <div className="pt-5 container-fluid p-0 pe-5">
            <div className="bg-light rounded-4 p-5 shadow ">
                <div className="d-flex pt-5  pb-lg-5 mb-lg-5 ">

                    <img src={home} height={300} width={400}  alt="Home"/>

                    <div className="col-6 p-lg-3 ">
                        <div className="d-flex pt-lg-5">
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



                <form onSubmit={checkUser}>

                    <div>
                        <span>
                            <p  className="fw-light">Email Address</p>
                            <input type="email" class="form-control border-bottom border-secondary" name="email" id="email" placeholder="Enter Your Email" required/>
                        </span>
                        <span>                        
                            <p className="fw-light">Password</p>
                            <input type="password" class="form-control border-bottom border-secondary" name="password" id="password" placeholder="Enter Your Password" required/>
                            <i class="bi bi-eye-slash" id="togglePassword"></i>
                            <i class="bi bi-eye" id="togglePassword"></i>
                        </span>

                    </div>
                        
                        <button type="button" class="btn btn-transparent fw-bold" data-bs-toggle="modal" ref={inputRef}  data-bs-target="#exampleModal">
                        Forgot Password
                        </button>
                        
                        {/* Send Verification Code box */}
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


                        {/* OPT Box */}
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
                                                <p className="px-2"><input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"  class="form-control border-success py-2" id="otp1" required/></p>
                                                <p className="px-2"><input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"  class="form-control border-success py-2" id="otp2" required/></p>
                                                <p className="px-2"><input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"  class="form-control border-success py-2" id="otp3" required/></p>
                                                <p className="px-2"><input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"  class="form-control border-success py-2" id="otp4" required/></p>
                                            </div>
                                            </div>
                                            <div className="text-center">
                                                <a href="#home" className="text-decoration-none fw-bold">Resend the Code</a>
                                            </div>
                                            <div class="d-flex justify-content-center p-3">
                                                <div className="rounded-circle border border-2 border-success p-1">
                                                    <button className="btn btn-success rounded-circle fs-3" type="submit" data-bs-target="#confirm" data-bs-toggle="modal" ><i class="bi bi-chevron-compact-right"></i></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>  
                        </div>

                        {/* Confirm Box */}
                        <div className="modal fade" id="confirm" tabindex="-1" aria-labelledby="confirm" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 class="modal-title" id="confirmModal">Reset Password</h5>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <p className=""><input type="text" class="form-control border-success " id="confirm1" placeholder="Enter Your New Password" required/></p>
                                            <p className=""><input type="password" class="form-control border-success " id="confirm2" placeholder="Confirm Your New Password" required/></p>
                                            <div class="modal-footer p-1">
                                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                                                <button type="submit" class="btn btn-success px-5">Reset</button>
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