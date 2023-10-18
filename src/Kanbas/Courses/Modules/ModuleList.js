import db from "../../Database";
import { useParams } from "react-router";
import {Link} from "react-router-dom";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules.filter((module) => module.course === courseId);
  return (
    <div>
      
        {modules.map((module, index) => (
        <ul className="list-group modules-list">
          <li key={index} className="list-group-item list-group-item-secondary">
            {module.name}
            <Link to="/#" class="ellipsis-icon float-right"> 
              <i class="fa-solid fa-ellipsis-vertical"></i></Link>
              <Link to="/#" class="float-right plus-icon"><i class="fa-solid fa-plus"></i></Link>
              <i class="fa-solid fa-circle-check float-right"></i>
              </li>
            {module.lessons && module.lessons.length > 0 && (
              <div>
                {module.lessons.map((lesson, index) => (
                  <li key={index} className="list-group-item list-group-item-white">
                    {lesson.name}
                    <Link to="/#" className="ellipsis-icon float-right"> 
                  <i className="fa-solid fa-ellipsis-vertical"></i></Link>
                  <i className="fa-solid fa-circle-check float-right"></i>
                  </li>
                ))}
              </div>
              
            )}
            
          </ul>
        ))}

    </div>
  );
}

export default ModuleList;





<div class="col">
        <div class="d-flex justify-content-end">
        <button class="btn btn-sm btn-secondary">Collapse All</button>
        <button class="btn btn-sm btn-secondary">View Progress</button>

        <div class="dropdown">
          <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Publish All
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">Publish All</a></li>
            <li><a class="dropdown-item" href="#">Publish All modules and items</a></li>
            <li><a class="dropdown-item" href="#">Publish modules onlys</a></li>
            <li><a class="dropdown-item" href="#">Unpublish All</a></li>
          </ul>
        </div>


        <button class="btn btn-sm  btn-danger">Module</button>
        <button class="btn btn-sm btn-secondary"><i class="fa-solid fa-plus"></i></button>
      </div>
      <hr />


        <ul class="list-group modules-list">
          <li class="list-group-item list-group-item-secondary">Week 0 - INTRO
            <a href="#" class="ellipsis-icon float-right"> 
              <i class="fa-solid fa-ellipsis-vertical"></i></a>
              <a href="#" class="float-right plus-icon"><i class="fa-solid fa-plus"></i></a>
              <i class="fa-solid fa-circle-check float-right"></i>
              <li class="list-group-item">LEARNING OBJECTIVES 
                <a href="#" class="ellipsis-icon float-right"> 
                  <i class="fa-solid fa-ellipsis-vertical"></i></a>
                  <i class="fa-solid fa-circle-check float-right"></i>
                  <li class="list-group-item list-group-item-indent">Introduction to the course
                    
                    <a href="#" class="ellipsis-icon float-right"> 
                      <i class="fa-solid fa-ellipsis-vertical"></i></a>
                      <i class="fa-solid fa-circle-check float-right"></i>
                  </li>
                  <li class="list-group-item list-group-item-indent">Learn what is Web Development
                    <a href="#" class="ellipsis-icon float-right"> 
                      <i class="fa-solid fa-ellipsis-vertical"></i></a>
                      <i class="fa-solid fa-circle-check float-right"></i>
                  </li>
                  <li class="list-group-item list-group-item-indent">Creating a development environment
                    <a href="#" class="ellipsis-icon float-right"> 
                      <i class="fa-solid fa-ellipsis-vertical"></i></a>
                      <i class="fa-solid fa-circle-check float-right"></i>
                  </li>
                  <li class="list-group-item list-group-item-indent">Creating a Web Application
                    <a href="#" class="ellipsis-icon float-right"> 
                      <i class="fa-solid fa-ellipsis-vertical"></i></a>
                      <i class="fa-solid fa-circle-check float-right"></i>
                  </li>
                  <li class="list-group-item list-group-item-indent">Getting started with the 1st assignment
                    <a href="#" class="ellipsis-icon float-right"> 
                      <i class="fa-solid fa-ellipsis-vertical"></i></a>
                      <i class="fa-solid fa-circle-check float-right"></i>
                  </li>
                
              </li>
              <li class="list-group-item">READING
                <a href="#" class="ellipsis-icon float-right"> 
                  <i class="fa-solid fa-ellipsis-vertical"></i></a>
                  <i class="fa-solid fa-circle-check float-right"></i>
                  <li class="list-group-item list-group-item-indent">Full Stack Developer - Chapter 1 - Introduction
                    <a href="#" class="ellipsis-icon float-right"> 
                      <i class="fa-solid fa-ellipsis-vertical"></i></a>
                      <i class="fa-solid fa-circle-check float-right"></i>
                  </li>
                  <li class="list-group-item list-group-item-indent">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML
                    <a href="#" class="ellipsis-icon float-right"> 
                      <i class="fa-solid fa-ellipsis-vertical"></i></a>
                      <i class="fa-solid fa-circle-check float-right"></i>
                  </li>
              </li>
              <li class="list-group-item">SLIDES
                <a href="#" class="ellipsis-icon float-right"> 
                  <i class="fa-solid fa-ellipsis-vertical"></i></a>
                  <i class="fa-solid fa-circle-check float-right"></i>
                  <li class="list-group-item list-group-item-indent"><a href="https://docs.google.com/presentation/d/1yb_fQd5MhVuFczb5F5II0CoDkVJALFqxUnuwPAXiOAU/edit?usp=sharing">Introduction to Web Development Links to an external site.</a>
                    <a href="#" class="ellipsis-icon float-right"> 
                      <i class="fa-solid fa-ellipsis-vertical"></i></a>
                      <i class="fa-solid fa-circle-check float-right"></i></li>
                  <li class="list-group-item list-group-item-indent"><a href="https://docs.google.com/presentation/d/16yDwIH8np-tQL85g4bpmrsDfO8LaW38jr-fMQirLnoQ/edit?usp=sharing">Creating an HTTP server with Node.js Links to an external site.</a>
                    <a href="#" class="ellipsis-icon float-right"> 
                      <i class="fa-solid fa-ellipsis-vertical"></i></a>
                      <i class="fa-solid fa-circle-check float-right"></i></li>
                  <li class="list-group-item list-group-item-indent"><a href="https://docs.google.com/presentation/d/10B3jLiJ8-HMsA6TPq9JuWfJzsvX9SFnYVuhthrQbFwU/edit?usp=sharing">Creating a React Web Application Links to an external site.</a>
                    <a href="#" class="ellipsis-icon float-right"> 
                      <i class="fa-solid fa-ellipsis-vertical"></i></a>
                      <i class="fa-solid fa-circle-check float-right"></i></li>
              </li>
          </li>
        </ul>

          <ul class="list-group modules-list">
          <li class="list-group-item  list-group-item-secondary">Week 1 - HTML
            <a href="#" class="ellipsis-icon float-right"> 
              <i class="fa-solid fa-ellipsis-vertical"></i></a>
              <a href="#" class="float-right plus-icon"><i class="fa-solid fa-plus"></i></a>
              <i class="fa-solid fa-circle-check float-right"></i>
              <li class="list-group-item">LEARNING OBJECTIVES
                <a href="#" class="ellipsis-icon float-right"> 
                  <i class="fa-solid fa-ellipsis-vertical"></i></a>
                  <i class="fa-solid fa-circle-check float-right"></i>
                  <li class="list-group-item list-group-item-indent">Learn how to create user interfaces with HTML
                    <a href="#" class="ellipsis-icon float-right"> 
                      <i class="fa-solid fa-ellipsis-vertical"></i></a>
                      <i class="fa-solid fa-circle-check float-right"></i>
                  </li>
                  <li class="list-group-item list-group-item-indent">Keep working on assignment 1
                    <a href="#" class="ellipsis-icon float-right"> 
                      <i class="fa-solid fa-ellipsis-vertical"></i></a>
                      <i class="fa-solid fa-circle-check float-right"></i>
                  </li>
                  <li class="list-group-item list-group-item-indent">Deploy the assignment to Netlify
                    <a href="#" class="ellipsis-icon float-right"> 
                      <i class="fa-solid fa-ellipsis-vertical"></i></a>
                      <i class="fa-solid fa-circle-check float-right"></i>
                  </li>
              </li>
              <li class="list-group-item">READING
                <a href="#" class="ellipsis-icon float-right"> 
                  <i class="fa-solid fa-ellipsis-vertical"></i></a>
                  <i class="fa-solid fa-circle-check float-right"></i>
                  <li class="list-group-item list-group-item-indent">Full Stack Developer - Chapter 1 - Introduction
                    <a href="#" class="ellipsis-icon float-right"> 
                      <i class="fa-solid fa-ellipsis-vertical"></i></a>
                      <i class="fa-solid fa-circle-check float-right"></i>
                  </li>
                  <li class="list-group-item list-group-item-indent">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML
                    <a href="#" class="ellipsis-icon float-right"> 
                      <i class="fa-solid fa-ellipsis-vertical"></i></a>
                      <i class="fa-solid fa-circle-check float-right"></i>
                  </li>

                  <li class="list-group-item">SLIDES
                    <a href="#" class="ellipsis-icon float-right"> 
                      <i class="fa-solid fa-ellipsis-vertical"></i></a>
                      <i class="fa-solid fa-circle-check float-right"></i>
                      <li class="list-group-item list-group-item-indent"><a href="https://docs.google.com/presentation/d/1yb_fQd5MhVuFczb5F5II0CoDkVJALFqxUnuwPAXiOAU/edit?usp=sharing">Introduction to HTML and the DOM</a>
                        <a href="#" class="ellipsis-icon float-right"> 
                          <i class="fa-solid fa-ellipsis-vertical"></i></a>
                          <i class="fa-solid fa-circle-check float-right"></i></li>
                      <li class="list-group-item list-group-item-indent"><a href="https://docs.google.com/presentation/d/1RtMNp8HTDiGi-H8G-n1u67M3kL4BNRoopOXLG-fPZH0/edit?usp=sharing">Formatting Web Content</a>
                        <a href="#" class="ellipsis-icon float-right"> 
                          <i class="fa-solid fa-ellipsis-vertical"></i></a>
                          <i class="fa-solid fa-circle-check float-right"></i></li>
                  </li>
              </li>
          </li>
        </ul>

      </div>
