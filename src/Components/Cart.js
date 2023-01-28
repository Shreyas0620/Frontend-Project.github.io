import React from 'react'
import { useCart } from 'react-use-cart';
import "../assest/Cart.css"



function Cart() {
    const {
      isEmpty,
      totalUniqueItems,
      items,
      cartTotal,
      updateItemQuantity,
      removeItem,
    } = useCart();
  
    if (isEmpty) return(

      <>

      {/* empty cart code  */}
      <div className='container-fluid'>
        <div className='container'>
          <div className='row' >
            <div className='col-md-12' >
              <p className='text-primary fs-3 fw-bold'>Your Shopping Cart </p>
              <hr style={{height:"2px"}}/>
            </div>
            <div className='row-md-12' >
              <p className='text-center mt-5 fs-2'> You have no items in your shopping cart</p>
              <div className='text-center'>
              <a href="/headphone" className="btn btn-outline-dark fw-bolder fs-5">Continue Shopping</a>
              </div>
              <hr className='mt-5' style={{height:"2px"}}/>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid  mt-5' >
        
        <hr/>
        <p className='text-center  fs-5'>Need some help?<span className='text-primary'> Chat now</span> or call 0123-456-789</p>
        <hr />
  
        <div className='container '>
          <div className='row d-flex justify-content-center  '>
            <div className='col-md-8 new-arrival mb-5' style={{height:"56vh"}}>
              <div className='col-md-4 mt-5 ms-5' >
                <p className='text-center fs-2 fw-bold mt-5'>New Arrivals</p>
                <p className='text-center'>Check out the latest accessories.</p>
                <div className='text-center fs-5'>
                  <a style={{textDecoration:"none"}} href='/speaker'>Shop &#x1F6D2;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* empty cart code  ends  */}
      
      </>

    )
  
    return (
      <>
      <div className='container'>

     
        <h1 className='fs-3 text-primary'>Your Shopping Cart ({totalUniqueItems})</h1>
        <hr/>
      <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <p className='fw-bold text-uppercase  ms-4'>Product</p>
        </div>
        <div className='col-md-2'>
          <p className='fw-bold text-uppercase'>Unit Price</p>
        </div>
        <div className='col-md-2'>
          <p className='fw-bold text-uppercase ms-4'>quantity</p>
        </div>
        <div className='col-md-2'>
          <p className='fw-bold text-uppercase text-uppercase ms-5'>total</p>
        </div>

      </div>
      {items.map((item)=>(
        <>
        <div className='container' >
          <div className='row' >
            <div className='col-md-1' >
            <img src={item.cover} width={"100px"}/>
            </div>
            <div className='col-md-2 fw-bold' >
            {item.Brand_Name}
            <div className='remove-button mt-3'>
            <button className='text-danger fw-bold' style={{border:"none"}} onClick={() => removeItem(item.id)}>remove</button>
            </div>
            </div>
            <div className='col-md-3' >
              <div className='unit-price text-center fw-bold'>
                <p className='mt-3'>₹ {item.price}</p>
              </div>
            </div>
            <div className='col-md-2' >
              <div className='quantity mt-1 text-center '>
                <div className='row'>
              <div className='col-md-6   fs-5'>
              <p className='mt-3'> {item.quantity} <i class="fa-solid fa-xmark"></i></p>
              </div>
              <div className='col-md-4 border-box mt-2 '>
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                <i class="fa-regular fa-plus"></i>
              </button>
              <button 
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
               <i class="fa-solid fa-minus"></i>
              </button>
  
              </div>
              </div>
              </div>
            </div>
            <div className='col-md-2' >
              <p className='text-center fw-bold mt-3'>₹ {item.price*item.quantity}</p>
            
            </div>

          </div>
            <hr/>
        </div>
        
        
        
        </>
      ))

      }

      </div>

      <div className='container '>
        <div className='row d-flex justify-content-center '>
          <div className='col-md-6 ' style={{backgroundColor:"GrayText"}}>
            <h4 className='text-warning '>Order Summary</h4>
            
              
              <div className='sub-total'>
              <p className='text-uppercase fw-bold text-info'>Item sub total:-  {cartTotal}</p>
              </div>
              <div className='shipping'>
              <p className='text-uppercase fw-bold text-info'>Shipping :- Free</p>
              </div>
              <hr/>
              
              <div className='grand-total'>
              <p className='text-uppercase fw-bold text-info'>Grand total:-{cartTotal}</p>
   
              </div>
              <div className='tax'>
              <p >* Actual tax will be calculated when your order is processed. Tax may vary slightly from what is displayed here.</p>

              </div>
              <div className='checkout text-center mt-3 mb-3'>
              <button className="btn bg-dark text-white text-uppercase fw-bolder ">checkout</button>
             

              </div>
              
          </div>
        </div>

      </div>


      </div>

      
       
      </>
    );
  }

export default Cart