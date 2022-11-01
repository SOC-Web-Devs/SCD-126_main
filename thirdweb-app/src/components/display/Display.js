import React from "react";
import PrimeUiCard from "../primeUiCard/PrimeUiCard";
import GetProject from "../GetProject/GetProject.js";
import VideoPrimeUiCard from "../videoPrimeUiCard/VideoPrimeUiCard";
import { ConnectWallet, useContract, useContractRead, useContractWrite, useAddress} from "@thirdweb-dev/react";

const Display = () => {

  const { contract } = useContract("0x9831EEbc5801FD679c850abF7387a30647179B58");

  let projectss = [];

  //todo: call this function somewhere
  const GetProjects = async () => {
    for(let i =0; i<3; i++){
      console.log(GetProject(i));
      console.log(GetProject(i));

      projectss.push(GetProject(i));
        }
  }


const address = useAddress();

// const FetchProject = async (i) => {
//   const { data, isLoading } = useContractRead(contract, "getProject", i);
//   console.log(data);
//   return data

// }

//   let projects = [];
//   const GetProjects = async () => {
//     for(let i =0; i<3; i++){
//       projects.push(FetchProject(i));
//         }
//   }
   
  let project = [
    [
      "0x26895459574899058390",
      "zayyanusmani",
      "pDescription1",
      "ptarget1",
      "timeCreated1",
      "deadline1",
      "amountCollected",
    ],
    [
      "0x26895459574899058390",
      "pName2",
      "pDescription2",
      "ptarget2",
      "timeCreated2",
      "deadline2",
      "amountCollected",
    ],
    [
      "0x26895459574899058390",
      "pName3",
      "pDescription3",
      "ptarget3",
      "timeCreated3",
      "deadline3",
      "amountCollected",
    ],
    [
      "0x26895459574899058390",
      "pName3",
      "pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3pDescription3",
      "ptarget3",
      "timeCreated3",
      "deadline3",
      "amountCollected",
    ],
    [
      "0x26895459574899058390",
      "pName3",
      "pDescription3",
      "ptarget3",
      "timeCreated3",
      "deadline3",
      "amountCollected",
    ],
    [
      "0x26895459574899058390",
      "pName3",
      "pDescription3",
      "ptarget3",
      "timeCreated3",
      "deadline3",
      "amountCollected",
    ],
  ];

  return (
    <div className="container-fluid">
      <div style={{ height: "200px", marginBottom: "70px" }}>
        <h6 style={{ marginBottom: "20px" }}>Your Campaign(4)</h6>
        <div className="row" style={{ marginBottom: "70px" }}>
          <div className="col">
            <video
              style={{ height: "200px", width: "100%", borderRadius: "16px" }}
              controls
            >
              <source src="./Videos/video1.mp4" type="video/mp4" />{" "}
            </video>
          </div>
          <div className="col">
            <VideoPrimeUiCard></VideoPrimeUiCard>
          </div>
        </div>
      </div>

      <h6 style={{ marginBottom: "20px" }}>Popular Campaign</h6>
      <div className="row" style={{ marginBottom: "70px" }}>
       
          {project.map((p, index) => (
            <div style={{ display: "block" }} className="col-4">
              <PrimeUiCard
                address={project[index][0]}
                pName={project[index][1]}
                pDescription={project[index][2]}
                ptarget={project[index][3]}
                timeCreated={project[index][4]}
                deadline={project[index][5]}
                amountCollected={project[index][6]}
              ></PrimeUiCard>
            </div>
          ))}
       
      </div>

      <h6 style={{ marginTop: "150px", marginBottom: "50px" }}>
        Recent Campaign
      </h6>
      <div className="row" style={{ marginBottom: "70x" }}>
        <div className="col-3">
          <PrimeUiCard
            address={project[0][0]}
            pName={project[0][1]}
            pDescription={project[0][2]}
            ptarget={project[0][3]}
            timeCreated={project[0][4]}
            deadline={project[0][5]}
            amountCollected={"project[0][6]"}
          ></PrimeUiCard>
        </div>
        <div className="col-3">
          <PrimeUiCard></PrimeUiCard>
        </div>
        <div className="col-3">
          <PrimeUiCard></PrimeUiCard>
        </div>
      </div>
    </div>
  );
};

export default Display;
{
  /* <p>address: {project[index][0]}</p>
    <p>pName: {project[index][1]}</p>
    <p>pDescription: {project[index][2]}</p>
    <p>pTarget: {project[index][3]}</p> */
}
