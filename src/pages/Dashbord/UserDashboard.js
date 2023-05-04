import React from "react";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./UserDashboardStyles.css";
import { MdApartment } from "react-icons/md";
import { MdOutlineGroups } from "react-icons/md";

const UserDashboard = () => {
  return (
    <div>
      <nav className="navbar login border navbar-expand-lg fixed-top navbar-light bg-white">
        <div className="container-fluid">
        <div className="row w-100 justify-content-between ">
        <div className="col-sm-3 col-6">
          <NavLink to="/" className="navbar-brand ">
            <img src={logo} alt="logo" className="img-fluid" />
          </NavLink>
        </div>
            <div className="col-sm-5 h-25 col-lg-3 d-flex dropdown justify-content-center align-content-center d-flex">
        

            <img src='https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=' alt='profile' className='img-fluid mt-2 me-1 cover' />
            <div className="w-100  mt-2 d-flex flex-column justify-content-center" >
            <span className="">Emmanuel Adebayo</span>
                <span className="email-text">emmanuel@mail.com</span>
            </div>
            <div className="mt-2">
            <MdOutlineKeyboardArrowDown color='' size={30}/>
            </div>
            </div>
        </div>
        </div>
      </nav>
      <div
        className="container-fluid padding-top org-container"
      >
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex container justify-content-between">
            <p>Good Morning, Emmanuel!</p>
            <button className="btn btn-text btn-primary">
              ADD ORGANISATION
            </button>
          </div>
        </div>
        <div className="row container justify-content-center mx-auto align-items-center">
          <div className="row mt-1 height pt-2 col-md-5 col-lg-6 mx-auto border rounded-3">
            <div className="d-flex rounded-3 p-3 mt-3 justify-content-center mx-auto mb-3 border flex-column ">
              <div className="d-flex justify-content-center">
                <span className="text-white ab ">A & B</span>
              </div>
              <div className="d-flex mb-2">
                <div className="circle bg-light me-2 ">
                  <MdApartment color="#3FBCFC" />
                </div>
                <span>A & B Plc</span>
              </div>
              <div className="d-flex">
                <div className="circle bg-light me-2">
                  <MdOutlineGroups color="#3FBCFC" />
                </div>
                <span>20 Staff</span>
              </div>
            </div>
            <div className="d-flex rounded-3 p-3 mt-3 justify-content-center mx-auto mb-3 border flex-column ">
              <div className="d-flex justify-content-center">
                <span className="text-white ab ">A & B</span>
              </div>
              <div className="d-flex mb-2">
                <div className="circle bg-light me-2 ">
                  <MdApartment color="#3FBCFC" />
                </div>
                <span>A & B Plc</span>
              </div>
              <div className="d-flex">
                <div className="circle bg-light me-2">
                  <MdOutlineGroups color="#3FBCFC" />
                </div>
                <span>20 Staff</span>
              </div>
            </div>
            <div className="d-flex rounded-3 p-3 mt-3 justify-content-center mx-auto mb-3 border flex-column ">
              <div className="d-flex justify-content-center">
                <span className="text-white ab ">A & B</span>
              </div>
              <div className="d-flex mb-2">
                <div className="circle bg-light me-2 ">
                  <MdApartment color="#3FBCFC" />
                </div>
                <span>A & B Plc</span>
              </div>
              <div className="d-flex">
                <div className="circle bg-light me-2">
                  <MdOutlineGroups color="#3FBCFC" />
                </div>
                <span>20 Staff</span>
              </div>
            </div>
            <div className="d-flex rounded-3 p-3 mt-3 justify-content-center mx-auto mb-3 border flex-column ">
              <div className="d-flex justify-content-center">
                <span className="text-white ab ">A & B</span>
              </div>
              <div className="d-flex mb-2">
                <div className="circle bg-light me-2 ">
                  <MdApartment color="#3FBCFC" />
                </div>
                <span>A & B Plc</span>
              </div>
              <div className="d-flex">
                <div className="circle bg-light me-2">
                  <MdOutlineGroups color="#3FBCFC" />
                </div>
                <span>20 Staff</span>
              </div>
            </div>
            <div className="d-flex rounded-3 p-3 mt-3 justify-content-center mx-auto mb-3 border flex-column ">
              <div className="d-flex justify-content-center">
                <span className="text-white ab ">A & B</span>
              </div>
              <div className="d-flex mb-2">
                <div className="circle bg-light me-2 ">
                  <MdApartment color="#3FBCFC" />
                </div>
                <span>A & B Plc</span>
              </div>
              <div className="d-flex">
                <div className="circle bg-light me-2">
                  <MdOutlineGroups color="#3FBCFC" />
                </div>
                <span>20 Staff</span>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex p-2 container card">
          <div className="d-flex container flex-column">
            <p>Invitations</p>
            <div className="container">
              <input
                className="form-check-input me-1 mb-3 border"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Organisation
              </label>
            </div>
            <div className="d-flex container justify-content-between mb-2">
              <div>
                <input
                  className="form-check-input me-1 mb-3 border"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  A & B Plc
                </label>
              </div>
              <div className="d-flex justify-content-center align-items-center border">
                <select className="form-control  border-0" id="exampleSelect">
                  <option>Action</option>
                  <option>Accept</option>
                  <option>Decline</option>
                </select>
                <div className="input-arrow ">
                  <MdOutlineKeyboardArrowDown />
                </div>
              </div>
            </div>
            <div className="d-flex container justify-content-between mb-2">
              <div>
                <input
                  className="form-check-input me-1 mb-3 border"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  A & B Plc
                </label>
              </div>
              <div className="d-flex justify-content-center align-items-center border">
                <select className="form-control border-0" id="exampleSelect">
                  <option>Action</option>
                  <option>Accept</option>
                  <option>Decline</option>
                </select>
                <div className="input-arrow ">
                  <MdOutlineKeyboardArrowDown />
                </div>
              </div>
            </div>
            <div className="d-flex container justify-content-between mb-2">
              <div>
                <input
                  className="form-check-input me-1 border"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  A & B Plc
                </label>
              </div>
              <div className="d-flex justify-content-center align-items-center border">
                <select className="form-control border-0" id="exampleSelect">
                  <option>Action</option>
                  <option>Accept</option>
                  <option>Decline</option>
                </select>
                <div className="input-arrow ">
                  <MdOutlineKeyboardArrowDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
