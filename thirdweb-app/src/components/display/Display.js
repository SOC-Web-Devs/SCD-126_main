import React from "react";
import PrimeUiCard from "../primeUiCard/PrimeUiCard";
import VideoPrimeUiCard from "../videoPrimeUiCard/VideoPrimeUiCard";
import { ConnectWallet, useContract, useContractRead, useContractWrite, useAddress} from "@thirdweb-dev/react";
import { useEffect, useRef, useState } from "react";


const Display = () => {



const { contract } = useContract("0x80aAafAE9A9552184513db2dB6DC04538cf4753a");
const [project, setProjects] = useState([]);


const cal = async () => {
  const data2 = await contract.call("getNumProjects");
  
  let txt  = data2.toString();
  // console.log(txt);
  return txt;
  } 
  
  // let project = [];
const getProject = async () =>  {
  var noOfProj = parseInt(await cal());
  let projects = [];
  for (let i = 0; i < noOfProj ; i++){
    // let temp = [];

    const data = await contract.call("getProject", i);
    let date = data[4].toString();
    date = new Date(parseInt(date) * 1000);
    // console.log("********")
    console.log("date",date);

    const parsedProject = {
      address: data[0],
      pName: data[1],
      pDescription:  data[2],
      target: data[3].toString(),
      deadline: Date(data[4].toString()),
      
      amountCollected: data[5].toString(),
      image: data[6],
      pId: i,
    };
    projects.push(parsedProject);
    // console.log("projects",projects)
    // console.log("projects[0]",projects[0])
    // console.log("projects[0][0]",projects[0][0])

    // console.log("projects type",typeof(projects))
    // console.log("projects[0] type",typeof(projects[0]))

    // // console.log("data SPECIFIC TYPE",typeof(data[0]));
    // console.log("data",data);
    // console.log("temp",temp);
    // console.log("type of data",typeof(data));
    // console.log("********")
   
  }
  setProjects(projects);

  console.log(projects)
}    

  // let project = [
  //   [
  //     "0x26895459574899058390",
  //     "zayyanusmani",
  //     "pDescription1",
  //     "ptarget1",
  //     "timeC         reated1",
  //     "deadline1",
  //     "amountCollected",
  //   ],
  //   [
  //     "0x26895459574899058390",
  //     "pName2",
  //     "pDescription2",
  //     "ptarget2",
  //     "timeCreated2",
  //     "deadline2",
  //     "amountCollected",
  //   ],
  //   [
  //     "0x26895459574899058390",
  //     "pName3",
  //     "pDescription3",
  //     "ptarget3",
  //     "timeCreated3",
  //     "deadline3",
  //     "amountCollected",
  //   ],
  //   [
  //     "0x26895459574899058390",
  //     "pName3",
  //     "pDescription3",
  //     "ptarget3",
  //     "timeCreated3",
  //     "deadline3",
  //     "amountCollected",
  //   ],
  //   [
  //     "0x26895459574899058390",
  //     "pName3",
  //     "pDescription3",
  //     "ptarget3",
  //     "timeCreated3",
  //     "deadline3",
  //     "amountCollected",
  //   ],
  //   [
  //     "0x26895459574899058390",
  //     "pName3",
  //     "pDescription3",
  //     "ptarget3",
  //     "timeCreated3",
  //     "deadline3",
  //     "amountCollected",
  //   ],
  // ];

  useEffect(() => {
    getProject();
  })

  return (
    <div className="">
      <div style={{  marginBottom: "70px" }}>
        <h6 style={{ marginBottom: "20px" }}>Your Campaign(4)</h6>
        <div className="grid" style={{ marginBottom: "70px" }}>
          <div className="col-12 md:col-6 lg:col-6">
            {/* <video
              style={{ height: "auto", width: "100%", borderRadius: "16px" }}
              controls
            >
              <source src="./Videos/video1.mp4" type="video/mp4" />{" "}
            </video> */}
       <img style={{width:'100%' , borderRadius:'10px'}} alt="Card" src="assets/images/project1.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <VideoPrimeUiCard></VideoPrimeUiCard>
          </div>
        </div>
      </div>

      <h6 style={{ marginBottom: "20px" }}>Popular Campaign</h6>
      {/* <div className="grid">
  <div className="col-12 md:col-6 lg:col-3">A</div>
  <div className="col-12 md:col-6 lg:col-3">B</div>
  <div className="col-12 md:col-6 lg:col-3">C</div>
  <div className="col-12 md:col-6 lg:col-3">D</div>
</div> */}

      {/* <div className="grid" style={{ marginBottom: "70px" }}>
       
          {project.map((p, index) => (
            <div  className="col-12 md:col-6 lg:col-4">
              <PrimeUiCard
                address={p[index][0]}
                pName={p[index][1]}
                pDescription={p[index][2]}
                ptarget={p[index][3]}
                timeCreated={p[index][4]}
                deadline={p[index][5]}
                amountCollected={p[index][6]}
              ></PrimeUiCard>
            </div>
          ))}
       
      </div> */}
      <div className="grid" style={{ marginBottom: "70px" }}>
      {/* address: data[0],
      pName: data[1],
      pDescription:  data[2],
      timeCreated: Date(data[4].toString()),
      deadline: Date(data[5].toString()),
      target: data[3].toString(),
      amountCollected: data[6].toString(), */}
      {project.map((p, index) => (
         <div  className="col-12 md:col-6 lg:col-4">
           <PrimeUiCard
             address={p.address}
             pName={p.pName}
             pDescription={p.pDescription}
             ptarget={p.target}  
             deadline={p.deadline}
             amountCollected={p.amountCollected}
             image={p.image}
             pId = {p.pDescription}
           ></PrimeUiCard>
         </div>
       ))}
    
   </div>

      <h6 style={{ marginTop: "150px", marginBottom: "50px" }}>
        Recent Campaign
      </h6>
      {/* <div className="grid" style={{ marginBottom: "70x" }}>
        <div className="col-12 md:col-6 lg:col-4">
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
        <div className="col-12 md:col-6 lg:col-4">
          <PrimeUiCard></PrimeUiCard>
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <PrimeUiCard></PrimeUiCard>
        </div>
      </div> */}
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
