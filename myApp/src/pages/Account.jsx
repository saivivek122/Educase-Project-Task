import React from "react";
import "./account.css"
import user from "../assets/user.png"
const Account = () => {
  return (
    <div className="settings-container">
      <div className="settings">
        <h3>Account Settings</h3>
      </div>
      <div className="user-profile">
          <img src={user} alt="" />
        <div className="right">
          <p className="user-name">Marry Doe</p>
          <p className="user-email">Marry@Gmail.com</p>
        </div>
      </div>
      <div>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reiciendis
        aliquam quidem non perferendis ipsum nobis minima quos excepturi
       
      </p>
      </div>
    </div>
  );
};

export default Account;
