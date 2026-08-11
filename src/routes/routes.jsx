import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Deals from "../Pages/Deals/Deals";
import Cart from "../Pages/Cart/Cart";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Checkout from "../Pages/Checkout/Checkout";
import ProductDetails from "../Pages/Product/ProductDetails";
import Registration from "../Pages/Authentication/Registration";
import Login from "../Pages/Authentication/Login";
import DashboardLayout from "../Layout/Admin/DashboardLayout";
import EmailVerification from "../Pages/Authentication/EmailVerification";
import OTP_Verification from "../Pages/Authentication/OTP_Verification";
import ResetPassword from "../Pages/Authentication/ResetPassword";
import Admin_Home from "../Layout/Admin/Admin_Home";
import About from "../Pages/About/About";
import Contact from "../Pages/About/Contact";

const PublicLayout = Main;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/shop', element: <Shop /> },
      { path: '/deals', element: <Deals /> },
      { path: '/cart', element: <Cart /> },
      { path: '/wishlist', element: <Wishlist /> },
      { path: '/checkout', element: <Checkout /> },
      { path: '/about', element: <About /> },

      { path: '/contact', element: <Contact /> },
      { path: '/product/:id', element: <ProductDetails /> },
    ]
  },

  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Admin_Home /> },
      { path: 'admin_home', element: <Admin_Home /> }
    ]
  },

  { path: '/sign_up', element: <Registration /> },
  { path: '/login', element: <Login /> },
  { path: '/verify', element: <EmailVerification /> },
  { path: '/otp_verify', element: <OTP_Verification /> },
  { path: '/reset_password', element: <ResetPassword /> },
]);