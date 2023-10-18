import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard() {
  const courses = db.courses;
  return (
    <div className="col dashboard-main-section">

 

            <h1>Dashboard</h1>
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
              <Link>
              <i className="fa-solid fa-pen-to-square"></i>
              </Link>
            </div>
        </div>
        ))}

            

    </div>
    </div>
  );
}
export default Dashboard;


            
            
            