import "../Vendors/bootstrap-5.1.3-dist/css/bootstrap.min.css"
import "../Vendors/fontawesome-free-6.4.2-web/css/all.css"
import "./index.css"
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./KanbasNavigation/KanbasNavigation.js";
import db from "./Database"
import Courses from "./Courses"
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

function Kanbas() {

  const [courses, setCourses] = useState([]);
  const URL = `${API_BASE}/courses`;
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([ response.data, ...courses, ]);
  };
  const deleteCourse = async (course) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );

    setCourses(courses.filter((c) => c._id !== course._id));
  };
  const updateCourse = async () => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );

    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
    setCourse({ name: "" });
  };

  

 return (
  <Provider store={store}>
  <div className="container-fluid">
   <div className='row d-flex '>
   <div className="col-2  kanbas-nav">
     <KanbasNavigation/>
     </div>
     <div class="col main-home-col">

     <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>} />
          
          <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>} />
          <Route path="Courses/" element={courses.length > 0 &&<Navigate to={`${courses[0]._id}`} />} />

        </Routes>
    </div>
   </div>
   </div>
  </Provider>

 )
}
export default Kanbas


