import React, { Component } from "react";
import "../App.css";
import AddField from "./RendererComponents/AddField";

const title1 = {
  border: "1px solid white",
  height: "37px",
  width: "880px",
  color: "#4A4A4A",
  fontFamily: "Roboto",
  fontSize: "28px",
  lineHeight: "37px",
  textAlign: "left",
  outline: "none"
};

const desc1 = {
  border: "1px solid white",
  height: "19px",
  width: "880px",
  color: "#9B9B9B",
  fontFamily: "Roboto",
  fontSize: "14px",
  lineHeight: "19px",
  textAlign: "left",
  outline: "none"
};

export class Renderer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const addNewRow = () => {
      return this.props.changed({
        id:`${Math.random()
          .toString(36)
          .substr(2, 9)}`,
          addedField:[{}]
       },
       {
        id:`${Math.random()
          .toString(36)
          .substr(2, 9)}`,
          addedField:[{}]
       },
       );
   
    };

    const addNewColumn = () => {
      return this.props.changed({
        id: `${Math.random()
          .toString(36)
          .substr(2, 9)}`,

        addedField: [{}]
      });
    };

    const deleteEvent = x => {
      const filteredForm = this.props.data.FormFormat.filter(
        item => item.id !== x
      );
      this.props.deleteElement(filteredForm);
    };

    const insertEvent = x1 => {
      this.props.insert(x1);
    };

    return (
      <div className="renderer">
        <div className="header">
          <input
            type="text"
            style={title1}
            value={this.props.data.FormTitle}
            onChange={this.props.changed2}
          />

          <br />
          <input
            style={desc1}
            type="text"
            value={this.props.data.FormDescription}
            onChange={this.props.changedDesc}
          />
          <br />

          <button className="ui primary button" onClick={addNewColumn}>
            New Column
          </button>
        </div>
        <br />
        <br />
        <br />

        <div className="ui equal width column stackable grid" align="center">
          {this.props.data.FormFormat.map(element => {
            console.log("hello");
            if (element.pos === undefined) {
              return (
                <div className="column">
                  <AddField
                    id={element.id}
                    addedField={element.addedField}
                    delete={deleteEvent}
                    key={element.id}
                    insert={insertEvent}
                  />
                  <br />
                 
                </div>
                
              );
            } else {
              return <div className="row">

                <AddField
                    id={element.id}
                    addedField={element.addedField}
                    delete={deleteEvent}
                    key={element.id}
                    insert={insertEvent}
                  />
                  <br />
                
              </div>;
            }
          })}
           
        </div>
        <button className="ui primary button" onClick={addNewRow}>
                    New Row
                  </button>
      </div>
    );
  }
}

export default Renderer;
