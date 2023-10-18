import { Link, useLocation } from "react-router-dom";
function KanbasNavigation() {
  const links = [{"title": "Dashboard", "iconClasses": "fa-solid fa-gauge-high fa-2x nav-icon"}, {"title": "Courses", "iconClasses": "fa-solid fa-book fa-2x nav-icon"}, 
  {"title": "Calendar", "iconClasses": "fa-solid fa-calendar-days fa-2x nav-icon"}, {"title": "Inbox", "iconClasses": "fa-solid fa-inbox fa-2x nav-icon"},
  {"title": "History", "iconClasses": "fa-regular fa-clock fa-2x nav-icon"},
  {"title": "Studio", "iconClasses": "fa-solid fa-display fa-2x nav-icon"},
  {"title": "Commons", "iconClasses": "fa-solid fa-arrow-right-from-bracket fa-2x nav-icon"},
  {"title": "Help", "iconClasses": "fa-regular fa-circle-question fa-2x nav-icon"}];
  const { pathname } = useLocation();
  return (

    <ul className="list-group list-group-flush" >
    <li class="list-group-item">
        <i class="fa-solid fa-n fa-3x"></i>
    </li>
      <li className={`list-group-item ${pathname.includes("Account") && "list-group-item-active"}`}>
        <div>
      <Link to="/Kanbas/Account">
            <span class="fa-stack fa-lg nav-icon">
                <i class="fa-solid fa-user fa-stack-1x text-secondary"></i>
                <i class="fa-regular fa-circle fa-stack-2x user-circle"></i>
            </span>
            Account
          
      </Link>
      </div>
      </li>
      {links.map((link, index) => (
        <li className={`list-group-item ${pathname.includes(link.title) && "list-group-item-active"}`}>
          <div>
        <Link
          key={index}
          to={`/Kanbas/${link.title}`}
          >
          <i className={link.iconClasses} />
          {link.title}
        </Link>
        </div>
        </li>
      ))}
    </ul>

  );
}
export default KanbasNavigation;




 

