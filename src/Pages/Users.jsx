import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../App.css";

const Users = ({ user }) => {
  return (
    <div className="userContainer">
      <Link
        href="#"
        style={{ color: "white" }}
        className="LinkContainer"
        to={`/${user.id}`}
      >
        <img className="userProfile" src={user.image} alt="" />
        <span className="userMaidenName">{user.maidenName}</span>
      </Link>
    </div>
  );
};

export default Users;
