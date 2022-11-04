import React from 'react'
import Display from '../components/display/Display'
import Navbar from '../components/navbar/Navbar'
import {Routes , Route} from 'react-router-dom'
import FundMe from '../components/fundMe/FundMe'
const Sidebar = () => {
  return (
    <div>
      <div className="sidebar" style={{width:'70px'}}>
          <div
          className="col-sm-auto sticky-top "
          style={{
            width: "60px",
            height: "auto",
            backgroundColor: "#13131a",
            display: "block",
          }}
        >
          <div
            className=" align-items-center sticky-top my-3"
            style={{
              backgroundColor: "#1c1c24",
              borderRadius: "10px",
              height: "50px",
              marginLeft:'10px'
            }}
          >
            <a
              href="/"
              className="d-block p-3 link-dark text-decoration-none"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Icon-only"
            >
              <i
                style={{ color: "#4acd8d" }}
                className="fa-solid fa-square"
              ></i>
            </a>
          </div>

          <div
            className=" flex-sm-column flex-row flex-nowrap  align-items-center sticky-top my-5"
            style={{
              backgroundColor: "#1c1c24",
              borderRadius: "16px",
              height: "400px",
              marginLeft:'10px',
              alignContent:'center'
            }}
          >
            <a
              href="/"
              className="d-block p-3 link-dark text-decoration-none"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Icon-only"
            >
              <i
                style={{ color: "#808191" }}
                className="fa-solid fa-square"
              ></i>
            </a>
            <ul className="nav nav-pills   mb-auto mx-auto text-center justify-content-between w-100 px-3 align-items-center">
              <li className="nav-item">
                <i
                  style={{ color: "#808191" }}
                  className="fa-sharp fa-solid fa-bullhorn"
                ></i>
              </li>
              <li className="py-3 ">
                <i
                  style={{ color: "#808191" }}
                  className="fa-solid fa-money-bills"
                ></i>
              </li>
              <li className="py-1">
                <i
                  style={{ color: "#808191" }}
                  className="fa-solid fa-user"
                ></i>
              </li>
              <li className="py-2 ">
                <i
                  style={{ color: "#808191" }}
                  className="fa-solid fa-arrow-right-from-bracket"
                ></i>
              </li>

              <li>
                <a
                  href="/"
                  className="nav-link py-3 px-2"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Customers"
                >
                  <i className="bi-people fs-1" />
                </a>
              </li>
            </ul>
            <div className="dropdown mx-3" style={{ marginTop: "200%" }}>
              <i style={{ color: "#808191" }} className="fa-solid fa-sun"></i>
            </div>
          </div>
        </div>
        </div>
        <section className="home-section">
          <Navbar></Navbar>
          <Routes>
          <Route path="/" element={<Display></Display>} />
          <Route path="/demo" element={<FundMe></FundMe>}></Route>
          </Routes>
          
        </section>
    </div>
  )
}

export default Sidebar
