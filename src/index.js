import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";

// Component
import BioData from "./Composition/BioData";
import Others from "./Composition/Others";
// CSS
import "./assets/theme.css";

function Profile() {
  return (
    <>
      <BioData />
      <Others />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Profile></Profile>
);
