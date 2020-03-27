import React, { Component } from "react";
import "/Users/Shreshth Juneja/Desktop/FormBuilder1.0-newAddingField/src/App.css";
import Radium from "radium";
import DropDown from "./DropDown";

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

const iconic7 = {
  margin: "1px",
  padding: "10px",
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

const iconic2 = {
  padding: "1.5px"
};

const asterisk = {
  height: "13.6px",
  width: "12px",
  color: "#CDCDCD"
};

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

const addField1 = {
  padding: "18px",
  height: "54.4px",
  width: "353px",
  borderRadius: "4px",
  backgroundColor: "#FFFFFF",
  borderRadius: "4px",
  boxShadow: "0 1px 2px 0 rgba(34,36,38,0.15) "
};

const outer1 = {
  padding: "15px",
  height: "84px",
  width: "384px",
  borderRadius: "4px",
  backgroundColor: "xwhite",
  boxShadow: " 0 1px 2px 0 rgba(34,36,38,0.15)",

  ":hover": {
    backgroundColor: "#F2FAF9"
  }
};
outer1.backgroundColor = "white"; 

let rectangle1 = {
  display:"none",
  top: "20px",
  height: "50px",
  width: "350px",
  borderRadius: " 4px",
  backgroundColor: "#FFFFFF",
  boxShadow: "0 1px 2px 0 rgba(34,36,38,0.15)"
};



class AddField extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const changeLabel1 = (e) => {
      
      this.props.changeLabel2(e.target.value)
      
    }

    if (this.props.addedField[0].uiElement === undefined) {
      return (
        <div style={outer1}>
          <div style={addField1} id={this.props.id}>
            <div style={iconic2}>
              <i
                style
                class="blue plus circle icon"
                onClick={() => this.props.insert(this.props.id)}
              ></i>
            </div>
            {/* <button onClick={()=>this.props.delete(this.props.id)}>remove</button> */}
          </div>
        </div>
      );
    } else {
      if (this.props.addedField[0].uiElement === "Text Field") {
        return (
          <div>
            {/* <div className="ui card">
              <p onClick={() => this.props.delete(this.props.id)}>delete</p>
            </div> */}
            <div style={addField} id={this.props.id} >
              <span>
                <i class="asterisk icon" style={asterisk}></i>
                <label style={labelD} htmlFor={this.props.addedField[0].id}>
                  {this.props.addedField[0].label}
                </label>
                <input
                  style={iconic}
                  type={this.props.addedField[0].data_type}
                />
              </span>
              {/* <button onClick={()=>this.props.delete(this.props.id)}>delete</button> */}
            </div>
          </div>
        );
      } else if (this.props.addedField[0].uiElement === "File Upload") {
        return (
          <div>
            <div className="ui card" style={rectangle1}>
              <p onClick={() => this.props.delete(this.props.id)}>delete</p>
            </div>

            <div style={addField} id={this.props.id}>
              <i class="asterisk icon" style={asterisk}></i>
              <label style={labelD} htmlFor={this.props.addedField[0].id}>
                {this.props.addedField[0].label}
              </label>
              <input
                style={iconic7}
                type={this.props.addedField[0].data_type}
              />
                          {/* <button onClick={()=>this.props.delete(this.props.id)}>delete</button> */}

            </div>

          </div>
        );
      }
      else if (this.props.addedField[0].uiElement === "Dropdown") {

        return(

          <div>
                <DropDown id={this.props.id} label={this.props.addedField[0].label} option={this.props.addedField[0].options} changeLabel={changeLabel1} />
          </div>
       
       )


      }
      }
  }
}

export default Radium(AddField);
