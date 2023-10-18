import db from "../../Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import ModuleList from "../Modules/ModuleList";
import CourseNavigation from "../CourseNavigation";
import Modules from "../Modules";


function Home() {
    const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);

  return (

    <>
      <div className="col">
        <Modules></Modules>
      </div>

      <div className="col right-home-col d-none d-lg-block">
        <h4>Course Status</h4>

        <button className="btn btn-sm btn-secondary"><i className="m-1 fa-solid fa-ban"></i>Unpublish</button>
        <button className="btn btn-sm btn-success"><i className="m-1 fa-solid fa-circle-check"></i>Published</button>

        <ul className="list-group mt-2 mb-2">
          <li className="list-group-item"><i className="m-1 fa-solid fa-file-import"></i>Import Existing Content<a href="#"></a></li>
          <li className="list-group-item"><i className="m-1 fa-solid fa-arrow-right-from-bracket"></i>Import From Commons<a href="#"></a></li>
          <li className="list-group-item"><i className="m-1 fa-solid fa-bullseye"></i>Choose Home Page<a href="#"></a></li>
          <li className="list-group-item"><i className="m-1 fa-solid fa-chart-simple"></i>View Course Stream<a href="#"></a></li>
          <li className="list-group-item"><i className="m-1 fa-solid fa-bullhorn"></i>New Anouncement<a href="#"></a></li>
          <li className="list-group-item"><i className="m-1 fa-solid fa-chart-simple"></i>New Analytics<a href="#"></a></li>
          <li className="list-group-item"><i className="m-1 fa-regular fa-bell"></i>View Course Notifications<a href="#"></a></li>
        </ul>


        <h4>
          To do
        </h4>
        <a href="#">Grade A1 - ENV + HTML</a>
        <hr />
        <div className="d-flex justify-content-between">
        <h4>Coming up</h4>
        <span>
        <i className="m-1 fa-regular fa-calendar"></i>
        <a href="#">View Calendar</a>
      </span>
      </div>
      <hr />

        <ul className="list-group">
          <li className="list-group-item"><i className="m-1 fa-regular fa-calendar"></i><a href="#">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a></li>
          <li className="list-group-item"><i className="m-1 fa-regular fa-calendar"></i><a href="#">Lecture CS4550.12631.202410 Sep 11 at 11:45am</a></li>
          <li className="list-group-item"><i className="m-1 fa-regular fa-calendar"></i><a href="#">CS5610 06 SP23 Lecture Sep 11 at 6pm</a></li>
        </ul>
      </div>

      </>
  );
}

export default Home;



