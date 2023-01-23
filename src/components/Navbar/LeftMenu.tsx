import { NavLink } from "react-router-dom";

const LeftMenu = () => {
  const activeLink = (state: { isActive: boolean }) =>
    state.isActive
      ? "text-blue-500 border-b-2 border-blue-500"
      : "text-slate-700 border-none";

  return (
    <div className="w-full flex justify-between">
      <ul className="flex justify-between items-center md:flex-row flex-col md:gap-4 gap-6 w-full md:w-fit text-base">
        <li className=" md:p-0 text-slate-700 p-3 w-full text-center rounded">
          <NavLink to="/" className={activeLink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={activeLink}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={activeLink}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/signin" className={activeLink}>
            Signin
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className={activeLink}>
            Signup
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default LeftMenu;
