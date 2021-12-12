import "./userinfo.css";
import React from "react";
import Article from "../Article/Article";

function UserInfo({ userProfile }) {
  let defaultAvatar = "https://img.icons8.com/color/480/000000/avatar.png";
  return (
    <Article>
      <div className="user-info">
        <div className="user-info__header">
          <div className="user-avatar">
            <img
              src={userProfile.avatar ? userProfile.avatar : defaultAvatar}
              alt="User avatar"
            />
          </div>
          <div className="">
            <h1>{userProfile.name ? userProfile.name : "No name available"}</h1>
            <h3>{userProfile.login ? userProfile.login : "User tag"}</h3>
            <h4>{userProfile.created ? userProfile.created : "Joined"}</h4>
          </div>
        </div>
        <div className="user-info__body">
          <p>
            {userProfile.bio
              ? userProfile.bio
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fugit corporis quisquam nisi non dolores."}
          </p>
          <div className="user-info__details">
            <div className="col">
              <h4>Repos</h4>
              <h2>{userProfile.repos}</h2>
            </div>
            <div className="col">
              <h4>Followers</h4>
              <h2>{userProfile.followers}</h2>
            </div>
            <div className="col">
              <h4>Following</h4>
              <h2>{userProfile.following}</h2>
            </div>
          </div>
        </div>
        <div className="user-info__footer">
          <ul className="user-info__links">
            <div className="">
              <li>
                <span className="user-info__icon location"></span>
                {userProfile.location ? userProfile.location : "Not available"}
              </li>
              <li>
                <span className="user-info__icon link"></span>
                {userProfile.blog ? userProfile.blog : "Not available"}
              </li>
            </div>
            <div className="">
              <li>
                <span className="user-info__icon twitter"></span>
                {userProfile.twitter ? userProfile.twitter : "Not available"}
              </li>
              <li>
                <span className="user-info__icon business"></span>
                {userProfile.company ? userProfile.company : "Not available"}
              </li>
            </div>
          </ul>
        </div>
      </div>
    </Article>
  );
}

export default UserInfo;
