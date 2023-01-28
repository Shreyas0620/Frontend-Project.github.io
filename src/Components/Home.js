import React from 'react'
import img1 from '../assest/img1.jpg'
import img2 from '../assest/img2.jpg'
import img3 from '../assest/img3.jpg'
import card1 from '../assest/card1.jpg'
import card2 from '../assest/card2.jpg'
import card3 from '../assest/card3.jpg'
import card4 from '../assest/card4.jpg'
import card5 from '../assest/card5.jpg'
import { Carousel } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import swal from 'sweetalert';
import truck from '../assest/truck.gif'
import phone from '../assest/phone.gif'
import phone2 from '../assest/phone2.gif'



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


function Home() {

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 4,
        }
    },
  }
  



  return (
    <>

      {/* carousel starts  */}
    
   

    

      <div className='container main '>

        <div className='row'>

          <Carousel controls={false}>
            <Carousel.Item interval={2000} >
              <img src={img1} alt='#' className='d-block w-100'/>
              <Carousel.Caption className='position-absolute top-1 start-0 text-danger' >
                <h4 className='text-dark fw-bolder fs-3'>Relax your way to music</h4>
                <a href='/headphone' type="button"  className="btn btn-dark ms-3">Shop Now</a>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <img src={img2} alt='#' className='d-block w-100' />
              <Carousel.Caption className='position-absolute top-1 start-0 text-danger'>
                <h4 className='fw-bolder fs-3'>Listen and relax.</h4>
                <a href='/speaker' type="button" className="btn btn-dark ">Shop Now</a>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <img src={img3} alt="#" className='d-block w-100' />
              {/* <Carousel.Caption className='\'>
                 
                </Carousel.Caption> */}
            </Carousel.Item>

          </Carousel>
        </div>

      </div>
      
      {/* carousel ends */}



      {/* second page here  */}


      <div className="container-fluid mt-5 py-5">
        <div className="container bg-dark py-5">
          <div className="row justify-content-start">
            <div className="col">
              <h5 className="display-6 text-center  text-white mb-0 fw-bold">Why buy Direct from Soul Sonic?</h5>
            </div>
          </div>
          <div className='container'>

            <div className="row d-flex justify-content-center py-2 mt-3 a">
              <div className="cls col-md-3 col-sm-6 text-white text-center"
              ><img src={truck} alt="truck" />
                <h5 className='text-warning'>Free Shipping Charges</h5>
                <br />
              </div>
              <div className="cls col-md-3 col-sm-6 text-white text-center"
              ><img src={phone} alt="phone" style={{width:"50px"}} />
                <h5 className='text-warning'>24/7 customer support</h5>
                <br />
              </div>

              <div className="cls col-md-3 col-sm-6 text-white text-center"
              ><img src={phone2} alt="phone2" />
                <h5 className="text-warning">30 days return policy</h5>
                <br />
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* second page ends here  */}


      {/* products Page here  */}
      <div className="container-fluid bg-light mt-5 py-5">
        <div className="container  py-5">
          
       <h2 className='text-center mb-5 '>Popular Products</h2>
        <OwlCarousel items={4}  
        
          className="owl-theme "{...options}  
          loop  
          nav  
          margin={8} >
            <div className='img1 card1 ' >
              <img src={card1}  alt='imges' /> 
            <p className='text-center fs-3'>Sonic FLY ANC</p>
            <p className='text-center fs-6'>Wireless Over-Ear NC headphones</p>
            <p className='text-center fs-6'>5000/-</p>
            </div>
            <div className='img2 card2 '>
              <img src={card2} alt='imges'/> 
            <p className='text-center fs-3'>Sonic FLY BT</p>
            <p className='text-center fs-6'>Bluetooth in-ear headphones</p>
            <p className='text-center fs-6'>2000/-</p>
            </div>
            <div className='img3 card3'>
              <img src={card3} alt='imges'/> 
            <p className='text-center fs-3'>Sonic FLY TWS</p>
            <p className='text-center fs-6'>Wireless Over-Ear NC headphones</p>
            <p className='text-center fs-6'>3400/-</p>
            </div>
            <div className='img4 card4'>
              <img src={card4} alt='imges'/> 
            <p className='text-center fs-3'>Sonic Esquire mini</p>
            <p className='text-center fs-6'> Ultra Protable Mini Bluetooth Speaker</p>
            <p className='text-center fs-6'>8000/-</p>
            </div>
            <div className='img5 card5'>
              <img src={card5} alt='imges'/> 
            <p className='text-center fs-3'>Sonic Oynx studio-6</p>
            <p className='text-center fs-6'>Wireless Over-Ear NC headphones</p>
            <p className='text-center fs-6'>7000/-</p>
            </div>
            
          
            
            </OwlCarousel>
        </div>
      </div>



     
       



          
      













    </>
  )
}

export default Home;