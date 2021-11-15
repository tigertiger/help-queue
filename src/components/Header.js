import React from "react";
import helpCatImage from "./../img/help-cat.jpg";
// import skullImage from "./../img/help-skull.jpg"

function Header(){
  return (
    <React.Fragment>
    <img src={helpCatImage} alt="a cat who needs help" height="500px" />
    {/* <img src={skullImage} alt="a skull who needs help" height="500px" /> */}
    <div className="headContainer">
      <h1>Help Queue</h1>
    </div>
    </React.Fragment>
  );
}

export default Header;