import React, { Component } from "react";

export class FieldDiv extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const basicFieldDiv = {
      height: "35px",
      width: "217px",
      borderRadius: "4px",
      backgroundColor: "#FFFFFF",
      boxShadow: " 0 1px 2px 0 rgba(34,36,38,0.15)",
      padding: "8px",
      borderLeft: "7px solid #D8D8D8",
      marginLeft: "-10px",
      textAlign: "left"
    };

    const ovalStyle = {
      height: "10px",
      width:  "20px",
      color:  "#4A4A4A",
      float: "left",
      marginTop: "4px"
    }

    const FieldText = {
      height: "19px",
      width:" 88px",
      color:" #4A4A4A",
      fontFamily: "Roboto",
      fontSize: "14px",
      lineHeight: "19px",
      float: "left"      
    }


    return (

        <div style={basicFieldDiv} key1={this.props.key1} onClick={()=>this.props.selectField(this.props.key1)}>
         <i className={this.props.icon} style={ovalStyle} ></i><span style={FieldText}>{this.props.type}</span>
        </div>

    );
  }
}

export default FieldDiv;
