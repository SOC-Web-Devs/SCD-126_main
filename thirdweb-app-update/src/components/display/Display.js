import React from "react";
import PrimeUiCard from "../primeUiCard/PrimeUiCard";
import VideoPrimeUiCard from "../videoPrimeUiCard/VideoPrimeUiCard";
const Display = () => {
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

      <div className="grid" style={{ marginBottom: "70px" }}>
       
          {project.map((p, index) => (
            <div  className="col-12 md:col-6 lg:col-4">
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
      <div className="grid" style={{ marginBottom: "70x" }}>
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
