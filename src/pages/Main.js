import React from "react";
import Coder from "../components/Animation/Coder";
import Zoom from "react-reveal/Zoom";
import { main } from "../portfolio";
import resumePDF from "../resume/Pankaj_Kumar_Ram_Resume.pdf";
import "./Main.css";

function Main() {
  function handleResumeDownload() {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Pankaj_Kumar_Ram_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section className="mainX" id="main">
      <div className="fluid-container">
        <Zoom duration={1000}>
          <div className="row">
            <div className="col-lg-6 ">
              <div className="mobile">
                <h1 className="main-title n">
                  Hi, I'm <span id="name">{main.name}</span>
                </h1>
                <h1 className="main-title d">{main.doamin}</h1>
                <a
                  href={main.resume}
                  target="_blank"
                  className="btn btn-lg hide"
                  onClick={handleResumeDownload}
                >
                  <span>RESUME</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 ani">
              <Coder />
            </div>
          </div>
        </Zoom>
      </div>
    </section>
  );
}

export default Main;
