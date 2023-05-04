import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineAccountBalanceWallet, MdOutlinePayments, MdPayment, MdOutlineSavings, MdOutlineLogout } from "react-icons/md";
import { IoPeopleOutline, IoSettingsOutline, IoReceiptOutline } from "react-icons/io5";
import logo from "../assets/logo.svg";


const Sidebar = () => {
  return (
    <div className="">
      <div className="row flex-nowrap">
        <div className="bg-light min-vh-100 d-flex flex-column">
          <div className="bg-light border p-2">
            <NavLink className="row col-auto d-non d-sm-inline col-md-7  mt-1 align-items-center">

            <img src={logo} alt="logo" className=" img-fluid w-100" />

            </NavLink>
            <ul className="nav nav-pills flex-column mt-4">
              <li className="nav-item py-2 py-sm-2">
                <NavLink className="nav-lin text-decoration-none text-dark d-flex active">
                  <div><MdOutlineAccountBalanceWallet/></div> 
              <span className="ms-2 fs-6 d-none d-sm-inline">Wallet</span>
                </NavLink>
              </li>
              <li className="nav-item py-2 py-sm-2">
              <NavLink className=" text-decoration-none text-dark d-flex">
                  <div><IoPeopleOutline/></div> 
              <span className="ms-2 fs-6 d-none d-sm-inline">Staff</span>
                </NavLink>             
                 </li>
              <li className="nav-item py-2 py-sm-2">
              <NavLink className="text-dark text-decoration-none d-flex">
                  <div><MdOutlinePayments/></div> 
              <span className="ms-2 fs-6 d-none d-sm-inline">Payroll</span>
                </NavLink>
              </li>
              <li className="nav-item py-2 py-sm-2">
              <NavLink className="text-dark text-decoration-none d-flex">
                  <div><MdPayment/></div> 
              <span className="ms-2 fs-6 d-none d-sm-inline">Bill Payment</span>
                </NavLink>
              </li>
              <li className="nav-item py-2 py-sm-2">
              <NavLink className="text-dark text-decoration-none d-flex">
                  <div><IoReceiptOutline/></div> 
              <span className="ms-2 fs-6 d-none d-sm-inline">Invoice</span>
                </NavLink>
              </li>
              <li className="nav-item py-2 py-sm-2">
              <NavLink className="text-dark text-decoration-none d-flex">
                  <div><MdOutlineSavings/></div> 
              <span className="ms-2 fs-6 d-none d-sm-inline">Loans and Overdraft</span>
                </NavLink>
              </li>
            </ul>
          </div>
            <div className="ps-2">
            <ul className="nav nav-pills flex-column mt-4">
            <li className="nav-item py-2 py-sm-2">
                <NavLink className="nav-lin text-decoration-none text-dark d-flex active">
                  <div><IoSettingsOutline/></div> 
              <span className="ms-2 fs-6 d-none d-sm-inline">Settings</span>
                </NavLink>
              </li>
              <li className="nav-item py-2 py-sm-2">
              <NavLink className=" text-decoration-none text-dark d-flex">
                  <div><MdOutlineLogout/></div> 
              <span className="ms-2 fs-6 d-none d-sm-inline">Log Out</span>
                </NavLink>             
                 </li> 
            </ul>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
