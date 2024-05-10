import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import View from "../pages/View";
import Create from "../pages/Create";
import Account from "../pages/Account";
import Billing from "../pages/Billing";
import PrivateRoute from "./PrivateRoute";
 
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register />
        },
  
      ]
    },{
      path:"dashboard",
      element:<PrivateRoute><DashboardLayout/></PrivateRoute>,
      children:[
        {
          index:true,
          element:<PrivateRoute><View/></PrivateRoute>
        },
        {
          path:'create',
          element:<PrivateRoute><Create/></PrivateRoute>
        },
        {
          path:'account',
          element:<PrivateRoute><Account/></PrivateRoute>
        },
        {
          path:'billing',
          element:<PrivateRoute><Billing/></PrivateRoute>
        },
      ]
    }
  ]);
  
  export default router;