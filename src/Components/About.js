import React, { useState } from 'react'
import '../assest/About.css'
import About1 from "../assest/About1.jpg";
import Bg1 from "../assest/bg1.jpg";
import Bg2 from "../assest/bg2.jpg";
import spot1 from "../assest/spot1.jpg"
import spot2 from "../assest/spot2.jpg"
import spot3 from "../assest/spot3.jpg"
import StoriesData from './StoriesData';












function About() {
  const [img,setImg]=useState(About1)

  
  const changeimg=()=>{
  setImg(About1)
  }

 const changeimg1=()=>{
  setImg(Bg1)
 }
 const changeimg2=()=>{
  setImg(Bg2)
 }
 


  return (
    <>

      {/* main content  */}
      <div className='container-fluid ab ' style={{backgroundImage: `url(${img})`}}   id="aboutHeading" >

        <div className='container'> 

          <div className='row'>
            <div className='col-md-12 mt-4 d-flex justify-content-between' >
              <h1 className='text-center fw-bolder text-white'>Why We're Best</h1>

            </div>

          </div>
          <div className='row mt-3 d-flex justify-content-end'>
            <div className='col-md-6' >
              <p className='fs-3 text-warning fw-bolder'>Immerse yourself into the medley of stories around Soul Sonic.
                Stay tuned for more such stories on our Social Media channel.</p>

            </div>

          </div>


          <div className="Icons">
            <span>
              <i className="far fa-square fa-2x me-1" onClick={changeimg}  style={{cursor:"pointer"}} ></i></span>

            <span><i className="far fa-square fa-2x me-1"onClick={changeimg1} style={{cursor:"pointer"}} ></i></span>

            <span><i className="far fa-square fa-2x" onClick={changeimg2} style={{cursor:"pointer"}} ></i></span>
          </div>

        </div>

      </div>
      {/* main content Ends  */}




      {/* SpotLight Starts  */}

      <div className='container-fluid'>
        <div className='container mt-5'>
          <h3 className='text-center  fw-bolder stories w-25 mx-auto'>In The SpotLight</h3>

          <div className="container">
            <div className="row mt-5 ">
              <div className="col d-flex justify-content-center ">


                <div className="card" style={{ width: "18rem", border: "none" }}>
                  <img src={spot1} class="card-img-top" alt="..." />
                  <div className="card-body mt-3">
                    <h4 className="text-center fw-bold">Way of Style</h4>
                    <p className="text-center">The first time you set your eyes on the Soundsticks, you don’t know what they are. Are they modern art, are they space-age technology?</p>
                    <div className='text-center'>
                      <a href="#" class="btn btn-dark btn-center L" style={{ borderRadius: "22px" }}  >Learn More</a>
                    </div>
                  </div>
                </div>



              </div>
              <div className="col d-flex justify-content-center">

                <div className="card " style={{ width: "18rem", border: "none" }}>
                  <img src={spot2} class="card-img-top" alt="..." />
                  <div className="card-body mt-3">
                    <h4 className="text-center fw-bold">In a Routine</h4>
                    <p className="text-center">We believes in creating products that captivate your senses with their sublime sound and sophisticated design.</p>
                    <div className='text-center'>
                      <a href="#" class="btn btn-dark btn-center L"  style={{ borderRadius: "22px" }} >Learn More</a>
                    </div>
                  </div>
                </div>



              </div>
              <div className="col d-flex justify-content-center">

                <div className="card" style={{ width: "18rem", border: "none" }}>
                  <img src={spot3} className="card-img-top" alt="..." />
                  <div className="card-body mt-3">
                    <h4 className="text-center fw-bold">The Art of Listining</h4>
                    <p className="text-center">It reminds us of who we are in a setting where nothing seems normal, bringing us together even during social distancing.</p>
                    <div className='md-12 text-center'>
                      <a href="#" class="btn btn-dark btn-center L" style={{ borderRadius: "22px" }} >Learn More</a>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SpotLight ends  */}

      <div className='container-fluid'>
        <div className='container mt-5'>
          <h2 className='text-center fw-bolder  stories w-25 mx-auto'>All Stories</h2>
          {/* <hr className='w-25 mx-auto'/> */}

          <div className='container'>
            <div className='row mt-5 '>


              {
                StoriesData.map((cval) => {


                  return (
                    <>

                      <div className='col d-flex justify-content-center col-md-4'>

                        <div className="card m-3" style={{width:"18rem" , border:"none"}}>
                          <img src={cval.Cover} className="card-img-top" alt="..." />
                            <div className="card-body mt-3">
                              <h5 className="text-center fw-bold">{cval.title}</h5>
                              <p className="text-center">{cval.Description}</p>
                              <div className='text-center'>
                              <a  href="https://feedly.com/i/top/headphones-blogs" class="btn  btn-dark L" style={{borderRadius:"22px"}} target='_blank'>Read More</a>

                              </div>
                            </div>
                        </div>

                      </div>
                    </>
                  )


                })

              }





            </div>
          </div>
        </div>


      </div>




    </>
  )
}

export default About