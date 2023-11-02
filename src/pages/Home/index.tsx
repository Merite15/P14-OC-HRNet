import { NavLink } from 'react-router-dom';
import "./style.scss";
import { pathNewEmployee, pathListEmployee } from "@/utils/routes";

/**
 * A custom React component that renders the home page of the application.
 *
 * @returns A React element representing the Home component.
 */
export const Home = () => {
  return (
    <main className="home-page">
      <div className="home-content">
        <h1>Welcome to HRnet</h1>
        <h2>
          <span> Your portal to manage employees list</span>
          <span></span>
        </h2>
        <ul className="btn-actions">
          <NavLink to={pathNewEmployee}>
            <li className="btn">Add employee</li>
          </NavLink>
          <NavLink to={pathListEmployee}>
            <li className="btn">View employees</li>
          </NavLink>
        </ul>
      </div>
    </main>
  );
};