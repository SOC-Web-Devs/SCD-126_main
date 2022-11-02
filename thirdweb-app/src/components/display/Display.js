import React from "react";
import PrimeUiCard from "../primeUiCard/PrimeUiCard";
import GetProject from "../GetProject/GetProject.js";
import VideoPrimeUiCard from "../videoPrimeUiCard/VideoPrimeUiCard";
import { Contract, utils ,providers } from "ethers";
import {
  CROWD_CONTRACT_ADDRESS,
  CROWD_CONTRACT_ABI,
} from "../constants";
import { useEffect, useRef, useState } from "react";
import Web3Modal from "web3modal";
import { ConnectWallet, useContract, useContractRead, useContractWrite, useAddress} from "@thirdweb-dev/react";



const Display = () => {

  const [numProjects, setNumProjects] = useState(0);
  const [projects, setProjects] = useState([]);





  // const { crowdContract } = useContract("0x9831EEbc5801FD679c850abF7387a30647179B58");


  // let projects = [];

  const getNumProjects= async () => {
    try {
      const provider = await getProviderOrSigner();
      const contract = getCrowdContract(provider);
      const numProjects = await contract.numProjects();
      setNumProjects(numProjects.toString());
    } catch (error) {
      console.error(error);
    }
  };

  
  const fetchProjectById = async (id) => {
    try {
      const provider = await getProviderOrSigner();
      const crowdContract = getCrowdContract(provider);
      const fetchedProject = await crowdContract.projects(id);
      const parsedProject = {
            owner: fetchedProject.owner.toString(),
            pName: fetchedProject.pName.toString(),
            pdescription: fetchedProject.pdescription.toString(),
            target: fetchedProject.target.toString(),
            timeCreated: new Date(parseInt(fetchedProject.timeCreated.toString()) * 1000),
            deadline: new Date(parseInt(fetchedProject.deadline.toString()) * 1000),
            amountCollected: fetchedProject.amountCollected
          };
      return parsedProject;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAllProjects = async () => {
    try {
      const projects = [];
      for (let i = 0; i < numProjects; i++) {
        const project = await fetchProjectById(i);
        projects.push(project);
      }
      setProjects(projects);
      return projects;
    } catch (error) {
      console.error(error);
    }
  };

  const getCrowdContract = (providerOrSigner) => {
    return new Contract(
      CROWD_CONTRACT_ADDRESS,
      CROWD_CONTRACT_ABI,
      providerOrSigner
    );
  };

  



   // Helper function to fetch a Provider/Signer instance from Metamask
   const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 97) {
      window.alert("Please switch to the BST testnet network!");
      throw new Error("Please switch to the BST testnet network");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  useEffect(() => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "bsc testnet",
        providerOptions: {},
        disableInjectedProvider: false,
      });

      connectWallet().then(() => {
        getNumProjects();
      });
    }
  }, [walletConnected]);

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
       
          {projects.map((p, index) => (
            <div style={{ display: "block" }} className="col-4">
              <PrimeUiCard
                address={projects[index][0]}
                pName={projects[index][1]}
                pDescription={projects[index][2]}
                ptarget={projects[index][3]}
                timeCreated={projects[index][4]}
                deadline={projects[index][5]}
                amountCollected={projects[index][6]}
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
            address={projects[0][0]}
            pName={projects[0][1]}
            pDescription={project[0][2]}
            ptarget={projects[0][3]}
            timeCreated={projects[0][4]}
            deadline={projects[0][5]}
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