import { ConnectWallet, useContract, useContractRead, useContractWrite, useAddress, Web3Button} from "@thirdweb-dev/react";
import "./styles/Home.css";
import SlimBar from './components/slimBar/SlimBar';
import {  useState } from "react";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import Web3Modal from "web3modal";
// add CONTRACT ADDRESS from .env then import here


export default function Home() {



// // True if user has connected their wallet, false otherwise
//   const [walletConnected, setWalletConnected] = useState(false);
//   // Number of proposals created in the DAO
//   const [numProjects, setNumProjects] = useState("0");
//   // Array of all proposals created in the DAO
//   const [projects, setProjects] = useState([]);
//   // One of "Create Proposal" or "View Proposals" 
//   const [selectedTab, setSelectedTab] = useState("");
//   // True if waiting for a transaction to be mined, false otherwise.
//   const [loading, setLoading] = useState(false);
//   // Fake NFT Token ID to purchase. Used when creating a proposal.
//   const [projectIndex, setprojectIndex] = useState("");

  
  const address = useAddress();

  // const { contract } = useContract("0x9b517CFdb6505b2ce56A637457C5aB3ebC340c5c");

  // const { numOfProjects,  } = useContractRead( contract, "getNumProjects");

  // const {
  //        mutate: createProject
  //        } = useContractWrite(contract, createProject["_owner", "_pName", "_description", "_target", "_deadline"]);

  // const {
  //         mutate: donateOnProject
  //         } = useContractWrite(contract, donateOnProject["_projectIndex", "_donator", "_amount"]);





  // //GET NUM OF PROJECTS
  // const GetNumProjects = async () =>{
  //   const { contract } = useContract("0x9b517CFdb6505b2ce56A637457C5aB3ebC340c5c");
  //   const { numOfProjects, isLoading, error } = useContractRead(
  //     contract,
  //     "getNumProjects",
  //   );
  //     }

  
    
// // CREATE PROJECT
// const CreateProject = async (_owner, _pName, _description, _target, _deadline) => {
  
//     const { contract } = useContract("0x9b517CFdb6505b2ce56A637457C5aB3ebC340c5c");
//     const {
//     mutate: createProject,
//     isLoading,
//     error,
//     } = useContractWrite(contract, createProject[_owner, _pName, _description, _target, _deadline]);
//     console.log(_owner);
   
// };

// const demo = async () => {
//   console.log("Demo working");
// }


// // // DONATE ON PROJECT
// const DonateOnProject = async (_projectIndex, _donator, _amount) => {
//     const { contract } = useContract("0x9b517CFdb6505b2ce56A637457C5aB3ebC340c5c");
//     const {
//     mutate: donateOnProject,
//     isLoading,
//     error,
//     } = useContractWrite(contract, donateOnProject[_projectIndex, _donator, _amount]);
    
// };

// //withdrawFunding
// const WithdrawFunding = async (_projectIndex, _pOwner) => {
//     const { contract } = useContract("0x9b517CFdb6505b2ce56A637457C5aB3ebC340c5c");
//     const {
//     mutate: withdrawFunding,
//     isLoading,
//     error,
//     } = useContractWrite(contract, withdrawFunding[_projectIndex,_pOwner]);
    
// };
// const FetchProjectById = async (id) => {
//     const { contract } = useContract("0x9b517CFdb6505b2ce56A637457C5aB3ebC340c5c");
//     // const provider = await getProviderOrSigner();
//     // const daoContract = getDaoContractInstance(provider);
//     const { projects, isLoading, error } = useContractRead(
//       contract,
//       "projects",
//     );
//     const project = await projects(id);
//     const parsedProject = {
//       owner: project.owner.toString(),
//       pName: project.pName.toString(),
//       pdescription: project.pdescription.toString(),
//       target: project.target.toString(),
//       timeCreated: project.timeCreated.toString(),
//       deadline: new Date(parseInt(project.deadline.toString()) * 1000),
//       amountCollected: project.amountCollected.toString(),

//     };
//     console.log(project);
//     return parsedProject;
  
// };

// const FetchAllProjects = async () => {
 
//     const projects = [];
//     for (let i = 0; i < numProjects; i++) {
//       const project = await FetchProjectById(i);
//       projects.push(project);
//     }
//     setProjects(projects);
//     return projects;
 
// };

// Piece of code that runs everytime the value of `selectedTab` changes
  // Used to re-fetch all proposals in the DAO when user switches
  // to the 'View Proposals' tab
  // useEffect(() => {
  //   if (selectedTab === "View Projects") {
  //     FetchAllProjects();
  //   }
  // }, [selectedTab]);

  // Render the contents of the appropriate tab based on `selectedTab`

  // UNVOMMENT LATER

  // function renderTabs() {
  //   if (selectedTab === "Create Project") {
  //     return renderCreateProjectTab();
  //   } else if (selectedTab === "View Projects") {
  //     return renderViewProjectsTab();
  //   }
  //   return null;
  // }

  // <div className="App">
  //     <SlimBar></SlimBar>
  //   </div>
  const { contract } = useContract("0x9b517CFdb6505b2ce56A637457C5aB3ebC340c5c");

  // const { data: getNumProjects, isLoading: loadingName } = useContractRead(
  //   contract,
  //   "getNumProjects", // The name of the view/mapping/variable on your contract
  // );




// WEB3 CODE BELOW THAT IS RELEVANT BUT USED IN A DIFFERENT FILE

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
//   console.log(parsedProject);
//   return parsedProject;

// }



// const fetchAllProjects = async () => {
//   try {
//     const projects = [];
//     for (let i = 0; i < numProjects; i++) {
//       const project = await FetchProjectById(i);
//       projects.push(project);
//     }

//     console.log("Working");
//     console.log(projects);

//     setProjects(projects);
//     return projects;
//   } catch (error) {
//     console.error(error);
//   }
// };

// const { data: numOfProjects, isLoading } = useContractRead(contract, "getNumProjects");

  return (
    <div>

    <ConnectWallet/>
    {/* <button type="button" className="btn btn-primary" onClick={() => console.log(projectsList)}>Demo</button> */}


    {/* <Web3Button>
                contractAddress=contract
                action = {() => {console.log(numOfProjects.toString)}}
                
  
                </Web3Button> */}
     <SlimBar 
    //  FetchAllProjects={FetchAllProjects} 
    //  CreateProject = {CreateProject} 
    //  demo = {demo}
    //  getNumProjects
     
     >
      </SlimBar>     
  </div>
  
  );
}

