import "./userinfo.css";
import React from "react";
import Article from "../Article/Article";

function UserInfo({ userProfile }) {
  return (
    <Article>
      <div className="user-info">
        <div className="user-info__header">
          <div className="user-avatar">
            <img src="https://img.icons8.com/color/480/000000/avatar.png" />
          </div>
          <div className="">
            <h1>
              {userProfile.username ? userProfile.username : "Start Search"}
            </h1>
            <h3>User tag</h3>
            <h4>Joined date</h4>
          </div>
        </div>
        <div className="user-info__body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            fugit corporis quisquam nisi non dolores.
          </p>
        </div>
        <div className="user-info__footer"></div>
      </div>
    </Article>
  );
}

export default UserInfo;
