import React from 'react'
import SpeakerData from './SpeakerData'
import { useCart } from 'react-use-cart';
 



function Speaker() {
    const {addItem} = useCart()
    return (
        <>

            {/* Header part  */}
            <div className="container-fluid bg-speak  py-5">
                <div className="container py-5">
                    <div className="row justify-content-start">
                        <div className="col-md-12">
                            <div className="border-start border-5 border-white ps-5 mb-5">
                                <h6 className="text-warning text-uppercase fw-bold ">Home Audio</h6>
                                <h1 className="display-5 text-uppercase text-white mb-0 fw-bold">Save 50% on all items your
                                    first order</h1>
                            </div>
                            <p className="text-primary fs-4  mb-4">Exhale your worries while inhaling the music...</p>
                            <a href="#SPEAK" className="btn btn-outline-light py-md-3 px-md-5 fw-bolder">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container mt-4 '>

                <div className="row">
                    <div className="col-md-6">

                        <div class="dropdown text-center">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Refinements
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Device Compatality</a></li>
                                <li><a class="dropdown-item" href="#">Colours</a></li>
                                <li><a class="dropdown-item" href="#">Features</a></li>
                            </ul>
                        </div>




                    </div>
                    <div className="col-md-6">
                        <div class="dropdown text-center">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort By
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Relevance</a></li>
                                <li><a class="dropdown-item" href="#">Price High To Low</a></li>
                                <li><a class="dropdown-item" href="#">Price Low To High</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        

        {/* Cards Starts  */}

            <div className='container me-2' id='SPEAK'>
                <div className='row'>
                    {
                        SpeakerData.map((cval) => {

                            return (
                                <>

                                  <div className='col-md-4 mt-5'>

                                    <div className="card" style={{width:"19rem"}}>
                                        <img src={cval.cover} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h4 className="card-title">{cval.BrandName}</h4>
                                                <p className="card-text text-primary fs-6 fw-bold">{cval.Description}</p>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-danger fw-bolder fs-6">{cval.Customer_rating} Ratings</li>
                                                <li className="list-group-item fs-4">₹ {cval.price}</li>
                                            </ul>
                                            <div className="card-body">
                                            <button type="button" class="btn btn-warning me-2"  onClick={() => addItem(cval)}>Add To Cart</button>
                                            <button type="button" class="btn btn-primary">Buy Now</button>
                                            <span><a href='#' className='btn' >View Details</a></span>  
                                            </div>
                                    </div>
                                   </div>

                                
                                </>


                            )
                        }
                        )
                    }
                </div>
            </div>

          

        </>
    )
}

export default Speaker