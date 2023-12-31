import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout.jsx'
import Home from './components/Home/Home.jsx'
import Statistics from './components/Statistics/Statistics.jsx'
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import JobDetail from './components/JobDetail/JobDetail.jsx'
import loadIndividualJob from './customLoaders/LoadIndividualJob.js'

// const [appliedJobs,setAppliedJobs] = useState([]);
// const appliedJobsContext = createContext([]);

const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/applied-jobs',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      }
      ,{
        path:'/:id',
        element:<JobDetail></JobDetail>,
        loader:() => fetch('jobData.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
