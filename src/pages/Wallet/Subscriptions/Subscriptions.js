import React from "react";
import "../WalletStyles.css";
import { NavLink, Outlet } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";
import {
  MdOutlineKeyboardArrowDown,
  MdContentCopy,
  MdMoreVert, MdOutlineCreditCardOff, MdGroups, MdSyncAlt, 
} from "react-icons/md";
import Simcard from "../../../assets/simcard.svg";
import { AiOutlineEye } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Linear from "../../../assets/Vector Linear.svg"

import Slider from "react-slick";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  datasets: [
    {
      label: "",
      data: [30, 70],
      backgroundColor: ["rgba(63, 188, 252, 1)", "rgba(153, 255, 255, 1)"],
    },
  ],
};



const Subscriptions = () => {
  return (
    <div className="row container w-100 ">
    
    <div className="col">
      <div className="row w-100 px-xl-3 ms-xl-1 justify-content-center mt-2">
        <div className="row col-lg-9 container border col-xl-8 me-lg-4 me-xl-5 pt-5 rounded-3 bg-light">
          <div className="col-md-6 col-sm-8 col-12 pb-3">
            <div className=" card me-lg-3 me-0 rounded-4 linear-background ">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <span className="fs-8 text-white">PRIMARY ACCOUNT</span>
                  <div className="">
                    <button className="btn top-up">Top up</button>
                  </div>
                </div>
                <div className="d-flex flex-column mt-3 ">
                  <span className="fs-7 text-white ">Account balance</span>
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title text-white">
                      NGN 1,000,000.00
                    </h5>
                    <div>
                      <AiOutlineEye color="#fff" />
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-3 flex-column">
                  <span className="fs-7 text-white">Providus Bank</span>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <span className="fs-7 text-white">0119968330</span>
                      <div className="ms-1">
                        <MdContentCopy color="#fff" />
                      </div>
                    </div>
                    <div>
                      <MdMoreVert color="#fff" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100 mt-4">
              <div className="d-flex justify-content-between">
                <div>
                  <span className="fs-8">Daily Transaction: N2,000,000</span>
                </div>
                <div>
                  <span className="fs-8">Upgrade Limit</span>
                </div>
              </div>
              <div className="progress-bar rounded-4">
                <div
                  className="progress-fill rounded-4"
                  style={{ width: "30%" }}
                ></div>
              </div>
              <div className="d-flex flex-wrap justify-content-between">
                <div className="d-flex">
                  <div className="used-2 mt-1"></div>
                  <span className="fs-8 ms-1">N100,000</span>
                  <span className="fs-8 ms-1">used</span>
                </div>
                <div className="d-flex ">
                  <div className="remaining mt-1"></div>
                  <span className="fs-8 ms-1">N100,000</span>
                  <span className="fs-8 ms-1">remaining</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-8 col-12">
            <div className="card rounded-4 linear-background-3 subscription border">
              <img src={Linear} alt="" className="curve text-white"/>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <span className="fs-8 text-white"></span>
                  <div className="">
                    <div><img src={Simcard} alt="" className=""/></div>
                  </div>
                </div>
                <div className="d-flex flex-column">
                    <h5 className="card-title text-white">
                      **** **** **** 1234
                    </h5>
                </div>
                <div className="d-flex flex-column">
                  <span className="fs-7 text-white">Subscriptions</span>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="d-flex flex-column">
                        <div className="fs-7 text-white">Valid</div>
                      <div className="fs-7 text-white">Till</div>
                      </div>
                      <div className="ms-1">
                        <span className="fs-7 text-white">05/22</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100 mt-4">
             
              <div className="d-flex justify-content-center align-items-center ">
                <div className="d-flex me-3 align-items-center flex-column">
                  <div className="circle text-white bg-primary"><MdSyncAlt/></div>
                  <span className="fs-8 py-2">Bank Transfer</span>
                 
                </div>
                <div className="d-flex align-items-center flex-column">
                  <div className=" circle bg-warning text-white"><MdGroups/></div>
                  <span className="fs-8 py-2">Bulk Transfer</span>
                  
                </div>
                <div className="d-flex ms-3 align-items-center flex-column">
                  <div className="circle bg-dark text-white"><MdOutlineCreditCardOff/></div>
                  <span className="fs-8 py-2 ">Disable Card</span>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" row justify-content-center border bg-light col-md-5 col-8 col-lg-3 char rounded-3">
          <div className="d-flex col-12 justify-content-center flex-column card-body">
            <div className="text-center py-4">
              <h5 className="card-title fs-8">SUMMARY OF ACCOUNTS</h5>
            </div>
            <div className="d-flex h-50 justify-content-center">
              <Doughnut data={data} />
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <span className="income mt-2"></span>
                <p className="mt-1">Total Income</p>
              </div>
              <span>N20,000</span>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <span className="income mt-2"></span>
                <p className="mt-1">Total Expenses</p>
              </div>
              <span>N20,000</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 container">
        <h3 className="mb-3">SUBSCRIPTIONS</h3>
        <div className="d-flex flex-wrap wallet">
        <NavLink className='text-decoration-none border-bottom pe-3' to='/wallet/subscription/transaction-log'>
        Recent Transaction Log
        </NavLink>
        <NavLink className='text-decoration-none border-bottom pe-3' to='/wallet/subscription/wallet-access'>
        Wallet Access
        </NavLink>
        <NavLink className='text-decoration-none border-bottom pe-3' to='/wallet/subscription/reset-wallet-pin'>
       Reset Wallet Pin
        </NavLink>
        <NavLink className='text-decoration-none border-bottom pe-3' to='/wallet/subscription/bulk-transfer-history'>
        Bulk Transfer History
        </NavLink>
        <NavLink className='text-decoration-none border-bottom' to='/wallet/subscription/statement-of-account'>
        Statement Of Account
        </NavLink>
        </div>
      </div>
      <div className="mt-3">
        <Outlet/>
      </div>
    </div>
  </div>
  )
}

export default Subscriptions