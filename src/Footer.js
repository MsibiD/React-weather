import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This project was coded by
        <a href="https://github.com/MsibiD" rel="noreferrer" target="_blank">
          {""} Msibi Dieketseng
        </a>{" "}
        and is
        <a
          href="https://github.com/MsibiD/React.weather"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          on GitHub
        </a>{" "}
        and
        <a
          href="https://github.com/MsibiD/My-weather-project."
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          hosted on Netlify
        </a>
      </p>
    </div>
  );
}
