import { NavLink } from "react-router-dom";
import "./CourseNav.css";
const CourseNav = () => {
  return (
    <div className=" mt-10 pl-10  coursesPage">
      <ul className="cnav pt-10 flex m-4">
        <li className="pe-4">
          <NavLink
            to="/my-courses"
            activeClassName='active'
          >
            Courses Enrolled
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/popular-courses"
            activeClassName='active'
          >
            Popular Course
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default CourseNav;
