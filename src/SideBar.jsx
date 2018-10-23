import React, { Component } from "react";
import ListItem from "./ListItem";

class SideBar extends Component {
  render() {
    const list = this.props.items.map(item => {
      return (
        <li
          key={item.id}
          onClick={() => {
            this.props.handleClick(item.id);
          }}
        >
          <ListItem
            customer={item.name}
            complexity={item.complexity}
            estimatedT={item.estimatedT}
          />
        </li>
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
