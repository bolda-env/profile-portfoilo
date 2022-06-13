import React from "react";

// Modules
import ProfileImage from "./Sub-Compo/ProfileImage";
import NameTag from "./Sub-Compo/NameTag";
import SocialMedia from "./Sub-Compo/SocialMedia";

function BioData() {
  return (
    <article>
      <section className="profile">
        <ProfileImage />
        <NameTag />
        <SocialMedia />
        <More />
      </section>
    </article>
  );
}

function slideUp() {
  document.getElementById("other_ctn").style.display = "block";
  window.scrollTo(0, 644);
}

const More = () => <button onClick={slideUp}>more</button>;

export default BioData;
