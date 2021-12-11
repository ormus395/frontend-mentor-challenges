/*
 Devfinder app

 take user input (username) and fetch possible user from the github api
 if user, get github user information and display it

 if no user, display error message, and DO NOT update the current user info component

 additional functionality
 light/darkmode toggle
*/

import "./App.css";

import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import UserInfo from "./components/UserInfo/UserInfo";
import Button from "./components/Button/Button";
import { useState } from "react";

function App() {
  const [appState, setAppState] = useState({
    userProfile: {},
    error: false,
  });

  const searchGithubUser = (username) => {
    console.log(username);
  };

  return (
    <div className="App">
      <Header />
      <SearchForm error={appState.error} searchGithubUser={searchGithubUser} />
      <UserInfo userProfile={appState.userProfile} />
    </div>
  );
}

export default App;
