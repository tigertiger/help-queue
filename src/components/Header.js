import React from "react";
import helpCatImage from "./../img/help-cat.jpg";
// import skullImage from "./../img/help-skull.jpg"
import { Link } from "react-router-dom";

function Header(){
  return (
    <React.Fragment>
    <div id="catPic">
      <img src={helpCatImage} alt="a cat who needs help" height="500px" />
    </div>
    {/* <img src={skullImage} alt="a skull who needs help" height="500px" /> */}
    <div className="container">
      <h1>queue</h1>
    </div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/signin">Sign In</Link>
      </li>
    </ul>
    </React.Fragment>
  );
}

export default Header;