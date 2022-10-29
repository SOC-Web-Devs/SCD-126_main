import React from 'react'
import PrimeUiCard from '../primeUiCard/PrimeUiCard'
import VideoPrimeUiCard from '../videoPrimeUiCard/VideoPrimeUiCard'
const Display = () => {

  
  return (
    <div className='container-fluid'>
    <div style={{height:'200px' , marginBottom:'70px'}}>
    <h6 style={{marginBottom:'20px'}}>Your Campaign(4)</h6>
    <div className="row" style={{marginBottom :'70px'}}>
    <div className="col"><video style={{height:'200px' , width:'100%' , borderRadius:'16px'}} controls >
    <source src="./Videos/video1.mp4" type="video/mp4"/> </video></div>
    <div className="col"><VideoPrimeUiCard></VideoPrimeUiCard></div>       
  </div>
    </div>



     <h6 style={{marginBottom:'20px'}}>Popular Campaign</h6>
     <div className="row" style={{marginBottom :'70px'}}>
<div className="col-3"><PrimeUiCard ></PrimeUiCard></div>
<div className="col-3"><PrimeUiCard></PrimeUiCard></div>
<div className="col-3"><PrimeUiCard></PrimeUiCard></div>
<div className="col-3"><PrimeUiCard></PrimeUiCard></div>
</div>


<h6 style={{marginTop:'150px', marginBottom:'50px'}}>Recent Campaign</h6>
<div className="row" style={{marginBottom :'70x'}}>
<div className="col-3"><PrimeUiCard></PrimeUiCard></div>
<div className="col-3"><PrimeUiCard></PrimeUiCard></div>
<div className="col-3"><PrimeUiCard></PrimeUiCard></div>
</div>
</div>  
  )
}

export default Display
