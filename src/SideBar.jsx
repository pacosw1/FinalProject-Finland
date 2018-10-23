import React, { Component } from "react";
import ListItem from "./ListItem";

class SideBar extends Component {
  render() {
    const style = {
      backgroundColor: "grey"
    };
    return (
      <div className="split left">
        <ListItem />
      </div>
    );
  }
}

export default SideBar;
