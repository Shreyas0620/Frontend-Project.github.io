import React from 'react'
import card1 from '../assest/card1.jpg'
import spec1 from '../assest/spec1.jpg'
import spec2 from '../assest/spec2.jpg'
import spec3 from '../assest/spec3.jpg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useCart } from 'react-use-cart'




function Details() {
    const {addItem} = useCart()

    

    return (
        <>
        <div className='container-fluid'>
            {/* first Content  */}
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 ' >
                        <div className='list mt-3 ' >
                            <a href="/" className='text ' style={{ textDecoration: "none" }}>Home / </a>
                            <a href="Headphone" className='text ' style={{ textDecoration: "none" }}>Headphones / </a>
                            <a href="" className='text ' style={{ textDecoration: "none" }}>harmankardon FLY </a>
                        </div>
                        <div className='container mt-2' >
                            <div className='row'>
                                <div className='col-md-12' >
                                    <OwlCarousel items={1}

                                        className="owl-theme "
                                        loop
                                        nav
                                    >
                                        <div className='img1 fly'>
                                            <img src={card1} alt='imges'  style={{ width: "30rem", marginLeft: "10rem" }} />
                                        </div>
                                        <div className='img2 fly1'>
                                        <img src={spec1} alt='imges1'  style={{ width: "30rem", marginLeft: "10rem" }} />

                                        </div>
                                        <div className='img3'>
                                        <img src={spec2} alt='imges'  style={{ width: "30rem", marginLeft: "10rem" }} />
                                           

                                        </div>
                                        <div className='img4'>
                                        <img src={spec3} alt='imges'  style={{ width: "30rem", marginLeft: "10rem" }} />
                                            

                                        </div>
                                        


                                    </OwlCarousel>


                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-4 mt-5'  >
                        <div className='container'>
                            <h1 className='text mt-2'>Harman Kardon FLY ANC (Black)</h1>
                            <p className='text mt-2'>Wireless Over-Ear ANC Headphone</p>
                            <hr className='mt-5' />
                            <div className='container'>
                                <h1 className='text-primary mt-5'>₹ 17,099.00 each</h1>
                                <p>Inclusive All Taxes</p>
                                <p>MRP <del>₹ 20,999</del></p>

                                <div className="d-grid gap-2 mt-5 col-10 mx-auto">
                                    <button className="btn btn-primary" type="button">Buy Now</button>
                                    <button className="btn btn-warning" type="button" onClick={() => addItem()} >Add To Cart</button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* First Content Ends */}

            <div className='container'>
                <div className='conatiner mt-5' >
                    <div className='row bg-dark'>
                        <h3 className='text-white text-center'>Specs</h3>
                    </div>
                    <div className='row' >
                        <div className='col-md-6 '>
                            <h3 className='mt-5 ms-3'>Item# HKFLYANCBLK</h3>
                        </div>
                        <div className='col-md-6 '>
                            
                            <a target="_blank" href='https://in.harmankardon.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw8a13bb5c/pdfs/HK_FLY_ANC_Spec%20Sheet_English.pdf'  className='btn text-center mt-5'>Click here for a complete list of all specs for this product &#9782;</a>
                            
                        </div>
                    </div>
                </div>

                <div className='row'>
                    {/* first specs  */}
                    <div className='col-md-6 mt-5'>
                        <div className="card" style={{border:"none"}}>
                            <div className="card-header ">
                               <h5 className='text'>General Specifications</h5>
                            </div>
                            <div className="card-body">
                                <h6 className='text'>Driver Size :  40nm</h6>
                                <h6 className='text'>Maximum Input Power :  30mw</h6>
                                <h6 className='text'>Product Net Weight :  281gm</h6>
                                
                            </div>
                        </div>
                    </div>

                    {/* second specs  */}
                    <div className='col-md-6 mt-5'>
                        <div className="card" style={{border:"none"}}>
                            <div className="card-header ">
                               <h5 className='text'>Audio Specification</h5>
                            </div>
                            <div className="card-body">
                                <h6 className='text'>Frequency Response Wireless :  16 Hz - 22 kHz</h6>
                                <h6 className='text'>Frequency response (Aux-in) :  16 Hz - 22 kHz</h6>
                                <h6 className='text'>Sensitivity :  100 dB SPL@1kHz/1mW</h6>
                                <h6 className='text'>Microphone sensitivity :  21 dBV@1kHz/Pa</h6>
                                  
                            </div>
                        </div>
                    </div>
                    {/* Third Specs  */}
                    <div className='col-md-6 mt-5'>
                        <div className="card" style={{border:"none"}}>
                            <div className="card-header ">
                               <h5 className='text'>Control and Connection Specifications</h5>
                            </div>
                            <div className="card-body">
                                <h6 className='text'>Bluetooth transmitted power: less than Eight dbm</h6>
                                <h6 className='text'>Bluetooth transmitted modulation   :   GFSK, π/4 DQPSK, 8DPSK</h6>
                                <h6 className='text'>Bluetooth version : 4.2</h6>
                                  
                            </div>
                        </div>
                    </div>

                    {/* Fourth Specs  */}
                    <div className='col-md-6 mt-5'>
                        <div className="card" style={{border:"none"}}>
                            <div className="card-header ">
                               <h5 className='text'>Battery</h5>
                            </div>
                            <div className="card-body">
                                <h6 className='text'>Charging time : Less Than 2 hrs</h6>
                                <h6 className='text'>Power Supply : 5V 1A</h6>
                                <h6 className='text'>Music playtime with BT on and ANC on : up to 20hrs</h6>
                                <h6 className='text'>Music playtime with BT on and ANC off : up to 30hrs</h6>
                                  
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </div>


      </>


    )
}

export default Details;