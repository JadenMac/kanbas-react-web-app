import "../Vendors/bootstrap-5.1.3-dist/css/bootstrap.min.css"
import "../Vendors/fontawesome-free-6.4.2-web/css/all.css"
import "./index.css"
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./KanbasNavigation/KanbasNavigation.js";
import db from "./Database"
import Courses from "./Courses"

function Kanbas() {
 return (
  <div className="container-fluid">
   <div className='row d-flex'>
   <div className="col-2  kanbas-nav">
     <KanbasNavigation/>
     </div>
     <div class="col main-home-col">

     <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="Courses/" element={<Navigate to={`${db.courses[0]._id}`} />} />

        </Routes>
    </div>
   </div>
   </div>
 )
}
export default Kanbas


