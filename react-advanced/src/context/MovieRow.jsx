import React, { useContext } from "react";
import UserContext from "./userContext";

const MovieRow = () => {
  const userContext = useContext(UserContext);
  return (
    <div>
      Movie Row {userContext.currentUser ? userContext.currentUser.name : ""}
    </div>
  );
};

export default MovieRow;
