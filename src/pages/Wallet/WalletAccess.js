import React from "react";
import { BiDownload, BiFilter } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

const WalletAccess = () => {
  return (
    <div>
      <div className="d-flex flex-column">
        <div className="d-flex flex-wrap w-100 justify-content-between">
          <div className="col-md-5 d-flex mb-3 col-12">
            <div className="position-absolute ms-3 mt-1">
              <BsSearch />
            </div>
            <input
              type="text"
              placeholder="Search transactions"
              className="w-75 ps-5 form-control"
            />
          </div>
          <div className="">
            <div className=" d-flex flex-wrap">
              <div className="btn btn-primary">ADD ACCESS</div>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead className="fs-md-7 bg-light">
              <tr>
                <th>Staff</th>
                <th>Access Permission</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex">
                    <img
                      src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
                      alt="profile"
                      className="img-fluid mt-2 me-1 cover"
                    />
                    <div className="w-100  mt-2 d-flex flex-column">
                      <span className="">Emmanuel Adebayo</span>
                      <span className="email-text">emmanuel@mail.com</span>
                    </div>
                  </div>
                </td>
                <td>View Only</td>
                <td className="">Edit Access</td>
                <td className="btn bg-primary btn-primary">Remove Access</td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex">
                    <img
                      src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
                      alt="profile"
                      className="img-fluid mt-2 me-1 cover"
                    />
                    <div className="w-100  mt-2 d-flex flex-column">
                      <span className="">Emmanuel Adebayo</span>
                      <span className="email-text">emmanuel@mail.com</span>
                    </div>
                  </div>
                </td>
                <td>View Only</td>
                <td className="">Edit Access</td>
                <td className="btn bg-primary btn-primary">Remove Access</td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex">
                    <img
                      src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
                      alt="profile"
                      className="img-fluid mt-2 me-1 cover"
                    />
                    <div className="w-100  mt-2 d-flex flex-column">
                      <span className="">Emmanuel Adebayo</span>
                      <span className="email-text">emmanuel@mail.com</span>
                    </div>
                  </div>
                </td>
                <td>View Only</td>
                <td className="">Edit Access</td>
                <td className="btn bg-primary btn-primary">Remove Access</td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex">
                    <img
                      src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
                      alt="profile"
                      className="img-fluid mt-2 me-1 cover"
                    />
                    <div className="w-100  mt-2 d-flex flex-column">
                      <span className="">Emmanuel Adebayo</span>
                      <span className="email-text">emmanuel@mail.com</span>
                    </div>
                  </div>
                </td>
                <td>View Only</td>
                <td className="">Edit Access</td>
                <td className="btn bg-primary btn-primary">Remove Access</td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex">
                    <img
                      src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
                      alt="profile"
                      className="img-fluid mt-2 me-1 cover"
                    />
                    <div className="w-100  mt-2 d-flex flex-column">
                      <span className="">Emmanuel Adebayo</span>
                      <span className="email-text">emmanuel@mail.com</span>
                    </div>
                  </div>
                </td>
                <td>View Only</td>
                <td className="">Edit Access</td>
                <td className="btn bg-primary btn-primary">Remove Access</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WalletAccess;
