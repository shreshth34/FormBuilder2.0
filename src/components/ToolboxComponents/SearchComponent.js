import React, { Component } from "react";
import "/Users/Shreshth Juneja/Desktop/FormBuilder1.0-newAddingField/src/App.css";

export class SearchComponent extends Component {
  render() {
    return (
      <div class="ui fluid icon input">
        <input type="text" placeholder="Search for a component" />
        <i class="search icon"></i>
      </div>
    );
  }
}

export default SearchComponent;
