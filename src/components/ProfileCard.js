import React, { useState } from "react";
import "./ProfileCard.css";
import person from "./person.jpg";
function ProfileCard() {
  const [image, setImage] = useState(person);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      if (img.type.includes("image/")) {
        setImage(URL.createObjectURL(img));
      } else {
        alert("Please upload an image file.");
      }
    }
  };

  return (
    <div className="container">
      <div className="image-container">
        <label htmlFor="image-upload">
          <img className="profile-image" src={image} alt="Profile" />
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <div className="details-container">
        <h2 className="name">Annie </h2>
        <p className="address"> Itahari,4 - Dulahari</p>
        <p className="phone">+9776327364</p>
        <p className="email">annie783@example.com</p>
      </div>
    </div>
  );
}

export default ProfileCard;
