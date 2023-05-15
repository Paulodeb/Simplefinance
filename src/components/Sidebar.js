import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineAccountBalanceWallet, MdOutlinePayments, MdPayment, MdOutlineSavings, MdOutlineLogout } from "react-icons/md";
import { IoPeopleOutline, IoSettingsOutline, IoReceiptOutline } from "react-icons/io5";
import logo from "../assets/logo.svg";


const Sidebar = () => {
  return (
    <div className="container">
      <div className="row flex-nowrap">
        <div className="bg-light min-vh-100 d-flex flex-column">
          <div className="bg-light border sidebar p-2">
            <NavLink to={'/'} className="row col-auto d-non d-sm-inline col-md-7  mt-1 align-items-center">

            <img src={logo} alt="logo" className=" img-fluid w-100" />

            </NavLink>
            <div className="nav nav-pills flex-column mt-4">
              <div className="nav-item py-2 py-sm-2"
              
              >
                <NavLink to={'/wallet'}
                className=" text-decoration-none d-flex">
                  <span><MdOutlineAccountBalanceWallet/></span> 
              <span className="ms-2 fs-6 d-none d-sm-inline">Wallet</span>
                </NavLink>
              </div>
              <div className="nav-item py-2 py-sm-2">
              <NavLink to={'/staff'}  className=" text-decoration-none d-flex">
                  <span><IoPeopleOutline/></span> 
              <span className="ms-2 fs-6 d-none d-sm-inline">Staff</span>
                </NavLink>             
                 </div>
              <div className="nav-item py-2 py-sm-2">
              <NavLink to={'/payroll'}  className=" text-decoration-none d-flex">
                  <span><MdOutlinePayments/></span> 
              <span className="ms-2 fs-6 d-none d-sm-inline">Payroll</span>
                </NavLink>
              </div>
              <div className="nav-item py-2 py-sm-2">
              <NavLink to={'/bill-payment'} className="text-decoration-none d-flex">
                  <span><MdPayment/></span> 
              <span className="ms-2 fs-6 d-none d-sm-inline">Bill Payment</span>
                </NavLink>
              </div>
              <div className="nav-item py-2 py-sm-2">
              <NavLink to={'/invoice'}  className="text-decoration-none d-flex">
                  <span><IoReceiptOutline/></span> 
              <span className="ms-2 fs-6 d-none d-sm-inline">Invoice</span>
                </NavLink>
              </div>
              <div className="nav-item py-2 py-sm-2">
              <NavLink to={'/Loans-and-Overdraft'} className="text-decoration-none d-flex">
                  <span><MdOutlineSavings/></span> 
              <span className="ms-2 fs-6 d-none d-sm-inline">Loans and Overdraft</span>
                </NavLink>
              </div>
            </div>
          </div>
            <div className="ps-2">
            <div className="nav nav-pills flex-column mt-4">
            <div className="nav-item py-2 py-sm-2">
                <NavLink to={'/settings'} className="text-decoration-none d-flex">
                  <span><IoSettingsOutline/></span> 
              <span className="ms-2 fs-6 d-none d-sm-inline">Settings</span>
                </NavLink>
              </div>
              <div className="nav-item py-2 py-sm-2">
              <NavLink className=" text-decoration-none d-flex">
                  <span><MdOutlineLogout/></span> 
              <span className="ms-2 fs-6 d-none d-sm-inline">Log Out</span>
                </NavLink>             
                 </div> 
            </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
