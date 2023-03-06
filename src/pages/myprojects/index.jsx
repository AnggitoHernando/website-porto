import React, { useState, useRef } from "react";
import Header from "../../containers/header/Header";
import MyProject from "../../components/myProjects/MyProjects";
import MyProjects from "../../components/myProjects/MyProjects";

export default function index() {
  return (
    <div>
      <Header />
      <MyProjects />
    </div>
  );
}
