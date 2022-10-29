import React from 'react'
import { Card } from 'primereact/card';
import 'primeicons/primeicons.css';
import { Link } from "react-router-dom";
const PrimeUiCard = ({
  OwnerName,
  ProjectName,
  ProjectDesciption,
  TargetAmount,
  startDate
}) => {
    const header = (
        <img style={{width:'15em' , borderRadius:'10px'}} alt="Card" src="assets/images/project1.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    );
    const footer = (
        <div className='container' style={{display:'flex', marginBottom:'5px'}}>
        <span className="d-flex align-items-center ">
        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" height={25} alt="Black and White Portrait of a Man" loading="lazy" />
      </span><h6 style={{ fontSize:'13px', marginTop:'5px'}}>&nbsp;<span style={{color:'#6c6d7b'}}>by</span>&nbsp;Total Backers</h6>
        </div>
    );
  return (
    <div style={{height:'20em'}}>
    <Card  style={{ width: '15em', height:'auto' ,backgroundColor:'#1c1c24' , borderRadius:'10px'}} footer={footer} header={header}>
         <div className='container'>
         <div>
         <p className='pi pi-folder my-2' style={{color:'#6c6d7b'}}>&nbsp;Education</p>
         </div>
         <div>
         <h6>{ProjectName}</h6>
         </div>
         <div>
         <p style={{fontSize:'14px', lineHeight:'14pt', color:'#6c6d7b'}}>{ProjectDesciption}</p>
         </div>
         <div style={{display:'flex'}}>
         <div className='row'>
         <div className='col-6'><h6 style={{color:'#d6d6dd'}} >{TargetAmount}</h6></div>
         <div className='col-6'><h6 style={{marginLeft:'55px',color:'#d6d6dd'}}>173</h6></div>
         </div>
         
         </div>
         <div style={{display:'flex'}}>
         <h6 style={{fontSize:'13px' , color:'#6c6d7b'}}>Raised of 1900$</h6><h6 style={{marginLeft: 'auto' , fontSize:'13px' , color:'#6c6d7b'}}>Total Backers</h6>
         </div>
         </div>
            </Card> 
        </div>
       
  )
}

export default PrimeUiCard
