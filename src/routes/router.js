import { Outlet, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import NewLogin from "../pages/Login/NewLogin";
import CreateAccount from "../pages/CreateAccount/CreateAccount";
import VerifyAccount from "../pages/VerifyAccount/VerifyAccount";
import GetStarted from "../pages/GetStarted/GetStarted";
import OrgProfile3 from "../pages/OrgProfile/OrgProfile3";
import OrgProfile2 from "../pages/OrgProfile/OrgProfile2";
import OrgProfile1 from "../pages/OrgProfile/OrgProfile1";
import UserDashboard from "../pages/Dashbord/UserDashboard";
import Error404 from "../pages/Error/Error404";
import Wallet from "../pages/Wallet/Outlet/Wallet";
import Sidebar from "../components/Sidebar";
import IndexWallet from "../pages/Wallet/IndexWallet";
import TransactionLog from "../pages/Wallet/TransactionLog";
import StatementOfAccount from "../pages/Wallet/StatementOfAccount";
import BulkTransferHistory from "../pages/Wallet/BulkTransferHistory";
import ResetWalletPin from "../pages/Wallet/ResetWalletPin";
import WalletAccess from "../pages/Wallet/WalletAccess";
import PrimaryAccount from "../pages/Wallet/PrimaryAccount/PrimaryAccount";
import Subscriptions from "../pages/Wallet/Subscriptions/Subscriptions";
import Invoice from "../pages/Invoice/Invoice";
import IndexInvoice from "../pages/Invoice/IndexInvoice";
import CreateNewInvoice from "../pages/Invoice/CreateNewInvoice";


const Wallets = () => {
    return (
        <div className="row">
        <div className="col-3">
        <div className="">
            <Sidebar/>
        </div>
        </div>
        <div className="col-9">
            <IndexWallet/>
            <Outlet />
        </div>
        </div>
    )
}

const RootInvoice = () => {
  return (
      <div className="row">
      <div className="col-3">
      <div className="">
          <Sidebar/>
      </div>
      </div>
      <div className="col-9">
          <IndexInvoice/>
          <Outlet />
      </div>
      </div>
  )
}

const Root = () => {
    return (
      <>
        <Outlet />
      </>
    )
  }

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>

      <Route path="/" element={<Root/>}
      errorElement={<Error404/>}
      >
        <Route index element={<NewLogin/>} />
        <Route path="/CreateAccount" element={<CreateAccount/>} />
        <Route path="/VerifyAccount" element={<VerifyAccount/>} />
        <Route path="/GetStarted" element={<GetStarted />} />
        <Route path='/OrgProfile' element={<OrgProfile1/>} />
        <Route path='/add-org-details' element={<OrgProfile2/>} />
        <Route path='/director-details' element={<OrgProfile3/>} />
        <Route path='/user-dashboard' element={<UserDashboard/>} />
      </Route>
      <Route path="/wallet" element={<Wallets/>} >
      <Route index element={<Wallet/>} />
      <Route path="/wallet/account" element={<Wallet/>} >
        <Route path='/wallet/account/transaction-log' element={<TransactionLog/>} />      
      </Route>
      <Route path='/wallet/primary-account' element={<PrimaryAccount/>}>
          <Route path='/wallet/primary-account/transaction-log' element={<TransactionLog/>} />
          <Route path='/wallet/primary-account/wallet-access' element={<WalletAccess/>} />
          <Route path='/wallet/primary-account/reset-wallet-pin' element={<ResetWalletPin/>} />
          <Route path='/wallet/primary-account/bulk-transfer-history' element={<BulkTransferHistory/>} />
          <Route path='/wallet/primary-account/statement-of-account' element={<StatementOfAccount/>} />
          </Route>
          <Route path='/wallet/subscription' element={<Subscriptions/>}>
          <Route path='/wallet/subscription/transaction-log' element={<TransactionLog/>} />
          <Route path='/wallet/subscription/wallet-access' element={<WalletAccess/>} />
          <Route path='/wallet/subscription/reset-wallet-pin' element={<ResetWalletPin/>} />
          <Route path='/wallet/subscription/bulk-transfer-history' element={<BulkTransferHistory/>} />
          <Route path='/wallet/subscription/statement-of-account' element={<StatementOfAccount/>} />
          </Route>
      </Route>

      <Route path="/invoice" element={<RootInvoice/>}>
      <Route index element={<Invoice/>} />
      <Route path='/invoice/create-invoice' element={<CreateNewInvoice/>} />
      </Route>

        </>
    )
  );