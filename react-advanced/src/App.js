import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movie from "./hoc/Movie";
import Counter from "./hooks/Counter";
import Users from "./hooks/Users";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import Login from "./context/login";

class App extends Component {
  handleLoggedIn = username => {
    console.log("Getting the user: " + username);
    const user = { name: username };
    this.setState({ currentUser: user });
  };

  state = { currentUser: { name: "" } };
  render() {
    return (
      <UserContext.Provider
        value={{
          currentUser: this.state.currentUser,
          onLoggedIn: this.handleLoggedIn
        }}
      >
        <div>
          <Movie />
          <Counter />
          <Users />
          <MoviePage />
          <Login />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
