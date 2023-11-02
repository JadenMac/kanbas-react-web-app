import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }) {
  

  return (
    <div className="col dashboard-main-section">

 

            <h1>Dashboard</h1>
            <h5>Course</h5>
            <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
            <button className="btn btn-success" onClick={addNewCourse} >
        Add
      </button>
      <button className="btn btn-primary" onClick={updateCourse} >
        Update
      </button>


            <hr />
            <div className="dashboard-sub">
            <h3 >Published Courses (24)</h3>
            <hr />
            </div>
    <div className="row d-flex flex-wrap dashboard-sub">

        {courses.map((course) => (
            <div className="card" >
            <div className="wd-card-top">
                <Link className="ellipsis-icon ml-auto"> <i className="fa-solid fa-ellipsis-vertical"></i></Link>
                <img src="../../images/blue.jpeg" className="card-img-top" alt="..."></img>
            </div> 
            <div className="card-body">
            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} >

          
              <h5 className="card-title">{course.name}</h5>
              <p className="card-text">{course.number}</p>
              <p className="card-text">{course.startDate} to {course.endDate}</p>
              </Link>

              <div className="d-flex justify-content-between">
              <button className="btn btn-sm btn-warning"
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit

              <Link>
              <i className="fa-solid fa-pen-to-square m-2"></i>
              </Link>
              </button>

              <button className="btn btn-sm btn-danger"
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>
            </div>

            </div>
        </div>
        ))}

            

    </div>
    </div>
  );
}
export default Dashboard;


            
            
            