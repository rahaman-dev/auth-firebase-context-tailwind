import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSingOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <Link to="/" className="btn btn-ghost normal-case text-xl">
        Context API
      </Link>
      <Link className="btn btn-ghost normal-case text-xl" to="/">
        Home
      </Link>
      <Link className="btn btn-ghost normal-case text-xl" to="/login">
        Login{" "}
      </Link>
      <Link className="btn btn-ghost normal-case text-xl" to="/register">
        Register
      </Link>
      <Link className="btn btn-ghost normal-case text-xl" to="/orders">
        Orders
      </Link>
      {user && (
        <Link className="btn btn-ghost normal-case text-xl" to="/userProfile">
          User Profile
        </Link>
      )}
      {user ? (
        <>
          <span>{user.email}</span>
          <button className="btn btn-primary" onClick={handleSingOut}>
            Sign Out
          </button>
        </>
      ) : (
        <Link to="/login">Log In </Link>
      )}
    </div>
  );
};

export default Header;
