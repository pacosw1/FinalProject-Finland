import React, { Component } from "react";
import ListItem from "./ListItem";

class SideBar extends Component {
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
            <div>
              <nav
                style={{ marginBottom: "3rem" }}
                className="nav nav-pills flex-column flex-sm-row"
              >
                <a
                  onClick={() => this.props.renderData("unread")}
                  class="flex-sm-fill text-sm-center nav-link"
                >
                  Unread
                </a>
                <a
                  onClick={() => this.props.renderData("opened")}
                  className="flex-sm-fill text-sm-center nav-link"
                >
                  Opened
                </a>
                <a
                  onClick={() => this.props.renderData("completed")}
                  className="flex-sm-fill text-sm-center nav-link"
                >
                  Completed
                </a>
              </nav>
              <ul>{list}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
