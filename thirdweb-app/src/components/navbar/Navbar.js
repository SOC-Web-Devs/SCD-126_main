import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useMoralisFile, useMoralis } from "react-moralis";
import Moralis from 'moralis';
import {
  ConnectWallet,
  useContract,
  useStorageUpload ,
  useContractRead,
  useContractWrite,
  useAddress,
} from "@thirdweb-dev/react";
// import { readFileSync } from "fs";
import { ThirdwebStorage } from "@thirdweb-dev/storage";

const Navbar = () => {
  const [OwnerName, setValue1] = useState("");
  const [ProjectName, setValue2] = useState("");
  const [ProjectDesciption, setValue3] = useState("");
  const [TargetAmount, setValue4] = useState("");
  const [endDate, setEndDate] = useState(new Date());
  const [imageIPFS, SetImage] = useState("");
  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setValue4(value);
  };


  const { contract } = useContract("0x80aAafAE9A9552184513db2dB6DC04538cf4753a");

  
  const { mutateAsync: createProject } = useContractWrite(
    contract,
    "createProject"
  );

  const { mutateAsync: upload } = useStorageUpload();
  const storage = new ThirdwebStorage();

  const call = async () => {
    console.log("uris");
    console.log(endDate);

    const dataToUpload = [picture];
    const uris = await upload({ data: dataToUpload });
    // const file = readFileSync(dataToUpload);
    // const uris = await storage.upload(file);
 
    let ipfs = uris.toString();

    SetImage(ipfs);




    try {
      const data = await createProject([
        OwnerName,
        ProjectName,
        ProjectDesciption,
        TargetAmount,
        endDate,
        imageIPFS,
      ]);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };



  // const { authenticate, isAuthenticated, user } = useMoralis();
  const [picture, setPicture] = useState("");

  const onChangePicture = (e) => {
    setPicture(e.target.files[0]);
    // console.log('picture: ', picture);

};
    // const { saveFile } = useMoralisFile();
    // 
    // const uploadFile = async () => {

      
      // if (!isAuthenticated) {

      //   await authenticate()
      //     .then(function (user) {
      //       console.log(!user.get("ethAddress"));
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
      // }


      // var reader = new FileReader();
      // reader.onloadend = function() {
      //   //console.log('RESULT', reader.result)
      //   const base64 = reader.result;
      //   saveFile(
      //     "myfile.png",
      //     { base64 },
      //     {
      //       type: "base64",
      //       saveIPFS: true,
      //       onSuccess: (result) => {console.log(result.ipfs()); SetImage(result.ipfs())},
      //       onError: (error) => console.log(error),
      //     }
      //   );
      // }
      // reader.readAsDataURL(picture);
    
    // } ;
    const renderFooter = (name) => {
        return (
            <div>
                <Button label="Close" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Submit" icon="pi pi-check" onClick={() => call()} autoFocus />
                <Button label="Print" icon="pi pi-print" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    }


    const [displayResponsive, setDisplayResponsive] = useState(false);
    const [position, setPosition] = useState('center');
    const dialogFuncMap = {
        'displayResponsive': setDisplayResponsive
    }
    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }

    
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#13131a" }}>
            <div className="container-fluid">
              <button style={{backgroundColor:'white'}}

                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <form className="formup" role="search" id="form">
                      <input
                        className="inputform"
                        type="search"
                        id="query"
                        name="q"
                        placeholder="Do Fundrise Now"
                        aria-label="Search through site content"
                      />
                      <button className="btnbtn">
                      <i style={{marginLeft:'22px', marginTop:'5px'}} className="fa-sharp fa-solid fa-magnifying-glass"></i>
                   
                      </button>
                    </form>
                  </li>
                  <li className="nav-item dropdown">

                  </li>
                  <li className="nav-item">
                    
                  </li>
                </ul>
                <div className="d-flex align-items-center">
                      {/* Notifications */}
                      <div
                        style={{ color: "#6c6d7b" }}
                        className="dropdown"
                      >
                        <span
                          className="text-reset me-3 dropdown-toggle hidden-arrow"
                          id="navbarDropdownMenuLink"
                          role="button"
                          data-mdb-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i
                            style={{ color: "#6c6d7b" }}
                            className="fa-solid fa-arrow-trend-up"
                          ></i>
                          <span className="" style={{ color: "#6c6d7b" }}>
                            Fundraising For
                          </span>
                        </span>
                      </div>
                      {/* Button */}

                      {/* Avatar */}
                    </div>
                <div className="d-flex align-items-center">
                      {/* Notifications */}
                      <div
                        style={{ color: "#6c6d7b" }}
                        className="dropdown"
                      ></div>
                      {/* Button */}
                      <button
                        type="button"
                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                        onClick={() => onClick('displayResponsive')}
                        style={{
                          backgroundColor: "#8c6dfd",
                          color: "white",
                          width: "200px",
                          marginRight: "20px",
                        }}
                        className="btn"
                      >
                        Start A Campaign
                      </button>
                <Dialog header="Header" visible={displayResponsive} onHide={() => onHide('displayResponsive')} breakpoints={{'960px': '75vw'}} style={{width: '50vw'}} footer={renderFooter('displayResponsive')}>
                <div className="container">
                                <div className="row">
                                  <label>
                                    Owner Name
                                    <InputText
                                      value={OwnerName}
                                      // maxLength ={20}
                                      style={{ width: "100%" }}
                                      onChange={(e) =>
                                        setValue1(e.target.value)
                                      }
                                    />
                                  </label>
                                </div>
                                <div className="row">
                                  <label>
                                    Project Name{" "}
                                    <InputText
                                      value={ProjectName}
                                      style={{ width: "100%" }}
                                      onChange={(e) =>
                                        setValue2(e.target.value)
                                      }
                                    />
                                  </label>
                                </div>
                                <div className="row">
                                  <label>
                                    Project Description{" "}
                                    <InputText
                                      value={ProjectDesciption}
                                      style={{ width: "100%" }}
                                      onChange={(e) =>
                                        setValue3(e.target.value)
                                      }
                                    />
                                  </label>
                                </div>
                                <div className="row">
                                  <label>
                                    Target Amount<br></br>{" "}
                                    <InputText
                                      style={{ width: "200px" }}
                                      value={TargetAmount}
                                      maxLength = {10}
                                      onChange={handleChange}
                                    />{" "}
                                  </label>
                                </div>
                                <div className="row">
                                  <label>
                                    Project Deadline <br></br>{" "}
                                    <DatePicker
                                      selected={endDate}
                                      onChange={(date) => setEndDate(date.getTime())}
                                      showTimeSelect
                                      timeFormat="HH:mm"
                                      timeIntervals={15}
                                      timeCaption="time"
                                      dateFormat="MMMM d, yyyy h:mm aa"
                                    />{" "}
                                  </label>
                                </div>
                                <div className="row">
                                  <label>
                                    Image Upload <br></br>{" "}
                                    <input type='file' accept='image/*' name='file' id='file' onChange={onChangePicture}></input>
                                  </label>
                                </div>
                              </div>
                </Dialog>
                     
                    </div>
                <div className="dropdown">
                  <span
                    className="d-flex align-items-center "
                    id="navbarDropdownMenuAvatar"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      className="rounded-circle"
                      height={40}
                      alt="Black and White Portrait of a Man"
                      loading="lazy"
                    />
                  </span>
                </div>
              </div>
            </div>
          </nav>
    </div>
  )
}

export default Navbar
