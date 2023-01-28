import React from 'react'
import swal from 'sweetalert';

function Footer() {

     
    // newsletter here 
function handleClick(){
    const mail = document.getElementById('email').value;
  
    const verify = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
     if(!verify.test(mail)){
      alert("Enter a Valid Parameter")
     }
     else{
      swal("Thankyou for Subscribe", mail , "success");
  
      setTimeout(function(){
        window.location.reload();
      },3000);   }
  
   
  }
  // newsletter ends 
  


  return (
    <>
    {/* Footer starts  */}



    <div className="container-fluid bg-dark mt-5 py-5">
          {/* upper footer  */}
        <div className="container footer d-flex justify-content-center align-items-center">
          <div class="form-group row">
            <div className="col-md-7 newsletter">
            < h3 className='text-dark text-center'>Sign up for Soul Sonic Newsletter</h3>
            </div>
            <div className="col-md-4">
              <input className="form-control text-center" id="email" type="email" pattern=".+@globex\.com" size='30' placeholder='Enter Email Address' />
            </div>
            <div className='col-md-1'>
              <button type="button" onClick={handleClick} className="btn btn-dark ">Signup</button>
            </div>
          </div>
        </div>
          {/* upper footer ends  */}
         

         {/* main Footer starts  */}

               <div className='container'>

               
                <div className="row">
                    
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

                         
                        <div className="border-start border-warning border-5 ps-3 mt-5">
                            <h6 className="text-white text-uppercase  fw-bolder m-0">GEt in touch</h6>
                        </div>
                        <p className="mt-3 fs-6 text-white"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum porta bibendum. Donec finibus sit amet elit a laoreet. Nam mattis pharetra rutrum. 
                        </p>

                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!"style={{textDecoration:"none" , color:"white"}} ><i
                                        className="me-2 fa-sharp text-primary fa-solid fa-map"></i>Pune,Maharashtra, INDIA</a>
                            </li>
                            <li>
                                <a href="#!" style={{textdecoration:"none", color: "white"}}><i
                                        className="mt-3 fa-regular text-primary fa-envelope-open me-3"></i>info@example.com</a>
                            </li>
                            <li>
                                <a href="#!" style={{textdecoration:"none", color: "white"}}><i
                                        className="mt-3 me-3 text-primary fa-regular fa-phone"></i>+012 345 67890</a>
                            </li>
                        </ul>
                    </div>


                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        
                        <div className="border-start border-warning border-5 ps-3 mt-5">
                            <h6 className="text-white text-uppercase  fw-bolder m-0">shop</h6>
                        </div>

                        <ul className="list-unstyled mt-3" style={{cursor:"pointer"}}>
                            <li>
                              <h6  className='text-white mb-3' >Speakers</h6>  
                            </li>
                            <li>
                              <h6 className='text-white mb-3'>headphones</h6>  
                            </li>
                            <li>
                              <h6 className='text-white mb-3'>Citation Series</h6>  
                            </li>
                            <li>
                              <h6 className='text-white mb-3'>SoundBars</h6>  
                            </li>
                            <li>
                              <h6 className='text-white mb-3'>Mini Speaker</h6>  
                            </li>
                            <li>
                              <h6 className='text-white mb-3'>Sonic Diaries</h6>  
                            </li>
                            
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        
                        <div className="border-start border-warning border-5 ps-3 mt-5">
                            <h6 className="text-white text-uppercase  fw-bolder m-0">About Us</h6>
                        </div>

                        <ul className="list-unstyled mt-3" style={{cursor:"pointer"}}>
                            <li>
                              <h6 className='text-white mb-3'>Sonic Corporate</h6>  
                            </li>
                            <li>
                              <h6 className='text-white mb-3'>Privacy Policy</h6>  
                            </li>
                            <li>
                              <h6 className='text-white mb-3'>Cookie Policy</h6>  
                            </li>
                            <li>
                              <h6 className='text-white mb-3'>Terms and Conditions of Sale</h6>  
                            </li>
                            <li>
                              <h6 className='text-white mb-3'>Terms Of Use</h6>  
                            </li>
                            <li>
                              <h6 className='text-white mb-3'>Why Buy Direct From Soul</h6>  
                            </li>
                            
                        </ul>
                    </div>


                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        
                        <div className="border-start border-warning border-5 ps-3 mt-5">
                            <h6 className="text-white text-uppercase  fw-bolder m-0">Support</h6>
                        </div>

                        <ul className="list-unstyled mt-3" style={{cursor:"pointer"}}>
                            <li>
                              <h6 className='text-white mb-3'>Order Status</h6>  
                            </li>
                            <li>
                              <h6 className='text-white mb-3'>Bulk Purchase Program</h6>  
                            </li>
                            <li>
                              <h6 className='text-white mb-3'>Product Support</h6>  
                            </li>
                            <li>
                              <h6 className='text-white mb-3'>Shipping Policy</h6>  
                            </li>
                            <li>
                              <h6 className='text-white mb-3'>Cancellation & Return Policy</h6>  
                            </li>
                            
                            
                        </ul>
                    </div>
  
                </div>
              </div>

              <hr className='border'/>
              <div class="text-center text-white ">© 2023 Soul Sonic International Industries, Incorporated. All rights reserved.</div>
            </div>
    
    
    
    </>
  )
}

export default Footer