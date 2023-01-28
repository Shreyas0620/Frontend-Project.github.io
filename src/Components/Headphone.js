import React, { useState } from 'react'
import HeadphoneData from './HeadphoneData'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart';










function Headphone() {
  
  const {addItem} = useCart()


  // sorting Cards According to price 
  const [prices,setPrices]=useState(HeadphoneData)
  const sortPricesLowToHigh=()=>{
    const sortedPrices = prices.sort((a,b)=> a.price - b.price);
    setPrices(sortedPrices);


    <div className='container me-2' id='list'>
    <div className='row'>
      {
                    sortedPrices.map((cval) => {

                        return (
                            <>

                              <div className='col-md-4 mt-5'>

                                <div className="card" style={{width:"19rem"}}>
                                    <img src={cval.cover} className="card-img-top headphone-cards" alt="..."/>
                                        <div className="card-body">
                                            <h4 className="card-title">{cval.Brand_Name}</h4>
                                            <p className="card-text text-primary fs-6 fw-bold">{cval.Description}.</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item text-danger fw-bolder fs-6">{cval.customer_Rating} Ratings</li>
                                            <li className="list-group-item fs-4 text-dark"> {cval.price} </li>
                                        </ul>
                                        <div className="card-body">
                                          
                                        <button type="button" class="btn btn-warning me-2"  onClick={() => addItem(cval)
                                        } >Add To Cart</button>
                                        <button type="button" class="btn btn-primary">Buy Now</button>
                                       
                                        <Link to="/Details" className="btn">View Details</Link>
                                           
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
    
    
  }

  
  // sorting ends 




  return (
    <>
      {/* Header part  */}
      <div className="container-fluid bg-offer py-5">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-md-12">
              <div className="border-start border-5 border-white ps-5 mb-5">
                <h6 className="text-warning text-uppercase fw-bold ">Wireless Headphones</h6>
                <h1 className="display-5 text-uppercase text-white mb-0 fw-bold">Save 50% on all items your
                  first order</h1>
              </div>
              <p className="text-primary fs-4  mb-4">Effortless. Simple. Powerful.  You'll hear every note with a new sense of clarity...</p>
              <a href="#list" className="btn btn-outline-light py-md-3 px-md-5 fw-bolder">Shop Now</a>
            </div>
          </div>
        </div>
      </div>


      {/* card part starts */}





      {/* <h1 className="text-center mt-3">Top Notch Headphones</h1> */}
      <div className='container mt-4 '>

        <div className="row">
          <div className="col-md-6">


            <div class="dropdown text-center">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Refinements
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
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
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" id='sort' >
                <li><a class="dropdown-item" href="#">Relevance</a></li>
                <li><a class="dropdown-item" href="#">Price High To Low</a></li>
                <li><a class="dropdown-item" href="#"  onClick={sortPricesLowToHigh}  >Price Low To High</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <div className='container me-2' id='list'>
        <div className='row'>
          {
                        HeadphoneData.map((cval) => {

                            return (
                                <>

                                  <div className='col-md-4 mt-5'>

                                    <div className="card" style={{width:"19rem"}}>
                                        <img src={cval.cover} className="card-img-top headphone-cards" alt="..."/>
                                            <div className="card-body">
                                                <h4 className="card-title">{cval.Brand_Name}</h4>
                                                <p className="card-text text-primary fs-6 fw-bold">{cval.Description}.</p>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-danger fw-bolder fs-6">{cval.customer_Rating} Ratings</li>
                                                <li className="list-group-item fs-4">₹ {cval.price}/-</li>
                                            </ul>
                                            <div className="card-body">
                                              
                                            <button type="button" class="btn btn-warning me-2"  onClick={() => addItem(cval)} >Add To Cart</button>
                                            <button type="button" class="btn btn-primary">Buy Now</button>
                                           
                                            <Link to="/Details" className="btn">View Details</Link>
                                               
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

export default Headphone;