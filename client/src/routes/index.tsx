import { Routes, Route } from 'react-router-dom';
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
import Transactions from '../pages/Transactions/Transactions';
import Bookings from '../pages/Bookings/Bookings';
import Marketing from '../pages/Marketing/Marketing';


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
    transactions = '/transactions',
    bookings = '/bookings',
    marketing = '/marketing',
}

export const PageRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={RoutePaths.LandingPage} element={<LandingPage />} />
                <Route path={RoutePaths.Login} element={<Login />} />
                <Route path={RoutePaths.SignUp} element={<Signup />} />
                <Route path={RoutePaths.Dashboard} element={<Dashboard />} />
                <Route path={RoutePaths.ManufacturerDashboard} element={<ManufacturerDashboard />} />
                <Route path={RoutePaths.DistributorDashboard} element={<DistributorDashboard />} />
                <Route path={RoutePaths.Orders} element={<Orders />} />
                <Route path={RoutePaths.OrderDetails} element={<OrderDetails />} />
                <Route path={RoutePaths.trackOrders} element={<TrackOrder />} />
                <Route path={RoutePaths.shipments} element={<Shipments />} />
                <Route path={RoutePaths.invoice} element={<Invoice />} />
                <Route path={RoutePaths.refunds} element={<Refunds />} />
                <Route path={RoutePaths.transactions} element={<Transactions />} />
                <Route path={RoutePaths.bookings} element={<Bookings />} />
                <Route path={RoutePaths.marketing} element={<Marketing />} />

            </Routes>
        </>
    )
}