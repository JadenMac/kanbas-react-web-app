import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="col ">
        <div className="d-flex assignments-main-top align-items-center justify-content-end">
        <p className="text-success m-1">Published <i className="fa-solid fa-circle-check float-right"></i></p>
        <button className="btn btn-small btn-secondary"><i className="fa-solid fa-ellipsis-vertical"></i></button>
        </div>
        <hr />

        <div className="m-2 mb-4">
      <h2>Assignment Name</h2>
      <input value={assignment.title}
             className="form-control mb-2" />
             </div>

             <textarea class="form-control m-2 mb-4" cols="50" rows="10">This is the assignment description.</textarea>


<div class="d-flex justify-content-center align-items-center m-2">
<label class="" for="points">Points</label> 

<input class="form-control w-50 m-2" id="points" max="100" type="number" value="100"/>
<label class="invisible" for="points">Points</label> 
</div>


<div class="d-flex justify-content-center align-items-center m-2">
      <label class="form-label" for="assign-group">Assignment Group</label>
      <select class="form-select w-50 m-2" id="assign-group">
          <option>ASSIGNMENTS</option>
          <option>QUIZZES</option>
          <option>EXAMS</option>
          <option>PROJECT</option>
      </select>
      <label class="invisible" for="assign-group">Assignment Group</label>
    </div>

    
    <div class="d-flex justify-content-center align-items-center m-2">
      <label class="form-label" for="grade-type">Display Grade as</label>
      <select class="form-select w-50 m-2" id="grade-type">
          <option>Percentage</option>
      </select>
      <label class="invisible" for="grade-type">Display Grade as</label>
    </div>

    <div class="d-flex justify-content-center align-items-center m-2">
    <input type="checkbox" id="toward-final" class="form-check-input m-2"/>
    <label for="toward-final" class="form-check-label">Do not count this assignment toards the final grade</label>
  </div>

  <div class="d-flex justify-content-center  m-2">
      <label for="submit-type">Submission Type</label>

      <div class="w-50 border rounded border-secondary p-3 m-2">
      <select class="form-select" id="submit-type">
          <option>Online</option>
      </select>

      
      
      <label>Online Entry Options</label>

      <div class="m-2">
      <input type="checkbox" class="form-check-input" value="textEntry"
       id="check-text" />
      <label for="check-text">Text Entry</label>    <br/>
      
      <input type="checkbox" class="form-check-input" value="websiteURL"
       id="check-web" />
      <label for="check-web">Website URL</label>    <br/>
      
      <input type="checkbox" class="form-check-input" value="mediaRecordings"
       id="check-recordings" />
      <label for="check-recordings">Media Recordings</label>    <br/>
      
      <input type="checkbox" class="form-check-input" value="studentAnnotation"
       id="check-annotation" />
      <label for="check-annotation">Student Annotation</label>    <br/>
      
      <input type="checkbox" class="form-check-input" value="fileUpload"
       id="check-file" />
      <label for="check-file">File Uploads</label>    <br/>
    </div>
    </div>
    <label class="invisible" for="submit-type">Submission Type</label>
    </div>
      
    <div class="d-flex justify-content-center m-2">
      <label>Assign</label>
      <div class="w-50 border rounded border-secondary p-3 m-2">
        <label>Assign to</label> <br />
      <input class="form-control" value="Everyone"/>
      <br />
      <br />
      <label>Due</label> <br />
      <input class="form-control" type="date"/>
      <br />
      <br />
      <label>Available from</label> <br />
      <input class="form-control" type="date"/>
      <br />
      <br />
      <label>Until</label> <br />
      <input class="form-control" type="date"/>
      <button class="btn btn-secondary w-100"><i class="fa-solid fa-plus"></i>Add</button>
      <br />
      <br />
      
    </div>
    <label class="invisible">Assign</label>
    
    </div>




<div className="d-flex justify-content-between m-2">

<span>
<input type="checkbox" className="form-check-input" value="notifyUsers"
 id="check-notify-users" />
<label for="check-notify-users">Notify users that this content has changed</label> 
</span>

    <span>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            >
        <button className="btn btn-secondary">Cancel</button>
      </Link>
      <button onClick={handleSave} className="btn btn-danger me-2">
        Save
      </button>

      </span>
      </div>
    </div>
  );
}

export default AssignmentEditor;



        




