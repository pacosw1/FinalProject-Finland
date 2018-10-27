import React, { Component } from "react";
import ListItem from "./ListItem";

class SideBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const list = this.props.items.map((item, index) => {
      //takes items passed down by app and formats them into li with event handlers

      return (
        <li
          key={item.id}
          id={item.id}
          onClick={() => {
            this.props.handleClick(item.id);
          }}
        >
          <ListItem
            active={this.props.selected[index]}
            customer={item.name}
            parts={item.parts.length}
            complexity={item.complexity}
            estimatedT={item.estimatedT}
          />
        </li>
      );
    });
    return (
      <div className="split left" style={{ backgroundColor: "#F8F8F8	" }}>
        <div className="container">
          <div>
            <h5 id="headTitle">Queue ({this.props.items.length})</h5>
            <br />
            <ButtonGroup left="New" mid="In Progress" right="completed" />
          </div>

          <ul>{list}</ul>
        </div>
      </div>
    );
  }
}
function ButtonGroup(props) {
  return (
    <nav
      style={{ marginBottom: "3rem" }}
      className="nav nav-pills flex-column flex-sm-row"
    >
      <a class="flex-sm-fill text-sm-center nav-link active" href="#">
        Unread
      </a>
      <a className="flex-sm-fill text-sm-center nav-link" href="#">
        Opened
      </a>
      <a className="flex-sm-fill text-sm-center nav-link" href="#">
        Completed
      </a>
    </nav>
  );
}

export default SideBar;
