import React, { Component } from "react";
import "/Users/Shreshth Juneja/Desktop/FormBuilder1.0-newAddingField/src/App.css";
const showFieldsOnClick = () => {};

export class AddOns extends Component {
  render() {
    const pStyle = {
      height: "19px",
      width: "120px",
      color: "#2EA3C8",
      fontFamily: "Roboto",
      fontSize: "14px",
      lineHeight: "19px",
      textAlign: "left",
      
    };

    const angleIcon = {
      height: "8.75px",
      width: "60px",
      color: "#33A5C9"
    };
    return (
      <div className="ui grid" id="basic_fields" onClick={showFieldsOnClick}>
        <div style={pStyle} className="thirteen wide column">
          <p>Add ons</p>
        </div>
        <div className="three wide column">
          <span className="FormBuilderText" id="show_icon">
            <i style={angleIcon} class="chevron right icon"></i>
          </span>
        </div>

        <div></div>
      </div>
    );
  }
}

export default AddOns;
