import React from "react";

// Profile Picture
import pics from "../../img/IMG_9392.JPG";

const ProfileImage = () => {
  return (
    <section>
      <div id="profile-pics">
        {/* Add srcset later */}
        <img src={pics} alt="Abel Emmanuel" width="350px" />
      </div>
    </section>
  );
};

export default ProfileImage;
