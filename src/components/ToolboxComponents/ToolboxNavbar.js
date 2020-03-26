import React, { Component } from "react";
import logo from "./talview-logo.png";

const textStyle = {
  marginTop: "19.2px"
};

export class ToolboxNavbar extends Component {
  render() {
    return (
      <div className="ui grid">
        <div className="ten wide column">
          <img src={logo} alt="logo" className="company-logo" />
        </div>
        <div style={textStyle} className="six wide column">
          <span className="FormBuilderText">
            <i className="file light blue alternate outline icon"></i>Form Builder
          </span>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default ToolboxNavbar;
