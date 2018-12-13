import React, { Component } from "react";
import ListItem from "./ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      isOpen,
      items,
      onSortClick,
      sortField,
      currIndex,
      checkId
    } = this.props;
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

    const list = items.map(item => {
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
            id={item.id}
            checkId={checkId}
            customer={item.name}
            parts={item.parts.length}
            complexity={item.complexity}
            profit={item.profit}
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
            <Sort selected={sortField} onSortClick={onSortClick} />
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

class Sort extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      choices: ["Best", "Worst", "Most Recent", "Complexity", "Estimated Time"],
      selected: "Best"
    };
  }
  onClick(index) {
    this.setState({
      selected: this.state.choices[index]
    });
  }
  render() {
    let { onSortClick } = this.props;
    return (
      <div>
        <h6>Sort By</h6> <br />
        <select
          name="name"
          className="custom-select"
          defaultValue={this.state.choices[0]}
          onChange={e => onSortClick(e.target.value)}
        >
          <option>Best</option>
          <option>Worst</option>
          <option>Most Recent</option>
          <option> Complexity</option>
          <option>EstimatedTime</option>
        </select>
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












            <div className="input-group mb-3">
        <input
          name="quantity"
          placeholder={"Search Here"}
          type="text"
          className="form-control"
        />
      </div>
 */
