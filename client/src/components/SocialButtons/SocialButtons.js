import React, { useState } from "react";
import "./SocialButtons.css";
import { AiOutlineGithub } from "react-icons/ai";

function SocialButtons() {
  return (
    <div>
      <div className="social-buttons">
        <a href="https://github.com/BarJames12" target="_blank" className="icons" aria-label="GitHub" rel="noreferrer">
          <span className="gitHubBtn">
            <AiOutlineGithub />
          </span>
          <i className="fab grow-rotate fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default SocialButtons;
