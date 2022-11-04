import React from 'react'
import { Card } from 'primereact/card';

const VideoPrimeUiCard = () => {
    // const footer = (
    //     <div className='container' >

    //     <div className='grid' style={{width:'100%'}}>
    //     <div className='col-4 footerby'>Raised of 2500$</div>
    //     <div className='col-4 footerby'>Total Backers</div>
    //     <div className='col-4 footerby'>Days Left</div>

    //     </div>
    //     </div>
    // );
  return (
    <div style={{height:'auto' , width:'90%'}}>
    <Card  style={{    borderRadius:'10px' , backgroundColor:'#13131a'}}>
    <div className='container'>
    <div>
    <p className='pi pi-folder' style={{color:'#6c6d7b'}}>&nbsp;Architecture</p>
    </div>
    <div>
    <h6 >Remake- We Make Architecture Exhibition</h6>
    </div>
    <div>
    <p style={{fontSize:'14px', lineHeight:'14pt', color:'#6c6d7b'}}>Remake, we make an acrchitecture exhibition about social agency</p>
    </div>
    <div >
    <div className="progress" style={{height:'5px'}}>
    <div className="progress-bar w-50" style={{backgroundColor:'#32de84'}} role="progressbar"  aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
  </div>
    </div>
    <div style={{display:'flex', marginBottom:'5px', marginTop:'10px'}}>

    <div className='row' style={{width:'100%'}}>
      <div style={{display:'flex'}}>
    <div className='col-4 footerup'>$2000</div>
    <div className='col-4 footerup'>173</div>
    <div className='col-4 footerup'>30</div>
    </div>
    <div style={{display:'flex'}}>
    <div style={{color:'#6c6d7b'}}  className='col-4 footerup'>Raised of 2500$</div>
    <div style={{color:'#6c6d7b'}} className='col-4 footerup'>Total Backers</div>
    <div style={{color:'#6c6d7b'}} className='col-4 footerup'>Days Left</div>
    </div>
    </div>
    </div>

    </div>
       </Card>
      
   </div>
  )
}

export default VideoPrimeUiCard
