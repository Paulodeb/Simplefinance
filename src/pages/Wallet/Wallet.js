import React from "react";
import "./WalletStyles.css";
import Sidebar from "../../components/Sidebar";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsBell } from 'react-icons/bs'
const Wallet = () => {
    return (
        <div className="row ">
        <div className="col-3 border">
        <Sidebar/>
        </div>
        <div className="col-9 border">
            <div className="d-flex container justify-content-end">
               <div className=" d-flex ">
               <div className="d-flex mt-3 justify-content-center">
               <BsBell size={25}/>
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
            <div className="row container mt-2">
            <div className="col-5 card border">
            <div className="card-body">
            <h5 className="card-title">Wallet 1</h5>
            </div>
            </div>
            <div className="col-5 card border">
            <div className="card-body">
            <h5 className="card-title">Wallet 2</h5>
            </div>
            </div>
            <div className="col-2 card border">
            <div className="card-body">
            <h5 className="card-title">Wallet 3</h5>
            </div>
            </div>
            </div>

        </div>

        </div>
     );
};

export default Wallet;
