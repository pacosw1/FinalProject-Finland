import React, { Component } from "react";
import ListItem from "./ListItem";

class SideBar extends Component {
  render() {
    let {
      handleClick,
      selected,
      items,
      open,
      renderData,
      tabState
    } = this.props;
    const list = items.map((item, index) => {
      //takes items passed down by app and formats them into li with event handlers

      return (
        <li
          key={item.id}
          id={item.id}
          onClick={() => {
            handleClick(item.id);
          }}
        >
          <ListItem
            active={selected[index]}
            customer={item.name}
            parts={item.parts.length}
            complexity={item.complexity}
            estimatedT={item.estimatedT}
          />
        </li>
      );
    });

    var style = { width: "0" };
    if (open) {
      style = {
        width: "400px"
      };
    }

    return (
      <React.Fragment>
        <div id="sidebar" className="" style={style}>
          <div className="container">
            <div>
              <h5 id="headTitle">Queue ({items.length})</h5>
              <br />
              <Tabs tabState={tabState} renderData={renderData} />
              <div>
                <ul>{list}</ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
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
