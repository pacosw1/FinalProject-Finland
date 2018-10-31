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
      <div
        id="sidebar"
        className="split left move"
        style={{ backgroundColor: "#F8F8F8	" }}
      >
        <div className="container">
          <div>
            <h5 id="headTitle">Queue ({this.props.items.length})</h5>
            <br />
            <Tabs
              tabState={this.props.tabState}
              renderData={this.props.renderData}
            />
            <div>
              <ul>{list}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function Tabs(props) {
  return (
    <nav
      className="move"
      style={{ marginBottom: "3rem" }}
      className="nav nav-pills flex-column flex-sm-row"
    >
      <Link
        id={0}
        title="unread"
        active={props.tabState[0]}
        renderData={props.renderData}
        class="flex-sm-fill text-sm-center nav-link"
      />
      <Link
        id={1}
        title="opened"
        active={props.tabState[1]}
        renderData={props.renderData}
        class="flex-sm-fill text-sm-center nav-link"
      />
      <Link
        title="completed"
        id={2}
        active={props.tabState[2]}
        renderData={props.renderData}
        class="flex-sm-fill text-sm-center nav-link"
      />
    </nav>
  );
}

function Link(props) {
  var style;
  if (props.active) style = { backgroundColor: "#d1d1d1" };
  return (
    <React.Fragment>
      <a
        style={style}
        active={props.active}
        onClick={() => props.renderData(props.title, props.id)}
        className="flex-sm-fill text-sm-center nav-link"
      >
        {props.title}
      </a>
    </React.Fragment>
  );
}

export default SideBar;
