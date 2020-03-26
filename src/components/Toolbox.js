import React, { Component } from "react";
import ToolboxNavbar from "./ToolboxComponents/ToolboxNavbar";
import SearchComponent from './ToolboxComponents/SearchComponent';
import BasicFields from './ToolboxComponents/BasicFields'
import "../App.css";
import PreDefinedFields from "./ToolboxComponents/PreDefinedFields";
import AddOns from "./ToolboxComponents/AddOns";

class Toolbox extends Component {
// eslint-disable-next-line
constructor(props){
  super(props)
}

  render(){

    const selectedFieldToApp = (y) => {

      this.props.selectedFieldFromApp(y)
    
    }

    const selectField = (y) => {

      this.props.selectedBasicFieldFromApp(y)

    }

  return (
      <div className="toolbox">
          
        <ToolboxNavbar />
        <SearchComponent />
        <BasicFields data={this.props.data} selectedBasicFieldFromApp={selectField} />
        <PreDefinedFields predef={this.props.predef} selectedField={selectedFieldToApp}/>
        <AddOns />
        
      </div>
    );
  
}
}
export default Toolbox;
