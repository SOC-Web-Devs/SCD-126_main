import React, {useState} from 'react'
import { Card } from 'primereact/card';
import { Link } from "react-router-dom";
const PrimeUiCard = ( props
  // {
//   OwnerName,
//   ProjectName,
//   ProjectDesciption,
//   TargetAmount,
  
// }
) => {
    const header = (
        <img style={{width:'100%' , borderRadius:'10px'}} alt="Card" src={props.image} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    );
    const footer = (
        <div className='container' style={{display:'flex', marginBottom:'5px'}}>
        <span className="d-flex align-items-center ">
        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" height={25} alt="Black and White Portrait of a Man" loading="lazy" />
      </span><h6 style={{ fontSize:'13px', marginTop:'5px'}}>&nbsp;<span style={{color:'#6c6d7b'}}>by</span>&nbsp;Total Backers</h6>
        </div>
    );
    const [data, setData] = useState({ 
      address: props.address,
      pName: props.pName,
      pDescription: props.pDescription,
      ptarget: props.ptarget,
      deadline: props.deadline,
      amountCollected: props.amountCollected,
      image: props.image,
      pId: props.pDescription,
    });
    return (
      <Link to='/demo' state={{data : data}}> <div style={{height:'auto', width:'350px',display:'inline-block', marginTop:'20px'}}>
       <Card  style={{ width: '350px', height:'auto' ,backgroundColor:'#1c1c24' , borderRadius:'10px'}} footer={footer} header={header}>
            <div>
            <div>
            <p className='pi pi-folder ' style={{color:'#6c6d7b'}}>&nbsp;Education</p>
            </div>
            <div>
            <h6>{props.pName}</h6>
            </div>
            <div>
            <p style={{fontSize:'14px', lineHeight:'14pt', color:'#6c6d7b'}}>{props.pDescription}</p>
            </div>
            <div >
            <div className='row'>
            <div className='col-6'><h6 style={{color:'#d6d6dd'}} >TargetAmount</h6></div>
            <div className='col-6'><h6 style={{color:'#d6d6dd'}}>{props.ptarget}</h6></div>
            </div>
            
            </div>
            <div style={{height:'auto'}}>
            <div className='row'>
            <div className='col-6'><h6 style={{fontSize:'13px' , color:'#6c6d7b',wordWrap:'break-word'}} >Amount reached</h6></div>
            <div className='col-6'><h6 style={{fontSize:'13px' , color:'#6c6d7b' ,wordWrap:'break-word'}}>{props.amountCollected}</h6></div>
            </div>
            </div>
            </div>
            
               </Card> 
           </div></Link>
          
     )
   }
   
   export default PrimeUiCard
   