import React from "react";
import background from "../../images/project1.jpg";
import { useLocation } from "react-router-dom";
import { ConnectWallet, useContract, useContractRead, useContractWrite, useAddress, Web3Button } from "@thirdweb-dev/react";
import { useEffect, useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
const FundMe = (props) => {

  // const [donator, setDonator] = useState([]);
  const [donation, setDonation] = useState([]);

  const location = useLocation();
  const data = location.state?.data;
  const { contract } = useContract("0x80aAafAE9A9552184513db2dB6DC04538cf4753a");

  
  const numOfDonators = async (id) => {
  const data2 = await contract.call("numOfDonators", id);
  console.log(data2);
  let txt  = data2.toString();
  console.log(txt);
  return txt;
  } 

  const getDonations = async (pId) =>  {
    var numOfDonations = parseInt(await numOfDonators());
    let donations = [];
    for (let i = 0; i < numOfDonations ; i++){
      // let temp = [];
  
      const data = await contract.call("getDonators", pId, i)
    
      const parsedDonations = {
        donator: data[0],
        donation: data[1].toString(),
      };
      donations.push(parsedDonations);
     
    }
    setDonation(donations);
  
    console.log("donations", donations);
  }    
  const renderFooter = (name) => {
    return (
        <div>
            <Button label="Submit" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
        </div>
    );
}

const userAddress = useAddress();
const [donationAmount, setDonationAmount] = useState(0);

const handleChange = (e)  =>  {
  const value = e.target.value.replace(/\D/g, "");
  setDonationAmount(value);



};
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

    const onHide = async (name) => {
      const data = await contract.call("donateOnProject", props.pId ,userAddress, donationAmount*10**18);

        dialogFuncMap[`${name}`](false);
    }

    return (
      <div>
         <Web3Button
      contractAddress="0x49Bc40f14BbC1D18A5136b740C1353aA6e5332be"
      action={(contract) => {
        contract.call("withdrawFunding", props.pId, props.address);
      }}
    >
      withdrawFunding
    </Web3Button>
        <main className="t-campaign-page-template-content global-wrapper">
          <div className="p-campaign-guidance-drawer" />
          <div className="p-campaign" data-view-id="pg_donate_index">
            <div className="p-campaign-gfmclips-progress hide-for-large" />
            <div className="p-campaign-collage color-background-blue">
              <div className="image-16by9 m-collage-image">
                <div
                  className="a-image a-image--background"
                  style={{ backgroundImage: `url(${background})` }}
                ></div>
              </div>
            </div>
            <header className="p-campaign-header mb-4">
              <h1 className="mb0 p-campaign-title" style={{color:'#ffffff'}}>
                {/* Let’s give Josue a safe home &amp; mom a business */}
                {data.name}
              </h1>
            </header>
            {/** */}
            <div style={{display:'flex'}}>
            <div className="gird" style={{width:'auto' , left:'0'}}>
            <img className="col-12 md:col-6 lg:col-12" src="assets/images/project1.jpg" alt="Girl in a jacket" width="auto" height="auto"></img>
            </div>
            <div
              className="p-campaign-sidebar"
              style={{
                width: "30%",
                right :'10px',
                marginTop: "20px",
                border: "1px solid ghostWhite",
                borderRadius: "16px",
                zIndex :'1',
                position:'fixed'
              }}
            >
              <aside
                className="o-campaign-sidebar container"
                style={{ marginTop: "20px", marginBottom: "20px" }}
              >
                <div className="o-campaign-sidebar-wrapper">
                  <div>
                    <div className="o-campaign-sidebar-progress-meter m-progress-meter">
                      <progress
                        className="a-progress-bar a-progress-bar--green"
                        max={100}
                        value="105.786"
                      />
                      <p className="m-progress-meter-heading">
                        {data.amountCollected}
                        {/* */}{" "}
                        <span className="text-small color-gray">
                          USD raised of {data.ptarget} goal
                        </span>
                        <span className="hide-for-large ">
                          &nbsp;<span className="color-gray-40">•</span>{" "}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="p-campaign-share-donate-buttons">
                
                    <div
                      className="p-campaign-share-button-exp mb2x m-auto hrt-gradient-button hrt-gradient-button--gradient-orange hrt-gradient-button--full hrt-gradient-button--shadow hrt-base-button"
                      data-element-id="btn_donate"
                      data-bs-toggle="modal" data-bs-target="#exampleModal"
                      onClick={() => onClick('displayResponsive')}
                    >
                      <span className="hrt-gradient-button-text">Donate now</span>
                    </div>
                  </div>
                </div>
                <div className="show-for-large">
                  <div className="o-campaign-sidebar-wrapper">
                    <div>
                      <ul className="o-campaign-sidebar-donations list-unstyled o-donation-list">
                        <li className="o-donation-list-item">
                          <a
                            className="hrt-link hrt-link--gray-dark hrt-link--unstyled"
                            href="lets-give-josue-a-safe-home-mom-a-business/donationsd54a.html?qid=d85ddd491b0f752411e935c276a0fde4"
                            data-element-id="btn_flair_recent"
                          >
                            <div className="m-donation m-person-info">
      
                              <div style={{color:'#d7d7d9' , marginLeft:'10px'}}>
                                <div className="m-person-info-name">
                                  Anonymous
                                  {/* */}&nbsp;
                                </div>
                                <div className="m-person-info-content">
                                  <ul className="m-donation-meta list-unstyled m-meta-list m-meta-list--bullet">
                                    <li className="m-meta-list-item">
                                      <span className="weight-900">
                                        $10
                                        {/* */}&nbsp;
                                      </span>
                                    </li>
                                    
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>





                        <li className="o-donation-list-item">
                          <a
                            className="hrt-link hrt-link--gray-dark hrt-link--unstyled"
                            href="lets-give-josue-a-safe-home-mom-a-business/topdonations/indexd54a.html?qid=d85ddd491b0f752411e935c276a0fde4"
                            data-element-id="btn_flair_top"
                          >
                            <div className="m-donation m-person-info">
                           
                              <div style={{color:'#d7d7d9' ,marginLeft:'10px'}}>
                                <div className="m-person-info-name">
                                  Angela Roach
                                  {/* */}&nbsp;
                                </div>
                                <div className="m-person-info-content">
                                  <ul className="m-donation-meta list-unstyled m-meta-list m-meta-list--bullet">
                                    <li className="m-meta-list-item">
                                      <span className="weight-900">
                                        $2,500
                                        {/* */}&nbsp;
                                      </span>
                                    </li>
  
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="o-donation-list-item">
                          <a
                            className="hrt-link hrt-link--gray-dark hrt-link--unstyled"
                            href="lets-give-josue-a-safe-home-mom-a-business/donationsd54a.html?qid=d85ddd491b0f752411e935c276a0fde4"
                            data-element-id="btn_flair_first"
                          >
                            <div className="m-donation m-person-info">
                       
                              <div style={{color:'#d7d7d9' , marginLeft:'10px'}}>
                                <div className="m-person-info-name">
                                  Anonymous
                                  {/* */}&nbsp;
                                </div>
                                <div className="m-person-info-content">
                                  <ul className="m-donation-meta list-unstyled m-meta-list m-meta-list--bullet">
                                    <li className="m-meta-list-item">
                                      <span className="weight-900">
                                        $10
                                        {/* */}&nbsp;
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex-container justify-between">
                      <a
                        className="mt2x hrt-secondary-button hrt-secondary-button--green hrt-secondary-button--inline hrt-secondary-button--small hrt-base-button"
                        data-element-id="btn_donate_moredonations"
                        href="lets-give-josue-a-safe-home-mom-a-business/donationsd54a.html?qid=d85ddd491b0f752411e935c276a0fde4"
                        style={{backgroundColor : '#4acd8d' , color:'white'}}
                      >
                        See all
                      </a>
                      <a
                        className="mt2x hrt-secondary-button hrt-secondary-button--gray hrt-secondary-button--inline hrt-secondary-button--small hrt-base-button"
                        data-element-id="btn_donate_topdonations"
                        href="lets-give-josue-a-safe-home-mom-a-business/topdonations/indexd54a.html?qid=d85ddd491b0f752411e935c276a0fde4"
                        style={{backgroundColor : '#4acd8d' , color:'white'}}
                        >
                      
                        <span className="show-for-xlarge-only" >
                          See top donations
                        </span>
                        <span className="hide-for-xlarge">See top</span>
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            </div>
            {/** */}
            <div className="p-campaign-byline">
              <div className="m-campaign-byline">
                <div className="m-campaign-byline-members">
                  <ul className="list-unstyled hrt-avatar-stack m-campaign-byline-avatar-stack">
                    <li className="hrt-avatar-stack-item hrt-avatar-stack-item--0">
                      <img
                        alt=""
                        className="hrt-image-avatar hrt-image-avatar--large hrt-avatar hrt-avatar--large"
                        src="../../images.gofundme.com/E2e5MhexdyJM56CsWYV0iBdSFns%3d/120x120/https_/pics.paypal.com/00/p/YjVhZjUwZGUtYjkyNi00NjI1LWE3NjEtN2IxMDFkNjhiMTll/image_12.png"
                      />
                    </li>
                    <li className="hrt-avatar-stack-item hrt-avatar-stack-item--1">
                      <div className="hrt-default-avatar hrt-avatar hrt-avatar--large">
                        <svg
                          aria-hidden="true"
                          className="hrt-icon hrt-icon--large"
                          focusable="false"
                          viewBox="0 0 24 24"
                        >
                          <use
                            href="https://www.gofundme.com/_next/static/images/action-icons-9645f6597c00bf86c32ee777223af9ed.svg#anonymous"
                            xlinkHref="https://www.gofundme.com/_next/static/images/action-icons-9645f6597c00bf86c32ee777223af9ed.svg#anonymous"
                          ></use>
                        </svg>
                      </div>
                    </li>
                  </ul>
                  <div className="m-campaign-byline-description" style={{color:'#d7d7d9'}}>
                    {props.pDescription}
                    <span>
                      &nbsp;
                      <svg
                        aria-hidden="true"
                        className="color-green m-campaign-byline-charity-checkmark hrt-icon hrt-icon--large"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <use
                          href="https://www.gofundme.com/_next/static/images/information-icons-8e28469525490b24db5532ee63323d3f.svg#checkmark-solid"
                          xlinkHref="https://www.gofundme.com/_next/static/images/information-icons-8e28469525490b24db5532ee63323d3f.svg#checkmark-solid"
                        ></use>
                      </svg>
                      &nbsp;
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-campaign-description" style={{ width: "65%" }}>
              <div className="mb0 mt0 hrt-rule hrt-rule--horizontal" />
              <ul className="m-campaign-lite-byline-meta list-unstyled m-meta-list m-meta-list--bullet">
                <li className="m-meta-list-item">
                  <span className="m-campaign-byline-created a-created-date show-for-large" style={{color:'#d7d7d9'}}>
                    Created 4 days ago
                  </span>
                  <span className="m-campaign-byline-created a-created-date hide-for-large">
                    4 days ago
                  </span>
                </li>
                <li className="m-meta-list-item">
                  <a
                    className="flex-container align-center hrt-link hrt-link--gray-dark"
                    href="https://www.gofundme.com/start/charity-fundraising"
                    style={{color:'#d7d7d9'}}
                  >
                    <svg
                      aria-hidden="true"
                      className="mr show-for-large hrt-icon hrt-icon--large"
                      focusable="false"
                      viewBox="0 0 24 24"
                    >
                      <use
                        href="https://www.gofundme.com/_next/static/images/information-icons-8e28469525490b24db5532ee63323d3f.svg#tag"
                        xlinkHref="https://www.gofundme.com/_next/static/images/information-icons-8e28469525490b24db5532ee63323d3f.svg#tag"
                      ></use>
                    </svg>
                    Non-Profits &amp; Charities
                  </a>
                </li>
              </ul>
              <div className="mt0 mb0 hrt-rule hrt-rule--horizontal" />
              <div className="o-campaign-description">
                <div
                  className="o-campaign-story mt3x"
                  style={{
                    userSelect: "none",
                    WebkitUserSelect: "none",
                    msUserSelect: "none",
                    MozUserSelect: "none",
                    color:'#d7d7d9'
                  }}
                >
                  I met a child who was diagnosed with blood cancer just a few
                  years back. He now suffers from testicular cancer. With so many
                  medical bills his mother can barely afford food yet alone a safe
                  home.&nbsp;
                  <br />
                  <br />
                  When I was there the home smelled of mold. If it was hard for me
                  to breath just in a few hours, I can’t imagine how this is
                  affecting the child’s health.&nbsp;
                  <br />
                  <br />
                  With YOUR donations.. WE are going to surprise this little
                  Ecuadorian family with a new home equipped with a small store
                  front business so mom can make a little money while being close
                  to her two children (her youngest is 2 years old) the dad works
                  security for a school. I am also wanting to buy him a motorcycle
                  that he can use to get to and from work. He can also work part
                  time deliver with this bike to increase the families income.
                  <br />
                  <br />
                  Please consider sharing his video to help us reach our goal. If
                  you’d like to donate on any other platform just visit My website
                  to donate on venmo, cashapp, PayPal, or Zelle.
                  <br />
                  <br />
                  You guys are amazing! Can’t wait to show you part two&nbsp;
                </div>
              </div>
            </div>
            <div className="p-campaign-content" style={{ width: "65%" }}>
              <div className="hide-for-large p-campaign-content--mobile-buttons">
                <div className="disp-flex">
                  <a
                    className="hrt-primary-button hrt-primary-button--gold hrt-primary-button--full hrt-primary-button--large hrt-primary-button--shadow hrt-base-button"
                    data-element-id="btn_story_donate"
                    href="lets-give-josue-a-safe-home-mom-a-business/donate.html"
                  >
                    Donate
                  </a>
                </div>
              </div>
              <div className="p-campaign-donations hide-for-large">
                <div className="hrt-rule hrt-rule--horizontal" />
                <div className="flex-container justify-between mb3x">
                  <h2 className="mb0">Donations </h2>
                 
                </div>
                <div>
                  <div className="p-campaign-metadata-indicator" />
                  <ul className="p-campaign-page-donations list-unstyled o-donation-list">
                    <li className="o-donation-list-item">
                      <a
                        className="hrt-link hrt-link--gray-dark hrt-link--unstyled"
                        href="lets-give-josue-a-safe-home-mom-a-business/donationsd54a.html?qid=d85ddd491b0f752411e935c276a0fde4"
                        data-element-id="btn_flair_recent"
                      >
                        <div className="m-donation m-person-info">
                          <div className="hrt-anonymous-avatar hrt-avatar hrt-avatar--large mr2x">
                            <svg
                              aria-hidden="true"
                              className="hrt-icon hrt-icon--large"
                              focusable="false"
                              viewBox="0 0 24 24"
                            >
                              <use
                                href="https://www.gofundme.com/_next/static/images/action-icons-9645f6597c00bf86c32ee777223af9ed.svg#anonymous"
                                xlinkHref="https://www.gofundme.com/_next/static/images/action-icons-9645f6597c00bf86c32ee777223af9ed.svg#anonymous"
                              ></use>
                            </svg>
                          </div>
                          <div>
                            <div className="m-person-info-name">
                              Anonymous
                              {/* */}&nbsp;
                            </div>
                            <div className="m-person-info-content">
                              <ul className="m-donation-meta list-unstyled m-meta-list m-meta-list--bullet">
                                <li className="m-meta-list-item">
                                  <span className="weight-900">
                                    $10
                                    {/* */}&nbsp;
                                  </span>
                                </li>
                                <li className="m-meta-list-item">
                                  <span>
                                    <span className="text-underline hover-green">
                                      Recent donation
                                    </span>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/** underline */}
                          <div className="hrt-rule hrt-rule--horizontal" />
                        </div>
                      </a>
                    </li>
                    <li className="o-donation-list-item">
                      <a
                        className="hrt-link hrt-link--gray-dark hrt-link--unstyled"
                        href="lets-give-josue-a-safe-home-mom-a-business/topdonations/indexd54a.html?qid=d85ddd491b0f752411e935c276a0fde4"
                        data-element-id="btn_flair_top"
                      >
                        <div className="m-donation m-person-info">
                          <div className="hrt-anonymous-avatar hrt-avatar hrt-avatar--large mr2x">
                            <svg
                              aria-hidden="true"
                              className="hrt-icon hrt-icon--large"
                              focusable="false"
                              viewBox="0 0 24 24"
                            >
                              <use
                                href="https://www.gofundme.com/_next/static/images/action-icons-9645f6597c00bf86c32ee777223af9ed.svg#anonymous"
                                xlinkHref="https://www.gofundme.com/_next/static/images/action-icons-9645f6597c00bf86c32ee777223af9ed.svg#anonymous"
                              ></use>
                            </svg>
                          </div>
                          <div>
                            <div className="m-person-info-name">
                              Angela Roach
                              {/* */}&nbsp;
                            </div>
                            <div className="m-person-info-content">
                              <ul className="m-donation-meta list-unstyled m-meta-list m-meta-list--bullet">
                                <li className="m-meta-list-item">
                                  <span className="weight-900">
                                    $2,500
                                    {/* */}&nbsp;
                                  </span>
                                </li>
                                <li className="m-meta-list-item">
                                  <span>
                                    <span className="text-underline hover-green">
                                      Top donation
                                    </span>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="o-donation-list-item">
                      <a
                        className="hrt-link hrt-link--gray-dark hrt-link--unstyled"
                        href="lets-give-josue-a-safe-home-mom-a-business/donationsd54a.html?qid=d85ddd491b0f752411e935c276a0fde4"
                        data-element-id="btn_flair_first"
                      >
                        <div className="m-donation m-person-info">
                          <div className="hrt-anonymous-avatar hrt-avatar hrt-avatar--large mr2x">
                            <svg
                              aria-hidden="true"
                              className="hrt-icon hrt-icon--large"
                              focusable="false"
                              viewBox="0 0 24 24"
                            >
                              <use
                                href="https://www.gofundme.com/_next/static/images/action-icons-9645f6597c00bf86c32ee777223af9ed.svg#anonymous"
                                xlinkHref="https://www.gofundme.com/_next/static/images/action-icons-9645f6597c00bf86c32ee777223af9ed.svg#anonymous"
                              ></use>
                            </svg>
                          </div>
                          <div>
                            <div className="m-person-info-name">
                              Anonymous
                              {/* */}&nbsp;
                            </div>
                            <div className="m-person-info-content">
                              <ul className="m-donation-meta list-unstyled m-meta-list m-meta-list--bullet">
                                <li className="m-meta-list-item">
                                  <span className="weight-900">
                                    $10
                                    {/* */}&nbsp;
                                  </span>
                                </li>
                                <li className="m-meta-list-item">
                                  <span>
                                    <span className="text-underline hover-green">
                                      First donation
                                    </span>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <a
                  className="hide-for-large mt3x max-width-100 hrt-secondary-button hrt-secondary-button--green hrt-secondary-button--full-for-small hrt-secondary-button--medium hrt-base-button"
                  href="lets-give-josue-a-safe-home-mom-a-business/donationsd54a.html?qid=d85ddd491b0f752411e935c276a0fde4"
                  data-element-id="btn_donate_moredonations"
  
                >
                  See all
                </a>
              </div>
              <div className="show-for-large">
                <div className="disp-flex">
                  <div
                    className="hrt-primary-button hrt-primary-button--gold hrt-primary-button--full hrt-primary-button--large hrt-primary-button--shadow hrt-base-button"
                    data-element-id="btn_story_donate"
                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                    onClick={() => onClick('displayResponsive')}
                  >
                    Donate
                  </div>
                  <Dialog header="Header" visible={displayResponsive} onHide={() => onHide('displayResponsive')} breakpoints={{'960px': '75vw'}} style={{width: '50vw'}} footer={renderFooter('displayResponsive')}>
                  <div className="container">
                  <div className="row">
                                    <label>
                                      Donate Amount<br></br>{" "}
                                      <InputText
                                        style={{ width: "200px" }}
                                        value={donationAmount}
                                        maxLength = {10}
                                        onChange={handleChange}
                                      />{" "}
                                    </label>
                                  </div>
                  </div>
                  </Dialog>
                </div>
                <div className="hrt-rule hrt-rule--horizontal" />
              </div>
              {/** */}
              <div className="p-campaign-members">
                <div className="hide-for-large hrt-rule hrt-rule--horizontal" />
                <div className="o-campaign-members" id="campaign-members">
                  <h2 className="m-campaign-members-header">
                    <div className="m-campaign-members-header-title" style={{color:'white'}}>
                      Donations
                    </div>
                  </h2>
                  <div className="mt3x mb5x m-campaign-members-main m-campaign-members-main--has-beneficiary">
                    <div className="m-campaign-members-main-organizer">
                      <div className="m-person-info">
                        <div className="hrt-anonymous-avatar hrt-avatar hrt-avatar--large mr2x">
                          <svg
                            aria-hidden="true"
                            className="hrt-icon hrt-icon--large"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <use
                              href="https://www.gofundme.com/_next/static/images/action-icons-9645f6597c00bf86c32ee777223af9ed.svg#anonymous"
                              xlinkHref="https://www.gofundme.com/_next/static/images/action-icons-9645f6597c00bf86c32ee777223af9ed.svg#anonymous"
                            ></use>
                          </svg>
                        </div>
                        {/** */}
                        <div style={{color:'#d7d7d9'}}>
                          <div className="m-person-info-name">
                            Aaron Murphy
                            {/* */}&nbsp;
                          </div>
                          <div className="m-person-info-content">
                            <div className="text-small">Organizer</div>
                            <div className="text-small">Lehi, UT</div>
                          </div>
                        </div>
                        {/** */}
                        <div
                          className="m-campaign-members-main-beneficiary"
                          style={{ marginLeft: "auto" }}
                        >
                          <div className="m-organization-info">
                            <img
                              alt=""
                              className="hrt-image-avatar hrt-image-avatar--large hrt-avatar hrt-avatar--large mr2x"
                              src="../../images.gofundme.com/E2e5MhexdyJM56CsWYV0iBdSFns%3d/120x120/https_/pics.paypal.com/00/p/YjVhZjUwZGUtYjkyNi00NjI1LWE3NjEtN2IxMDFkNjhiMTll/image_12.png"
                            />
                            <div className="m-organization-info-content" style={{color:'#d7d7d9'}}>
                              <div className="m-organization-info-content-child">
                                <span>Murphslife Foundation</span>&nbsp;
                                <svg
                                  aria-hidden="true"
                                  className="color-green hrt-icon hrt-icon--small"
                                  focusable="false"
                                  viewBox="0 0 24 24"
                                >
                                  <use
                                    href="https://www.gofundme.com/_next/static/images/information-icons-8e28469525490b24db5532ee63323d3f.svg#checkmark-solid"
                                    xlinkHref="https://www.gofundme.com/_next/static/images/information-icons-8e28469525490b24db5532ee63323d3f.svg#checkmark-solid"
                                  ></use>
                                </svg>
                              </div>
                              <div className="m-organization-info-content-child">
                                <div className="text-small">
                                  <div>Registered nonprofit</div>
                                  <div>
                                    Donations are typically 100% tax deductible in
                                    the US.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/** */}
                      <svg
                        aria-hidden="true"
                        className="show-for-large mt hrt-icon hrt-icon--large"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <use
                          href="https://www.gofundme.com/_next/static/images/navigation-icons-d4d68bf240b8378d4436209adbaa5a60.svg#arrow-right"
                          xlinkHref="https://www.gofundme.com/_next/static/images/navigation-icons-d4d68bf240b8378d4436209adbaa5a60.svg#arrow-right"
                        ></use>
                      </svg>
                    </div>
                    {/** */}
                    {/** */}
                 
                  </div>
                </div>
                <div className="hrt-rule hrt-rule--horizontal" />
              </div>
              {/** */}
              {/** */}
              <div className="p-campaign-members">
                <div className="hide-for-large hrt-rule hrt-rule--horizontal" />
                <div className="o-campaign-members" id="campaign-members">
                  <h2 className="m-campaign-members-header">
                    <div className="m-campaign-members-header-title" style={{color:'white'}}>
                      Organizer
                    </div>
                  </h2>
                  <div className="mt3x mb5x m-campaign-members-main m-campaign-members-main--has-beneficiary">
                    <div className="m-campaign-members-main-organizer">
                      <div className="m-person-info">
                        <div className="hrt-anonymous-avatar hrt-avatar hrt-avatar--large mr2x">
                          <svg
                            aria-hidden="true"
                            className="hrt-icon hrt-icon--large"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <use
                              href="https://www.gofundme.com/_next/static/images/action-icons-9645f6597c00bf86c32ee777223af9ed.svg#anonymous"
                              xlinkHref="https://www.gofundme.com/_next/static/images/action-icons-9645f6597c00bf86c32ee777223af9ed.svg#anonymous"
                            ></use>
                          </svg>
                        </div>
                        {/** */}
                        <div style={{color:'#d7d7d9'}}>
                          <div className="m-person-info-name">
                            Aaron Murphy
                            {/* */}&nbsp;
                          </div>
                          <div className="m-person-info-content">
                            <div className="text-small">Organizer</div>
                            <div className="text-small">Lehi, UT</div>
                          </div>
                        </div>
                        {/** */}
                        <div
                          className="m-campaign-members-main-beneficiary"
                          style={{ marginLeft: "auto" }}
                        >
                          <div className="m-organization-info">
                            <img
                              alt=""
                              className="hrt-image-avatar hrt-image-avatar--large hrt-avatar hrt-avatar--large mr2x"
                              src="../../images.gofundme.com/E2e5MhexdyJM56CsWYV0iBdSFns%3d/120x120/https_/pics.paypal.com/00/p/YjVhZjUwZGUtYjkyNi00NjI1LWE3NjEtN2IxMDFkNjhiMTll/image_12.png"
                            />
                            <div className="m-organization-info-content" style={{color:'#d7d7d9'}}>
                              <div className="m-organization-info-content-child">
                                <span>Murphslife Foundation</span>&nbsp;
                                <svg
                                  aria-hidden="true"
                                  className="color-green hrt-icon hrt-icon--small"
                                  focusable="false"
                                  viewBox="0 0 24 24"
                                >
                                  <use
                                    href="https://www.gofundme.com/_next/static/images/information-icons-8e28469525490b24db5532ee63323d3f.svg#checkmark-solid"
                                    xlinkHref="https://www.gofundme.com/_next/static/images/information-icons-8e28469525490b24db5532ee63323d3f.svg#checkmark-solid"
                                  ></use>
                                </svg>
                              </div>
                              <div className="m-organization-info-content-child">
                                <div className="text-small">
                                  <div>Registered nonprofit</div>
                                  <div>
                                    Donations are typically 100% tax deductible in
                                    the US.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/** */}
                      <svg
                        aria-hidden="true"
                        className="show-for-large mt hrt-icon hrt-icon--large"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <use
                          href="https://www.gofundme.com/_next/static/images/navigation-icons-d4d68bf240b8378d4436209adbaa5a60.svg#arrow-right"
                          xlinkHref="https://www.gofundme.com/_next/static/images/navigation-icons-d4d68bf240b8378d4436209adbaa5a60.svg#arrow-right"
                        ></use>
                      </svg>
                    </div>
                    {/** */}
                    {/** */}
                 
                  </div>
                </div>
              </div>
              {/** */}
              <div className="hrt-rule hrt-rule--horizontal" />
            </div>
            <div className="p-campaign-report-button">
              {/**<a
                className="hrt-tertiary-button hrt-base-button"
                href="https://support.gofundme.com/hc/articles/203604694"
                data-element-id="btn_report"
              >
                <svg
                  aria-hidden="true"
                  className="mr hrt-icon hrt-icon--large"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <use
                    href="https://www.gofundme.com/_next/static/images/action-icons-9645f6597c00bf86c32ee777223af9ed.svg#flag"
                    xlinkHref="https://www.gofundme.com/_next/static/images/action-icons-9645f6597c00bf86c32ee777223af9ed.svg#flag"
                  ></use>
                </svg>
                Report fundraiser
              </a>*/}
            </div>
          </div>
        </main>
      </div>
    );
  };
  
  export default FundMe;
  