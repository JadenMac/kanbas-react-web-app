import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation, Link } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/AssignmentEditor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";


function Courses({courses}) {
  const { courseId } = useParams();
  const URL = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);


  const {pathname} = useLocation();


  return (
    <div>


        <div className="col" >       
        <div>
    <div className="row d-flex align-items-center pt-2">
          <div className="col-1">
          <Link to="Nav"><i className="fa-solid fa-bars fa-lg"></i></Link> 
      </div>
      <div class="col">

   
      <nav style={{"--bsBreadcrumbDivider": ">"}} aria-label="breadcrumb" >
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="./Home">{course.name}</Link></li>
          <li className="breadcrumb-item active" aria-current="page">
          {pathname.includes("Home") &&<>Home</>} 
          {pathname.includes("Modules") &&<>Modules</>}
          {pathname.includes("Assignments") &&<>Assignments</>} 
          {pathname.includes("Assignment Editor") &&<>Assignment Editor</>} 
          {pathname.includes("Grades") &&<>Grades</>} 
          </li>
        </ol>
      </nav>
    </div>
    <div className="col">
      <button className="btn btn-light float-right"><i className="m-1 fa-solid fa-glasses "></i>Student View</button>
    </div>
      <hr />
        </div>



    <div className="row">
    <div class="col d-none d-md-block course-navigation-col">
    <CourseNavigation />   
    </div>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
            <Route path="Grades" element={<Grades />} />
            <Route path="Nav" element={<div class="col  d-md-none course-navigation-col">
              <CourseNavigation/>
            </div>} />
          </Routes>        
          </div>      
          </div>

    </div>
    </div>

  );
}
export default Courses;