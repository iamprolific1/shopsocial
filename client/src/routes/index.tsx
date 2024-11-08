import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../pages';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup'
import Dashboard from '../pages/Dashboard/Dashboard';
import ManufacturerDashboard from '../pages/Dashboard/ManufacturerDashboard';
import DistributorDashboard from '../pages/Dashboard/DistributorDashboard';
import Orders from '../pages/Orders/Orders';
import { OrderDetails } from '../pages/Orders/OrderDetails';
import { TrackOrder } from '../pages/Orders/OrderTracking';
import Shipments from '../pages/Shipments/Shipment';
import Invoice from '../pages/Invoice/Invoice';
import Refunds from '../pages/Refunds/Refunds';
import RefundsDetails from '../pages/Refunds/RefundsDetails';
import Transactions from '../pages/Transactions/Transactions';
import Bookings from '../pages/Bookings/Bookings';
import Marketing from '../pages/Marketing/Marketing';
import Campaign from '../pages/Campaign/Campaign';
import EmailTemp from '../pages/EmailTemplates/EmailsTemp';
import HelpIndex from '../pages/Help';
import HelpCancelOrder from '../pages/Help/OrderCancelation';
import HelpPayment from '../pages/Help/Payment';
import HelpPlaceOrder from '../pages/Help/PlaceOrder';
import HelpReturnRefunds from '../pages/Help/ReturnRefunds';
import HelpTrackOrders from '../pages/Help/TrackOrder';
import PaymentGateway from '../pages/Payment/Payment';
import VerifyEmail from '../pages/VerifyEmail/VerifyEmail';

import ProtectedRoutes from './ProtectedRoutes';
import { useAuth } from '../providers/AuthProvider';
import { useToast } from '../providers/ToastProvider';
import { ClipLoader } from 'react-spinners';


enum RoutePaths {
    LandingPage = '/',
    Login = '/login',
    SignUp = '/signup',
    Dashboard = '/vendor/dashboard',
    ManufacturerDashboard = '/manufacturer/dashboard',
    DistributorDashboard = '/distributor/dashboard',
    Orders = '/orders',
    OrderDetails = '/orders/:orderId',
    trackOrders = '/track-orders',
    shipments = '/shipment',
    invoice = '/invoice',
    refunds = '/refunds',
    refundDetails = '/refunds/:refundId',
    transactions = '/transactions',
    bookings = '/bookings',
    marketing = '/marketing',
    campaign = '/campaign',
    email = '/templates/emails',
    help = '/help',
    cancelOrder = '/help/cancel-orders',
    helpPayment = '/help/payment',
    placeOrder = '/help/place-orders',
    helpreturnrefunds = '/help/return-refunds',
    helpTrackOrders = '/help/track-orders',
    payment = '/payment',
    verifyEmail = '/verify-email',
}

interface RouteProps {
    children: React.ReactNode;
}


const RedirectAuthenticatedUser: React.FC<RouteProps> = ({ children }) => {
    const { showToast } = useToast();
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-[100vh]">
                <ClipLoader size={50} color={"#3f51b5"} loading={isLoading} cssOverride={{
                    borderWidth: '6px'
                }} />
            </div>
        );
    }

    // Redirect to landing page if already authenticated
    if (isAuthenticated) {
        showToast("You're already logged in, redirecting...", 'info', {
            vertical: 'top',
            horizontal: 'center',
        });
        return <Navigate to={RoutePaths.LandingPage} replace/>;
    }

    return <>{children}</>;
};


export const PageRoutes = () => {
    return (
        <>
            <Routes>
                    <Route path={RoutePaths.LandingPage} element={<LandingPage />} />
                <Route element={<ProtectedRoutes />}>
                    <Route path={RoutePaths.Dashboard} element={<Dashboard />} />
                    <Route path={RoutePaths.ManufacturerDashboard} element={<ManufacturerDashboard />} />
                    <Route path={RoutePaths.DistributorDashboard} element={<DistributorDashboard />} />
                    <Route path={RoutePaths.Orders} element={<Orders />} />
                    <Route path={RoutePaths.OrderDetails} element={<OrderDetails />} />
                    <Route path={RoutePaths.trackOrders} element={<TrackOrder />} />
                    <Route path={RoutePaths.shipments} element={<Shipments />} />
                    <Route path={RoutePaths.invoice} element={<Invoice />} />
                    <Route path={RoutePaths.refunds} element={<Refunds />} />
                    <Route path={RoutePaths.refundDetails} element={<RefundsDetails />} />
                    <Route path={RoutePaths.transactions} element={<Transactions />} />
                    <Route path={RoutePaths.bookings} element={<Bookings />} />
                    <Route path={RoutePaths.marketing} element={<Marketing />} />
                    <Route path={RoutePaths.campaign} element={<Campaign />} />
                    <Route path={RoutePaths.email} element={<EmailTemp />} />
                    <Route path={RoutePaths.payment} element={<PaymentGateway />} />
                </Route>
                <Route path={RoutePaths.Login} element={
                    <RedirectAuthenticatedUser>
                        <Login />
                    </RedirectAuthenticatedUser>
                }/>
                <Route path={RoutePaths.SignUp} element={
                    <RedirectAuthenticatedUser>
                        <Signup />
                    </RedirectAuthenticatedUser>
                }/>
                <Route path={RoutePaths.help} element={<HelpIndex />} />
                <Route path={RoutePaths.cancelOrder} element={<HelpCancelOrder />} />
                <Route path={RoutePaths.helpPayment} element={<HelpPayment />} />
                <Route path={RoutePaths.placeOrder} element={<HelpPlaceOrder />} />
                <Route path={RoutePaths.helpreturnrefunds} element={<HelpReturnRefunds />} />
                <Route path={RoutePaths.helpTrackOrders} element={<HelpTrackOrders />} />
                <Route path={RoutePaths.verifyEmail} element={<VerifyEmail />} />
            </Routes>
        </>
    )
}