import db from "../../Database";
import { useParams } from "react-router-dom";
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div className = "col">
        <div className="d-flex assignments-main-top align-items-center justify-content-end mb-2">
        <button className="btn btn-secondary btn-sm"><i className="fa-solid fa-file-import m-1"></i>Import</button>

        <div className="dropdown">
          <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa-solid fa-file-export"></i>Export
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Export</a>
          </div>
        </div>

        <button className="btn btn-sm btn-secondary"><i className="fa-solid fa-gear"></i></button>
        </div>

        <div className="d-flex justify-content-between mb-2">
<div className="w-40">
<label>Student Names</label>
<input
className="form-control"
type="text"
placeholder="Search Students"
title="Type the usernames of students you want to filter"
/>
</div>
<div className="w-40">
<label>Assignment Names</label>
<input type="text"
className="form-control"
placeholder="Search Assignments"
/>
</div>
</div>

<button className="btn btn-secondary btn-sm"><i className="fa-solid fa-filter"></i>Apply Filters</button>


      <div className="table-responsive pt-4">
        <table className="table table-striped table-bordered">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;










