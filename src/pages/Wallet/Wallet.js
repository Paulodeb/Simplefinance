import React from "react";
import "./WalletStyles.css";
import Sidebar from "../../components/Sidebar";
import {
  MdOutlineKeyboardArrowDown,
  MdContentCopy,
  MdMoreVert
} from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


import Slider from "react-slick";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  datasets: [
    {
      label: '',
      data: [30, 70],
      backgroundColor: [
        'rgba(63, 188, 252, 1)',
        'rgba(153, 255, 255, 1)',
      ],
    }
  ]
}

const Wallet = () => {
  return (
    <div className="row w-100 ">
      <div className="col-2 border">
        <Sidebar />
      </div>
      <div className="col-10 border">
        <div className="d-flex flex-wrap container justify-content-end">
          <div className=" d-flex ">
            <div className="d-flex mt-3 justify-content-center">
              <BsBell size={25} />
            </div>
            <img
              src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
              alt="profile"
              className="img-fluid mt-2 me-1 cover"
            />
            <div className="w-100  mt-2 d-flex flex-column">
              <span className="">Emmanuel Adebayo</span>
              <span className="email-text">emmanuel@mail.com</span>
            </div>
            <div className="mt-2">
              <MdOutlineKeyboardArrowDown color="" size={30} />
            </div>
          </div>
        </div>
        <div className="d-flex container mt-2 justify-content-between">
          <h3>Wallet</h3>
          <button className="btn btn-primary">Add New Wallet</button>
        </div>
        
        <div className="row w-100 border px-xl-3 ms-xl-1 justify-content-center mt-2">
        <div className="row col-lg-9 container border col-xl-8 me-lg-4 me-xl-5 pt-5 rounded-3 bg-light">
          <div className=" border col-md-6 col-sm-8 col-12 pb-3">

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
                <h5 className="card-title text-white">NGN 1,000,000.00</h5>
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
          <div className="border w-100 mt-4">
            <div className="d-flex justify-content-between">
              <div>
              <span className="fs-8">Daily Transaction: N2,000,000</span>
              </div>
              <div>
              <span>Upgrade Limit</span>
              </div>
            </div>
            <div className="progress-bar rounded-4">
  <div className="progress-fill rounded-4" style={{width: '30%'}}></div>
</div>
<div className="d-flex justify-content-between">
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

          <div className="border col-md-6 col-sm-8 col-12">
          <div className="card rounded-4 linear-background-2 border">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <span className="fs-8 text-white">SUBSCRIPTIONS</span>
                <div className="">
                  <button className="btn top-up">Top up</button>
                </div>
              </div>
              <div className="d-flex flex-column mt-3 ">
              <span className="fs-7 text-white ">Wallet balance</span>
              <div className="d-flex justify-content-between">
                <h5 className="card-title text-white">NGN 20,000,000.00</h5>
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
          <div className="border w-100 mt-4">
            <div className="d-flex justify-content-between">
              <div>
              <span className="fs-8">Daily Transaction: N2,000,000</span>
              </div>
              <div>
              <span>Upgrade Limit</span>
              </div>
            </div>
            <div className="progress-bar rounded-4">
  <div className="progress-fill rounded-4" style={{width: '30%'}}></div>
</div>
<div className="d-flex justify-content-between">
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
        </div>


          <div className=" row justify-content-center border bg-light col-md-5 col-8 col-lg-3 char rounded-3">
            <div className="d-flex col-12 justify-content-center flex-column card-body">
              <div className="text-center py-4">
              <h5 className="card-title fs-8">SUMMARY OF ACCOUNTS</h5>
              </div>
              <div className="d-flex h-50 justify-content-center">
              <Doughnut data={data}/>
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
      </div>
    </div>
  );
};

export default Wallet;
