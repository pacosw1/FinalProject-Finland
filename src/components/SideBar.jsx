import React, { Component } from "react";
import ListItem from "./ListItem";

class SideBar extends Component {
  render() {
    const list = this.props.items.map(item => {
      //takes items passed down by app and formats them into li with event handlers
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
        <div className="container-fluid">
          <ul>{list}</ul>
        </div>
      </div>
    );
  }
}

export default SideBar;
