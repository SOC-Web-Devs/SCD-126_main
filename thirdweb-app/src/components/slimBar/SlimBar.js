import React,{useState} from 'react'
import FundMe from '../fundMe/FundMe'
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Display from '../display/Display';
// import GetProject from '../GetProject/GetProject'
import { Web3Button } from "@thirdweb-dev/react";
import { ConnectWallet, useContract, useContractRead, useContractWrite, useAddress} from "@thirdweb-dev/react";
import { Route, Routes } from 'react-router-dom';
const SlimBar = ({demo}, getNumProjects) => {
const [OwnerName, setValue1] = useState('');
const [ProjectName, setValue2] = useState('');
const [ProjectDesciption, setValue3] = useState('');
const [TargetAmount, setValue4] = useState('');
const [endDate, setEndDate] = useState(new Date());


const { contract } = useContract("0x9831EEbc5801FD679c850abF7387a30647179B58");




const address = useAddress();

// True if user has connected their wallet, false otherwise
const [walletConnected, setWalletConnected] = useState(false);
// Number of proposals created in the DAO
const [numProjects, setNumProjects] = useState("0");
// Array of all proposals created in the DAO
const [projects, setProjects] = useState([]);
// One of "Create Proposal" or "View Proposals" 
const [selectedTab, setSelectedTab] = useState("");
// True if waiting for a transaction to be mined, false otherwise.
const [loading, setLoading] = useState(false);
// Fake NFT Token ID to purchase. Used when creating a proposal.
const [projectIndex, setprojectIndex] = useState("");


// const{ data: projectLength} = useContractRead(contract, projects.length);

// const FetchProjectById = async (id) => {
//   const{ data: fetchedProject} = useContractRead(contract, projects[id])
//   const parsedProject = {
//     owner: fetchedProject.owner.toString(),
//     pName: fetchedProject.pName.toString(),
//     pdescription: fetchedProject.pdescription.toString(),
//     target: fetchedProject.target.toString(),
//     timeCreated: new Date(parseInt(fetchedProject.timeCreated.toString()) * 1000),
//     deadline: new Date(parseInt(fetchedProject.deadline.toString()) * 1000),
//     amountCollected: fetchedProject.amountCollected
//   };
//   console.log('FetchProjectById');
//   console.log(parsedProject);
//   console.log(projectLength);

//   return parsedProject;

// }

const { mutateAsync: createProject } = useContractWrite(contract, "createProject")

  const call = async () => {
    try {
      const data = await createProject([ OwnerName, ProjectName, ProjectDesciption, TargetAmount, "4234" ]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }
 

  // const nOP = async () => {
      
  //     setNumProjects(numProjects.toString());
  // }
  


// const FetchAllProjects = async () => {
//   try {
//     const projects = [];
//     for (let i = 0; i < 1; i++) {
//       const project = await FetchProjectById(i);
//       projects.push(project);
     
//     }

//     console.log("fetchAllProjects");
//     console.log(projects.length);
//     console.log(numOfProjects);

//     setProjects(projects);
//     return projects;
//   } catch (error) {
//     console.error(error);
//   }
// };



// const { numOfProjects, wait  } = useContractRead(contract, "getNumProjects");

// const { numOfProjectss, waits  } = useContractRead(contract, "getNumProjects");

// console.log("here",numOfProjectss)
// const GetProjects = async () => {
//   var text = await contract.call("getNumProjects");
//   console.log("there",);
//   console.log(numOfProjects);

// }
// const { data, isLoading } = useContractRead(contract, "numProjects")
const { project, isLoading } = useContractRead(contract, "getProject", 0)


  return ( 
    <div className="container-fluid">
    <div className="row" >
      <div className="col-sm-auto  sticky-top" style={{width:'70px' ,height:'auto' , backgroundColor:'#13131a'}}>    
      <div className="d-flex flex-sm-column flex-row flex-nowrap  align-items-center sticky-top my-3" style={{backgroundColor: '#1c1c24' , borderRadius:'10px' , height:'50px'}}>
          <a href="/" className="d-block p-3 link-dark text-decoration-none"  data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
          <i style={{color:'#4acd8d'}} className="fa-solid fa-square"></i>
          </a> 
        </div>
    {/* <button type="button" className="btn btn-demo2" onClick={() => {console.log(numOfProjects)}}>Submit</button>  */}
    {/* <button type="button" className="btn btn-demo2" onClick={() => FetchAllProjects()}>Submit 2</button>  */}
    {/* <button type="button" className="btn btn-demo2" onClick={() => {console.log(data.toString())}}> Submit 3</button>  */}
    <button type="button" className="btn btn-demo3" onClick={() => {console.log(project.toString())}}> Submit 4</button> 

    
    
      
    
      <div className="d-flex flex-sm-column flex-row flex-nowrap  align-items-center sticky-top my-5" style={{backgroundColor: '#1c1c24' , borderRadius:'16px' , height:'500px'}}>
          <a href="/" className="d-block p-3 link-dark text-decoration-none"  data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
          <i style={{color:'#808191'}} className="fa-solid fa-square"></i>
          </a>
          <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center justify-content-between w-100 px-3 align-items-center">
            <li className="nav-item">
               
              <i style={{color:'#808191'}} className="fa-sharp fa-solid fa-bullhorn"></i>
             
            </li>
            <li className='py-3 px-2'>
             
              <i style={{color:'#808191'}} className="fa-solid fa-money-bills"></i>
             
            </li>
            <li className='py-1 px-2'>
              
            <i style={{color:'#808191'}} className="fa-solid fa-user"></i>
             
            </li>
            <li className='py-2 px-2'>
              
            <i style={{color:'#808191'}} className="fa-solid fa-arrow-right-from-bracket"></i>
             
            </li>
            
            <li>
              <a href="/" className="nav-link py-3 px-2"  data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
                <i  className="bi-people fs-1" />
              </a>
            </li>
          </ul>
          <div className="dropdown" style={{marginBottom:'20px'}}>
            <i style={{color:'#808191'}} className="fa-solid fa-sun"></i> 
          </div>
        </div>
      </div>

      <div className="col-sm p-3 min-vh-100">
        {/* content */}
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#13131a'}}>
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <div className="input-group rounded">
        
            {/**<input type="search" style={{width:'400px' , height:'40px' , borderRadius:'16px',border:'none', backgroundColor:'#1c1c24', color:'white'}} className="form-control" placeholder="Do Fundrise Now" aria-label="Search" aria-describedby="search-addon" />
        <span className="input-group-text border-0" style={{borderRadius:'18px',height:'35px',marginTop:'2px', width:'60px', backgroundColor:'	#4acd8d' , color:'white' , zIndex:'1'}} id="search-addon">
          <i style={{marginLeft:'10px'}} className="fas fa-search" />
        </span>
         */}
  <form className='formup' role="search" id="form">
  <input className='inputform' type="search" id="query" name="q"
   placeholder="Do Fundrise Now"
   aria-label="Search through site content"/>
  <button className='btnbtn'>
    <svg className='svg' viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
  </button>
</form>
      </div>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className="d-flex align-items-center">
            {/* Notifications */}
            <div style={{color:'#6c6d7b'}} className="dropdown">
              <span  className="text-reset me-3 dropdown-toggle hidden-arrow" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
              <i style={{color:'#6c6d7b'}} className="fa-solid fa-arrow-trend-up"></i>
                <span className="" style={{color:'#6c6d7b'}}>Fundraising For</span>
              </span>
            </div>
            {/* Button */}
            <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  style={{backgroundColor:'#8c6dfd' , color:'white' , width:'200px' , marginRight:'20px'}} className="btn">Start A Campaign</button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
               {/** */}
               <div className='container'>
               <div className='row'>
               <label>Owner Name<InputText value={OwnerName} style={{width:'100%'}} onChange={(e) => setValue1(e.target.value)} /></label>
               </div>
               <div className='row'>
               <label>Project Name <InputText value={ProjectName} style={{width:'100%'}} onChange={(e) => setValue2(e.target.value)} /></label>
               </div>
               <div className='row'>
               <label>Project Description <InputText value={ProjectDesciption} style={{width:'100%'}} onChange={(e) => setValue3(e.target.value)} /></label>
               </div>
               <div className='row'>
               <label>Target Amount<br></br> <InputNumber inputId="integeronly" style={{width:'200px'}} value={TargetAmount} onValueChange={(e) => setValue4(e.value)} /> </label>
               </div>
               <div className='row'>
               <label>Project Deadline <br></br>  <DatePicker
               selected={endDate}
               onChange={date => setEndDate(date)}
               showTimeSelect
               timeFormat="HH:mm"
               timeIntervals={15}
               timeCaption="time"
               dateFormat="MMMM d, yyyy h:mm aa"
             />  </label>
               </div>
               </div>
              </div>
              <div className="modal-footer">
              <button type="button" className="btn btn-demo3" onClick={() => {call()}  }>Submit</button> 
              <button type="button" className="btn btn-demo3" onClick={() => {console.log(OwnerName)}  }>print </button> 
  
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                {/* <button type="button" className="btn btn-primary" onClick={() => demo(OwnerName, ProjectName, ProjectDesciption, TargetAmount, endDate)}>Submit</button> */}
                {/* <button type="button" className="btn btn-demo" onClick={() => createProject}>Submit</button>  */}
                {/* <button type="button" className="btn btn-demo2" onClick={() => getNumProjects}>Submit</button>  */}
                {/* <button type="button" className="btn btn-view" onClick={props.FetchAllProjects}>view testing btn</button> */}
                {/* <Web3Button>
                contractAddress="0x9b517CFdb6505b2ce56A637457C5aB3ebC340c5c"
                action={(contract) => contract.getNumProjects()}
  
                </Web3Button> */}
              </div>
            </div>
          </div>
        </div>
            {/* Avatar */}
            <div className="dropdown">
              <span className="d-flex align-items-center " id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" height={40} alt="Black and White Portrait of a Man" loading="lazy" />
              </span>
           
            </div>
          </div>
          {/* Right elements */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
        <hr />
        {/* <Routes>
      <Route path='/' element={<Display></Display>}></Route>
      <Route path='/FundMe' element={<FundMe></FundMe>}></Route>
    </Routes> */}
    <Display>
      
    </Display>
      </div>
    </div>
  </div>
  )
}

export default SlimBar
