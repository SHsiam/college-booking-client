import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import College from "../Pages/Colleges/College/College";
import Details from "../Pages/Colleges/Details/Details/Details";
import Event from "../Pages/Colleges/Details/Event/Event";
import AdmissionProcess from "../Pages/Colleges/Details/AdmissionProcess/AdmissionProcess";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/college',
          element:<College></College>
        },
        {
          path:'/college/:id',
          element:<Details></Details> ,
          loader: ({params}) => fetch(`https://college-booking-server-mdshiam4-gmailcom.vercel.app/college/${params.id}`)
        },
        {
          path:'/event',
          element:<Event></Event>
        },
        {
          path:'/admissionprocess',
          element:<AdmissionProcess></AdmissionProcess>

        },
        {
          path:'/admission',
          element:<Admission></Admission>

        },
        {
          path:'/mycollege',
          element:<MyCollege></MyCollege>
        }
      ]
    },
  ]);
  export default router;