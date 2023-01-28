import React from 'react'
import swal from 'sweetalert';


  
  
  function Login() {
    const submit = () => {
         
  
      let Email = document.getElementById('ex3').value;
      let Password = document.getElementById('ex4').value;

		  const emailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      const password_exp= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
      
      if(Email ===""){
        alert("Please Enter Your Email Address")
      }
      else if(!emailformat.test(Email)){
        alert("Enter Correct Email Address")

      }
      else if(Password === ""){
      alert("Please Enter Password")

      }
      else if(!password_exp.test(Password)){
        alert("You Have Enter Wrong Password")
      }
      else{
        swal("You Login Successfuly", Email , "success");
        setTimeout(function(){
          window.location="/";
        },3500);
        
      }
  }





    return (
        <>


            <div className='container-fluid bg-dark '>
                <div className='container '>
                    <div className='row'>
                        <div className='col-md-12' >
                            <a href='/' style={{ textDecoration: "none", }} >Home /</a>
                            <a href='/login' style={{ textDecoration: "none" }}> My Account /</a>
                        </div>
                    </div>
                    <div className='row mt-4 bg-dark' >
                        <div className='col-md-4'>
                            <a href=' #' className='text-uppercase fs-5 fw-bold text-white'  style={{ textDecoration: "none" }} >Account Setting</a>
                            <hr className='text-white fw-bold' />
                            <a href=' #' style={{ textDecoration: "none", color: "white" }} id='create' >create an Account</a>

                            <div className='shop mt-4' >
                                <a href=' #' className='text-uppercase fs-5 fw-bold text-white' style={{ textDecoration: "none" }} >Shop Confidently</a>
                                <hr className='text-white' />
                                <a href=' #' style={{ textDecoration: "none", color: "white" }} >secure shopping</a>
                                <br />
                                <a href=' #' style={{ textDecoration: "none", color: "white" }} >privacy policy</a>

                            </div>
                            <div className='border mt-5 mb-5 ' style={{ backgroundColor: "#DEDEDE" }}>
                                <h5 className='text-center mt-3'>Need Help</h5>
                                <p className='text-center mt-3'>If you have any question or need any help with your account, you may
                                    Contact Us to assist you.</p>
                                <p className='text-center mb-0'>Customer Service</p>
                                <p className='text-center text-primary mb-0'>+0 123 456 789</p>
                                <p className='text-center'>Mon-Sat - 10AM - 7PM </p>
                            </div>

                        </div>
                        <div className='col-md-8' >
                            <h3 className='text-white'>My Account Login</h3>
                            <hr className='text-white' style={{ height: "3px" }} />
                            <div className='row'>

                            
                            <div className='col-md-6' >
                                <h5 className='mt-3 text-primary'>Returning Customer</h5>
                                <p className='text-white'>If you are a registered user, please enter your email and password.</p>
                                <div class="col-xs-4">
                                    <label for="ex3" className='text-white mb-2'>Email Address:</label>
                                    <input className="form-control bg-dark text-white" id="ex3"  type="email" />
                                </div>
                                <div class="col-xs-4">
                                    <label for="ex3" className='text-white mt-3 mb-2'>Password</label>
                                    <input className="form-control bg-dark text-white" id="ex4" type="Password" />
                                </div>
                                <button type="button" class="btn btn-info mt-3 " onClick={submit} style={{borderRadius:"12px"}}>Log In</button>
                            <div className='mt-3'>
                                <a href='#'>Forget Your Password ?</a>
                               <hr className='text-white' style={{height:"3px"}}/>
                            </div>
                            </div>

                            <div className='col-md-6' >
                            <h5 className='mt-3 text-primary'>New Customer</h5>
                            <p className='text-white'>Creating an account is easy. Just fill in the form below and enjoy the benefits of creating an account.</p>
                            <a type="button"  href='/signup' class="btn btn-info btn-md" style={{borderRadius:"12px"}}>Create Account</a>
                             <div className='account field mt-3'>
                                <p className='text-primary '>benefits of Creating an Account</p>
                                <h6 className='text-white'>Order History</h6>
                                <p className='text-white'>Receive important information about your order. You can even track it up to the minute it arrives.</p>
                                <h6 className='text-white'>Information on Promotions</h6>
                                <p className='text-white'>Receive up-to-the-minute information on promotions in your area.</p>

                             </div>

                            </div>
                            </div>  
                
                        </div>                        
                    </div>

                </div>
            </div>

          
      


        </>
    )
}

export default Login