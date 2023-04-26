import React from "react";
import logo from "../../assets/logo.svg";
import "./CreateAccountStyles.css";
import { NavLink, useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-light">
      <nav className="navbar create border mb-3 navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand w-50">
            <img src={logo} alt="logo" className="img-fluid" />
          </NavLink>
          <div className="ml-auto">
            <NavLink to="/" className="small  fs-sm-4 fs-md-3 btn btn-primary">
              Log in
            </NavLink>
          </div>
        </div>
      </nav>

      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <form className="pt-4 px-2 py-5  bg-white create-form">
          <h4 className="title text-center pt-5 pt-md-2 pt-lg-4 mb-4 mb-lg-4 ">
            Create An Account For Your Business
          </h4>
          <div className="form-group px-2 px-md-5 w-100 ">
            <div className="px-3 px-sm-3 px-md-5">
                <div className='px-sm-5'>

              <label className="mb-2" htmlFor="name">
                Email Address
                </label>
              <input
                type="email"
                className="form-control mb-4"
                id="email"
                placeholder="Enter your email address"
                />
              <label className="mb-2" htmlFor="name">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control mb-4"
                id="phone"
                placeholder="Enter your phone number"
                />
              <label className="mb-2" htmlFor="name">
                Password
              </label>
              <input
                type="password"
                className="form-control mb-1"
                id="password"
                placeholder="Enter your password"
                />
              <label className="mb-2" htmlFor="name">
                NIN
              </label>
              <input
                type="number"
                className="form-control mb-1"
                id="nin"
                placeholder="Enter your NIN"
              />
              <label className="mb-2" htmlFor="name">
                BVN
              </label>
              <input
                type="number"
                className="form-control mb-1"
                id="bvn"
                placeholder="Enter your BVN"
                />
                <div className="d-flex mb-3">

              <input
                className="form-check-input me-1 mb-3 border"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                />
              <label className="form-check-label" for="flexCheckDefault">
                I've read and agreed to the Terms of Service
              </label>
                </div>
              </div>
              <div className=" px-sm-5">

              <button
                className="btn px-sm-5 btn-primary w-100 mb-3"
                onClick={(e) => {
                    e.preventDefault();
                    navigate("/VerifyAccount");
                }}
                >
                Create An Account
              </button>
                    </div>
              <p className="text-center">
                Already have an account?
                <NavLink className='ms-1' to="/">Log in </NavLink>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
