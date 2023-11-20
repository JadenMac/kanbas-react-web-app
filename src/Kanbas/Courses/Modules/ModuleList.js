import db from "../../Database";
import { useParams } from "react-router";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };



  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();




  return (
    <div>
      
      <div className="mb-4">
      <button className="btn btn-primary" onClick={handleUpdateModule}>
                Update
        </button>
        <button className="btn btn-success" onClick={handleAddModule}>Add</button>
  
        
        <input className="form-control" value={module.name}
          onChange={(e) =>  dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <textarea className="form-control" value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
        </div>


      
        {modules.filter((module) => module.course === courseId)
        .map((module, index) => (
        <ul className="list-group modules-list">
          <li key={index} className="list-group-item list-group-item-secondary">
          
            <Link class="ellipsis-icon float-right"> 
              <i class="fa-solid fa-ellipsis-vertical"></i></Link>
              <button className="btn btn-sm btn-danger float-right"
              onClick={() => handleDeleteModule(module._id)}>
               <i class="fa-solid fa-trash-can"></i>
            </button>
            <button className = "btn btn-sm btn-success float-right"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
              <Link class="float-right plus-icon"><i class="fa-solid fa-plus"></i></Link>
              <i class="fa-solid fa-circle-check float-right"></i>
              <h5>{module.name}</h5>
              <p>{module.description}</p>
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
