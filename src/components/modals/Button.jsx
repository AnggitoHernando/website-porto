import React from "react";
import "./Modals.css";

export default function Button(props) {
  return (
    <span className="button-modal" onClick={props.onClick} id={props.id}>
      <img src={props.img} alt="" /> <h2>{props.title}</h2>
      {/* <h1>{props.title}</h1> */}
    </span>
    // <div className="button-modal">
    //   <button onClick={props.onClick} value={props.value} id={props.id}>
    //     {props.name}
    //     {/* <img src={props.img} alt="" /> <h2>{props.name}</h2> */}
    //   </button>
    // </div>
    // <div className="button-modal">
    //   <input type="image" src={props.img} onClick={props.onClick} value={props.value} />
    //   <h2>{props.name}</h2>
    // </div>
  );
}
