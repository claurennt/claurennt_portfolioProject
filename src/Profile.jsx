import React from "react";
import "./styles/Profile.scss";
import me from "./assets/me.png";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github_logo.png";

const Profile = () => (
  <div className="profile">
    <div>
      <h1>
        Hello There! <br />I am Claudia, a linguist turned Full-stack developer.
      </h1>
      <h2>
        I consider myself a challenge-driven coder. I enjoy writing clean,
        organized code and use best practices to solve challenges. I am eager to
        learn new languages, new concepts, and grow in my role as well as on a
        personal level. My ideal work environment is a place where diversity,
        equity, and inclusion are considered core principles.
      </h2>

      {/* <img src={linkedin} alt="linkedin" />{" "}
  
 
        <img src={github} alt="linkedin" /> */}
    </div>
    <img src={me} alt="profile" className="profile-pic" />{" "}
  </div>
);
export default Profile;
