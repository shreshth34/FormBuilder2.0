import React, { Component } from "react";
import "/Users/Shreshth Juneja/Desktop/FormBuilder1.0-newAddingField/src/App.css";
import FieldDiv from "./FieldDiv";

export class PreDefinedFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_grid: "none",
      basicIcon: "chevron right icon"
    };
    this.toggle_basic = this.toggle_basic.bind(this);
  }
  toggle_basic() {
    this.setState({
      display_grid: this.state.display_grid === "none" ? "block" : "none",
      basicIcon:
        this.state.basicIcon === "chevron down icon"
          ? "chevron right icon"
          : "chevron down icon"
    });
  }

  render() {
    const selectField = (y) => {

        this.props.selectedField(y)

    }
    
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
      <div className="ui grid" id="basic_fields">
        <div className="row" id="row1" onClick={this.toggle_basic}>
          <div style={pStyle} className="thirteen wide column">
            <p> Pre-defined Fields </p>
          </div>
          <div className="three wide column">
            <span className="FormBuilderText" id="show_icon">
              <i style={angleIcon} class={this.state.basicIcon}></i>
            </span>
          </div>
        </div>      
        <div
          id="display_grid"
          className="ui grid my_grid"
          style={{ display: this.state.display_grid }}
        >
          {this.props.predef.map(e => {
            return (
              <div className="eight wide column">
                <FieldDiv icon={e.icon} type={e.label} key1={e.id} selectField={selectField} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PreDefinedFields;
