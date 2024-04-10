import React from "react";
import { Link  } from "react-router-dom";
import ListIcon from "@mui/icons-material/List";
const ResultCard = ({ user }) => {
  return (
    <>
      <Link to={`/${user.id}`} >
      <div className="result">
        <div>
          <ul>
            <li className="shadow-md shadow-blue-400 m-1 font-bold">
              <ListIcon style={{ color: "blue", fontSize: "2rem" }} />
              {user.name}
            </li>
          </ul>
        </div>
      </div>
      </Link >
    </>
  );
};

export default ResultCard;
