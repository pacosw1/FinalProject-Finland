import React, { Component } from "react";
import ListItem from "./ListItem";

class SideBar extends Component {
  render() {
    const list = this.props.items.map((item, index) => {
      return (
        <ListItem
          key={index}
          customer={item.name}
          complexity={item.complexity}
          estimatedT={item.estimatedT}
          parts={item.parts}
        />
      );
    });
    return (
      <div className="split left">
        <ul>{list}</ul>
      </div>
    );
  }
}

export default SideBar;
