import React, { Component } from "react";
import UserContext from "./userContext";
import MovieRow from "./MovieRow";

class MovieList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log("context", this.context);
  }

  render() {
    return (
      <div>
        <UserContext.Consumer>
          {UserContext => (
            <div>
              Movie List{" "}
              {UserContext.currentUser ? UserContext.currentUser.name : ""}{" "}
              <MovieRow />
            </div>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default MovieList;
