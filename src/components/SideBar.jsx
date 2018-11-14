import React, { Component } from "react";
import ListItem from "./ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { isOpen, items } = this.props;
    var style = {
      width: "300px"
    };

    if (isOpen) {
      style = {
        width: "300px"
      };
    } else {
      style = {
        width: "0"
      };
    }
    const list = items.map((item, index) => {
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
      <div className="sidebar move" style={style}>
        <div className="container">
          <div>
            <h5>Queue </h5>

            <h5>
              Best{" "}
              <FontAwesomeIcon style={{ fontSize: "15px" }} icon="caret-down" />
            </h5>
            <br />

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
    <div style={{ marginBottom: "2rem" }}>
      <Link
        id={0}
        title="new"
        active={props.tabState[0]}
        renderData={props.renderData}
        class="flex-sm-fill text-sm-center nav-link"
      />
      <Link
        id={1}
        title="in contact"
        active={props.tabState[1]}
        renderData={props.renderData}
        class="flex-sm-fill text-sm-center nav-link"
      />
      <Link
        title="ready"
        id={2}
        active={props.tabState[2]}
        renderData={props.renderData}
        class="flex-sm-fill text-sm-center nav-link"
      />
    </div>
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
/**
 * <Tabs
              tabState={this.props.tabState}
              renderData={this.props.renderData}
            />
 */
