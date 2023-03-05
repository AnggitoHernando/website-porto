import React from "react";
import "./Modals.css";

export default function Modals(props) {
  const modalOpen = props.show ? "modalOverlay open" : " closed";
  if (!props.show) {
    return null;
  } else
    return (
      <div className={modalOpen} id="modalBackground">
        <div className="modalContainer">
          <div className="modalContent">
            <button className="close" onClick={props.onClose} id={props.id}>
              X
            </button>
            {props.modalContent}
          </div>
        </div>
      </div>
    );
}
