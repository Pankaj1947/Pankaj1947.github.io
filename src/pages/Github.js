import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import "./github.css";

export const GithubStats = () => {
  return (
    <div>
      <div>
        <Zoom duration={1000}>
          <h1 className="contact-title">
            <Fade bottom cascade duration={1000}>
              GitHub Stats
            </Fade>
          </h1>
          <div align="center">
            <a href="https://github.com/Pankaj1947/github-readme-stats">
              <img
                className="githubStatsImage"
                alt="Pankaj Github Stats"
                src="https://github-readme-stats.vercel.app/api?username=Pankaj1947&show_icons=true&count_private=true&theme=transparent&hide_border=true&text_color=EB5A72&title_color=EB5A72&icon_color=EB5A72"
                // style={{ maxWidth: "100%" }}
              />
            </a>
          </div>
          <div align="center" style={{ width: "100%" }}>
            <a href="https://ghchart.rshah.org/Pankaj1947">
              <img
              className="githubCalender"
                alt="Pankaj's GitHub Contributions"
                src="https://ghchart.rshah.org/EB5A72/Pankaj1947"
              />
            </a>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

