import * as ReactDOM from "react-dom/client";
import React, { useState, useRef } from "react";
import "./AboutMe.css";
import pp from "../../assets/pp.png";
import analyst_logo from "../../assets/analyst 1.png";
import uiuxLogo from "../../assets/ux-design 1.png";
import progammerLogo from "../../assets/computer 1.png";
import otherLogo from "../../assets/Vector.png";
import laravel1 from "../../assets/laravel.png";
import Modal from "../modals/Modal";
import Skill from "../skills/Skill";
import Button from "../modals/Button";
import Modals from "../modals/Modal";

export default function AboutMe() {
  const ref = useRef([]);
  const [show, setOpen] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const handleClose = (event) => {
    const buttonId = event.currentTarget.id;
    var node;
    console.log(buttonId);
    if (buttonId === "modalSystemAnalys") {
      node = document.getElementById("value-SystemAnalys");
      node.style.display = "none";
    } else if (buttonId === "modalUiUx") {
      node = document.getElementById("value-UiUx");
      node.style.display = "none";
    } else if (buttonId === "modalProgammer") {
      node = document.getElementById("value-Progammer");
      node.style.display = "none";
    } else if (buttonId === "modalOther") {
      node = document.getElementById("value-Other");
      node.style.display = "none";
    }
  };

  const handleClick = (event) => {
    var node = "";
    const buttonId = event.currentTarget.id;
    if (buttonId === "systemAnalys") {
      node = document.getElementById("value-SystemAnalys");
      node.style.display = "block";
    } else if (buttonId === "UI") {
      node = document.getElementById("value-UiUx");
      node.style.display = "block";
    } else if (buttonId === "Progammer") {
      node = document.getElementById("value-Progammer");
      node.style.display = "block";
    } else if (buttonId === "Other") {
      node = document.getElementById("value-Other");
      node.style.display = "block";
    }
  };

  return (
    <div className="about-me-container">
      <div className="bio-container">
        <div className="bio">
          <div className="box"></div>
          <div className="biodata">
            <img src={pp} alt="" />
            <p>Name : Nando</p>
            <p>Age : 22 Years Old</p>
            <p>Nationality : Indonesian</p>
            <p className="button-download">
              <a href="#">Download CV</a>
            </p>
          </div>
        </div>
      </div>
      <div className="kanan-container">
        <div className="deskrpsi">
          <p>
            Hi I'm a graduate of information systems looking for a job. I am a
            person who likes to learn new things, passionate, responsible and
            honest. My weakness, I am not fluent when I speak in front of many
            people. Here's what I'm good at
          </p>
        </div>
        <div className="skill-container">
          <div className="skill">
            <div className="type-skill" key="1" id="systemAnalys">
              <Button
                id="systemAnalys"
                img={analyst_logo}
                onClick={(event) => handleClick(event)}
                title={"System Analys"}
                name={"System Analys"}
                href="#value-systemAnalys"
              />
            </div>
            <div className="type-skill" key="2" id="UI">
              <Button
                img={uiuxLogo}
                onClick={(event) => handleClick(event)}
                title={"UI/UX Designer"}
                name={"UI/UX Designer"}
                id={"UI"}
              />
            </div>
          </div>
          <div className="skill">
            <div className="type-skill" key="3" id="Progammer">
              <Button
                img={progammerLogo}
                onClick={(event) => handleClick(event)}
                title={"Progammer"}
                name={"Progammer"}
                id={"Progammer"}
              />
            </div>
            <div className="type-skill" key="4" id="Other">
              <Button
                img={otherLogo}
                onClick={(event) => handleClick(event)}
                title={"Other"}
                name={"Other"}
                id={"Other"}
              />
            </div>
          </div>
          <div className="value">
            <div id="value-SystemAnalys" style={{ display: "none" }}>
              <Modal
                id="modalSystemAnalys"
                onClose={(event) => handleClose(event)}
                show={show}
                modalContent={[
                  <Skill
                    key="1"
                    keterangan="In analyzing a system I usually use Visio which is a software that I usually use to make flowcharts, activity diagrams and plots user interface."
                    image="/skills/visio.png"
                    judul="Can Make Flowchart, Activity Diagram and UI Plots"
                  />,
                  <Skill
                    key="2"
                    keterangan="The SRS document describes the functional requirements of the software that will be developed according to the needs of the literature study. In SRS, there are usually user requirements which include actors running the system, system functional requirements, system document resources, use case tables, access mapping, UI design (Wire frame) and acceptance criteria."
                    image="/skills/word.jpeg"
                    judul="Can Make Software Requirement System"
                  />,
                  <Skill
                    key="3"
                    keterangan="Able to design databases starting from conceptual design whose output is ERD (Entity Relation Diagram) or DFD (Data Flow Diagram), then conceptual design such as entity types and relationship types and physical design"
                    image="/skills/powerdesigner.png"
                    judul="Can Design Database System Based On Requirements"
                  />,
                ]}
              />
            </div>
            <div id="value-UiUx" style={{ display: "none" }}>
              <Modal
                id="modalUiUx"
                onClose={(event) => handleClose(event)}
                show={show}
                modalContent={"AAAA"}
              />
            </div>
            <div id="value-Progammer" style={{ display: "none" }}>
              <Modal
                id="modalProgammer"
                onClose={(event) => handleClose(event)}
                show={show}
                modalContent={"222"}
              />
            </div>
            <div id="value-Other" style={{ display: "none" }}>
              <Modal
                id="modalOther"
                onClose={(event) => handleClose(event)}
                show={show}
                modalContent={"2322"}
              />
            </div>
          </div>
        </div>
        <div className="findMe-container">
          <button className="findMe-button">
            <div className="findMe-icon">
              <img src="/icon/right-arrow.png" alt="" className="shere" />
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMVJXkxxdxWKSgZzdzQzGxDHZKkWRHjDgDVvjRhsndDgVfbDlFhcWDJHWvwwfSntFwzwHJJ">
                <img src="/icon/gmail.ico" alt="" className="icon-shere" />
              </a>
              <a href="https://www.instagram.com/ini.itto/">
                <img src="/icon/instagram.ico" alt="" className="icon-shere" />
              </a>
              <a href="https://www.linkedin.com/in/anggito-hernando-3676051bb/">
                <img src="/icon/linked.ico" alt="" className="icon-shere" />
              </a>
            </div>
            <p>Find Me On</p>
          </button>
        </div>
      </div>
    </div>
  );
}
