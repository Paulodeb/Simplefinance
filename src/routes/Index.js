import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import CreateAccount from '../pages/CreateAccount/CreateAccount'
import VerifyAccount from '../pages/VerifyAccount/VerifyAccount'
import GetStarted from '../pages/GetStarted/GetStarted'
import OrgProfile1 from '../pages/OrgProfile/OrgProfile1'
import NewLogin from '../pages/Login/NewLogin'
import OrgProfile2 from '../pages/OrgProfile/OrgProfile2'
import OrgProfile3 from '../pages/OrgProfile/OrgProfile3'
import StaffPasswordReset from '../pages/StaffOnboarding/StaffPasswordReset'
import CompleteProfile from '../pages/StaffOnboarding/CompleteProfile'
import KycVerification from '../pages/CreateAnAccount/KycVerification'
import AccountSetup from '../pages/CreateAnAccount/AccountSetup'
import ForgetPassword from '../pages/StaffOnboarding/ForgetPassword'
import PasswordReset from '../pages/StaffOnboarding/PasswordReset'
import Invite from '../pages/StaffOnboarding/Invite'
import InviteVerify from '../pages/StaffOnboarding/InviteVerify'
import OrgProfile from '../pages/OrganisationSetup/OrgProfile'
import OrgDetails from '../pages/OrganisationSetup/OrgDetails'
import OrgVerification from '../pages/OrganisationSetup/OrgVerification'
import Error404 from '../pages/Error/Error404'
import ErrorPage from '../pages/Error/ErrorPage'
import UserDashboard from '../pages/Dashbord/UserDashboard'
import IndexWallet from '../pages/Wallet/IndexWallet'
import Staff from '../pages/Staff/Staff'
import Payroll from '../pages/Payroll/Payroll'
import Settings from '../pages/Settings/Settings'
import Invoice from '../pages/Invoice/Invoice'
import BillPayment from '../pages/BillPayment/BillPayment'
import LoansOverdraft from '../pages/LoansOverdraft/LoansOverdraft'
import TransactionLog from '../pages/Wallet/TransactionLog'
import PrimaryAccount from '../pages/Wallet/PrimaryAccount/PrimaryAccount'
import WalletAccess from '../pages/Wallet/WalletAccess'
import ResetWalletPin from '../pages/Wallet/ResetWalletPin'
import BulkTransferHistory from '../pages/Wallet/BulkTransferHistory'
import StatementOfAccount from '../pages/Wallet/StatementOfAccount'
import Subscriptions from '../pages/Wallet/Subscriptions/Subscriptions'
import CreateNewInvoice from '../pages/Invoice/CreateNewInvoice'
import InvoiceDashboard from '../pages/Invoice/InvoiceDashboard'
import Wallet from '../pages/Wallet/Outlet/Wallet'


const Index = () => {
  return (
    <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<NewLogin />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/create-account" element={<Register />} />
        <Route path="/VerifyAccount" element={<VerifyAccount />} />
        <Route path="/GetStarted" element={<GetStarted />} />
        <Route path='/OrgProfile' element={<OrgProfile1/>} />
        <Route path='/add-org-details' element={<OrgProfile2/>} />
        <Route path='/director-details' element={<OrgProfile3/>} />
        <Route path='/staff-password-reset' element={<StaffPasswordReset/>} />
        <Route path='/forget-password' element={<ForgetPassword/>} />
        <Route path='/reset-password' element={<PasswordReset/>} />
        <Route path='/complete-profile' element={<CompleteProfile/>} />
        <Route path='/kyc-verification' element={<KycVerification/>} />
        <Route path='/account-setup' element={<AccountSetup/>} />
        <Route path='/invite' element={<Invite/>} />
        <Route path='/invite-verify' element={<InviteVerify/>} />
        <Route path='/org-profile' element={<OrgProfile/>} />
        <Route path='/org-details' element={<OrgDetails/>} />
        <Route path='/org-verification' element={<OrgVerification/>} />
        <Route path='/error404' element={<Error404/>} />
        <Route path='/errorpage' element={<ErrorPage/>} />
        <Route path='/user-dashboard' element={<UserDashboard/>} />
        <Route path='/wallet' element={<IndexWallet/>}>
          <Route path='/wallet/account' element={<Wallet/>} >
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
          <Route path='wallet/subscription/transaction-log' element={<TransactionLog/>} />
          <Route path='/wallet/subscription/wallet-access' element={<WalletAccess/>} />
          <Route path='/wallet/subscription/reset-wallet-pin' element={<ResetWalletPin/>} />
          <Route path='/wallet/subscription/bulk-transfer-history' element={<BulkTransferHistory/>} />
          <Route path='/wallet/subscription/statement-of-account' element={<StatementOfAccount/>} />
          </Route>
        </Route>
        <Route path='/staff' element={<Staff/>} />
        <Route path='/payroll' element={<Payroll/>} />
        <Route path='/bill-payment' element={<BillPayment/>} />
        <Route path='/invoice' element={<Invoice/>} />
        <Route path='/invoice-dashboard' element={<InvoiceDashboard/>} />
        <Route path='/create-invoice' element={<CreateNewInvoice/>} />
        <Route path='/Loans-and-Overdraft' element={<LoansOverdraft/>} />
        <Route path='/settings' element={<Settings/>} />
        <Route path='*' element={<Error404/>} />
    </Routes>
  )
}

export default Index