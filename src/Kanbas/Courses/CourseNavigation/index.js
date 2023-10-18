import { Link, useParams, useLocation } from "react-router-dom";

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades",
  "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes",
"Collaborations", "Syllabus", "Progress Reports (EAB Navigate)", "Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    
    <ul className="list-group wd-course-navigation list-group-flush" >
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${pathname.includes(link.replace(/\s/g, "%20")) && "list-group-item-active"}`}>
          {link}
        </Link>
      ))}
    </ul>

  );
}


export default CourseNavigation;



      

      
