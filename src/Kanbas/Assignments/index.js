import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../Database";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="col ">
        <div className="d-flex justify-content-between assignments-main-top">
        <input type="text" className="form-control w-25" placeholder="Search for Assignments" />
        <span>
        <button className="btn btn-small btn-secondary"><i className="fa-solid fa-plus"></i>Group</button>
        <button className="btn btn-small btn-danger"><i className="fa-solid fa-plus"></i>Assignment</button>
        <button className="btn btn-small btn-secondary"><i className="fa-solid fa-ellipsis-vertical"></i></button>
      </span>
      </div>
        <hr />

    <div>

    <ul className="list-group assignments-list">
        <li className="list-group-item list-group-item-secondary">
          <div className="d-flex align-items-center justify-content-between">
          <div><i className="fa-solid fa-grip-vertical m-2"></i>ASSIGNMENTS </div>
          <div className="d-flex align-items-center">
            <span className="border border-secondary rounded-pill p-1">40% of Total</span>
            <Link><i className="fa-solid fa-plus m-2"></i></Link>
            <Link className="p-2 ellipsis-icon float-right"> 
              <i className="fa-solid fa-ellipsis-vertical"></i></Link>
      </div>
      </div>
      </li>

        {courseAssignments.map((assignment) => (
           
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item assignments-list-item">
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                <i className="fa-solid fa-grip-vertical"></i>
              <i className="p-4 text-success fa-regular fa-pen-to-square fa-lg"></i>
              <span>
              <Link><h5>{assignment.title}</h5></Link>
            <p>Module | </p>
            <p>Due | 100 pts </p>
                </span>
                </div>
                <span>
          <Link className="p-2 ellipsis-icon float-right"> 
            <i className="fa-solid fa-ellipsis-vertical"></i></Link>
            <i className="p-2 fa-solid fa-circle-check float-right text-success"></i>
          </span>
            </div>

            
          </Link>
 
        ))}

        </ul>

    </div>
    </div>
  );
}
export default Assignments;

<div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-grip-vertical"></i>
              <i className="p-4 text-success fa-regular fa-pen-to-square fa-lg"></i>
              <span>
              <a href="./edit.html"><h5>A1 - ENV + HTML</h5></a>
            <p>Module | </p>
            <p>Due | 100 pts </p>
                </span>
      </div>
          <span>
          <Link className="p-2 ellipsis-icon float-right"> 
            <i className="fa-solid fa-ellipsis-vertical"></i></Link>
            <i className="p-2 fa-solid fa-circle-check float-right text-success"></i>
          </span>
        </div>