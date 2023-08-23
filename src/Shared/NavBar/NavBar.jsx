import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextAPI/ContextAPI";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("successfully logged out."))
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li className="hover:bg-white rounded-lg">
        <Link>Home</Link>
      </li>

      <li className="hover:bg-white  rounded-lg">
        <Link>About</Link>
      </li>
      <li className="hover:bg-white  rounded-lg">
        <Link>Appointment</Link>
      </li>
      {user ? (
        <li className="hover:bg-white rounded-lg">
          <Link onClick={handleLogOut} to="/login">
            Logout
          </Link>
        </li>
      ) : (
        <li className="hover:bg-white rounded-lg">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-teal-600 text-white px-5 lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <h2 className="font-bold text-xl lg:text-3xl">Doc House</h2>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
    </div>
  );
};

export default NavBar;
