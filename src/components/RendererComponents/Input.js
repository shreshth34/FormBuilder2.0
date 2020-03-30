import React, { Component } from "react";
import Radium from "radium";

export class Input extends Component {
  render() {
    const addField = {
      padding: "18px",
      height: "84px",
      width: "384px",
      borderRadius: "4px",
      backgroundColor: "#FFFFFF",
      borderRadius: "4px",
      boxShadow: "0 1px 2px 0 rgba(34,36,38,0.15) ",
      ":hover": {
        backgroundColor: "#F2FAF9"
      }
    };

    const asterisk = {
      height: "13.6px",
      width: "12px",
      color: "#CDCDCD"
    };

    const iconic = {
      right: "40px",
      width: "354.5px",
      height: "30px",
      color: "black",
      boxShadow: "0 1px 2px 0 rgba(34,36,38,0.15)",
      border: "1px solid #EEEEEE",
      boxSizing: "border-box",
      borderRadius: "4px"
    };

    const labelD = {
      marginRight: "250px",
      height: "10px",
      width: "57px",
      color: "#4A4A4A",
      fontFamily: "Roboto",
      fontSize: "14px",
      letterSpacing: "0",
      lineHeight: "19px"
    };

    const editProperty = index => {
      console.log("edit Property", index)
    };

    if (this.props.label === undefined) {
      return (
        <div>
          Label:<label htmlFor={this.props.id}></label>
          <input type="text" />
          <input type="text" />
        </div>
      )
    } else {
      return (
        <div
          style={addField}
          id={this.props.id}
          onClick={() => editProperty(this.props.id)}
        >
          <i class="asterisk icon" style={asterisk}></i>

          <label style={labelD} htmlFor={this.props.id}>
            {this.props.label}
          </label>

          <input style={iconic} type={this.props.data_type} />

          {/* <button onClick={()=>this.props.delete(this.props.id)}>delete</button> */}
        </div>
      );
    }
  }
}

export default Radium(Input);
