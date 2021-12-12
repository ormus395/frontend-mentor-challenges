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
import { useEffect, useState } from "react";

import { fetchUser } from "./services/fetchUser";

function App() {
  console.log("App rendering");
  const [appState, setAppState] = useState({
    userProfile: {},
    error: false,
    isLoaded: false,
  });

  useEffect(() => {
    if (Object.keys(appState.userProfile).length < 1) {
      setAppState({
        userProfile: {},
        error: false,
        isLoaded: false,
      });
      fetchUser("octocat")
        .then((response) => {
          let newProfile = {};
          newProfile.login = response.login;
          newProfile.avatar = response.avatar_url;
          newProfile.company = response.company;
          newProfile.followers = response.followers;
          newProfile.following = response.following;
          newProfile.location = response.location;
          newProfile.name = response.name;
          newProfile.repos = response.public_repos;
          newProfile.twitter = response.twitter_username;
          newProfile.blog = response.blog;
          newProfile.created = response.created_at;
          newProfile.bio = response.bio;

          console.log("In use effect ", response);

          setAppState({
            userProfile: newProfile,
            error: false,
            isLoaded: true,
          });
        })
        .catch((err) => console.log(err));
    }
    document.body.classList.toggle("darkmode");
  }, []);

  const searchGithubUser = (username) => {
    // fetch the github user
    // set state accordingly
    fetchUser(username).then((response) => {
      let newProfile = {};
      newProfile.login = response.login;
      newProfile.avatar = response.avatar_url;
      newProfile.company = response.company;
      newProfile.followers = response.followers;
      newProfile.following = response.following;
      newProfile.location = response.location;
      newProfile.name = response.name;
      newProfile.repos = response.public_repos;
      newProfile.twitter = response.twitter_username;
      newProfile.blog = response.blog;
      newProfile.created = response.created_at;
      newProfile.bio = response.bio;

      console.log("In use effect ", response);

      setAppState({
        userProfile: newProfile,
        error: false,
        isLoaded: true,
      });
    });
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
