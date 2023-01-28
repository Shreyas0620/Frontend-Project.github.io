import React from 'react'
import swal from 'sweetalert';



function Signup() {

  function create(){

  let  Fname = document.getElementById('fname').value
  let  Lname = document.getElementById('lname').value
  let  Email = document.getElementById('email').value
  let  Cemail = document.getElementById('cemail').value
  let  Password = document.getElementById('password').value
  let  Cpassword = document.getElementById('cpassword').value
    
    // Name , email id and password expression  

    const letters = /^[A-Za-z]+$/;
		const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const passformat= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;

    // form condition 
    if(Fname && Lname === ""){
      alert("Please Enter Your Name")
    }
    else if(!letters.test(Fname && Lname)){
      alert("Name field required only alphabet characters")
    }
    else if(Fname === Lname){
      alert("first And Last Name Should Not Be the Same")
    }
    else if(Email && Cemail === ""){
      alert("Please enter your user email id")

    }
   else if(Email !== Cemail ){
    alert("Your Email is Not Match")
   }
   else if (!filter.test(Email && Cemail))
		{
			alert('Invalid email');
		}
    else if(Password && Cpassword === ""){
      alert("Please Enter Your Password")

    }
    else if(!passformat.test(Password))
		{
			alert ('Password Should Contain Upper case, Lower case, Special character and Numeric letter are required in Password filed');
		}
    else if(Password !== Cpassword)
		{
			alert ('Password does Not Match');
		}
    else if(document.getElementById("cpassword").value.length < 6)
		{
			alert ('Password minimum length is 6');
		}
		else if(document.getElementById("cpassword").value.length > 12)
		{
			alert ('Password max length is 12');
		}
    else
		{				                            
      swal("You Successfully Created Account","Happy Shopping", "success");
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
                            <a href='/signup' style={{ textDecoration: "none" }}> My Account /</a>
                        </div>
                    </div>

                    <div className='row mt-4 '>
                        <div className='col-md-4'>
                            <h6 href=' #' className='text-uppercase fs-5 fw-bold text-white' style={{ textDecoration: "none" }} >Account Setting</h6>
                            <hr className='text-white fw-bold' />
                            <a href=' #' style={{ textDecoration: "none", color: "white" }} id='create' >create an Account</a>

                            <div className='shop mt-4' >
                                <h6 href=' #' className='text-uppercase fs-5 fw-bold text-white' style={{ textDecoration: "none" }} >Shop Confidently</h6>
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

                        <div className='col-md-8'>
                            <hr className='text-white '/>
                            <h5 className='text-primary'>Name</h5>
                            <h6 className='text-white'>First Name</h6>
                            <div className='col-md-6'>
                            <input className="form-control bg-dark text-white" id="fname"  type="name" />
                            </div>
                            <h6 className='text-white mt-3'>Last Name</h6>
                            <div className='col-md-6'>
                            <input className="form-control bg-dark text-white" id='lname'  type="Lname" />
                            </div>
                            <hr className='text-white mt-4'/>
                            <h5 className='text-primary'>Email / Login information</h5>
                            <h6 className='text-white'>Email</h6>
                            <div className='col-md-6'>
                            <input className="form-control bg-dark text-white" id='email' type="email" />
                            </div>
                            <h6 className='text-white mt-3'>Confirm Email</h6>
                            <div className='col-md-6'>
                            <input className="form-control bg-dark text-white" id='cemail' type="email" />
                            </div>
                            <h6 className='text-white mt-3'>Password</h6>
                            <div className='col-md-6'>
                            <input className="form-control bg-dark text-white"id='password'  type="password" />
                            </div>
                            <h6 className='text-white mt-3'>Confirm Password</h6>
                            <div className='col-md-6'>
                            <input className="form-control bg-dark text-white" id='cpassword'  type="password" />
                            </div>
                              
                              <div className='bbtn mt-3 mb-3'>
                            <button type="button" class="btn btn-info btn-md" onClick={create}>Create Account</button>
                              </div>

                           
                        </div>

                   </div>
                </div>
            </div>

            
        </>
    )
}

export default Signup