import React from "react";
import Profile from "../../Components/Profile";
import { profile1, profile2, profile3, profile4, profile5 } from "./Data";

function OurTeams() {
  return (
    <>
      <div className="ourteams">
        <h1 className="hd">OUR TEAMS</h1>
        <h3 className="sh">Kelompok 1</h3>
      </div>
      <Profile {...profile1} />
      <Profile {...profile2} />
      <Profile {...profile3} />
      <Profile {...profile4} />
      <Profile {...profile5} />
    </>
  );
}

export default OurTeams;
