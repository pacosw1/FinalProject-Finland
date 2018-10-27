import React, { Component } from "react";

class ListItem extends Component {
  render() {
    var style = {};
    console.log("active?", this.props.active);
    if (this.props.active) style = { backgroundColor: "#d1d1d1" };

    return (
      <div className="listItem" style={style}>
        <table className="table table-sm table-borderless">
          <th scope="col">Parts</th>
          <th scope="col">Complexity</th>
          <th scope="col">Time</th>

          <tr>
            <td scope="col">{this.props.parts}</td>
            <td scope="col">{this.props.complexity}</td>
            <td scope="col">{this.props.estimatedT}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default ListItem;
/**<div className="listItem" style={style}>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">{this.props.customer}</th>
              <th scope="col">Parts</th>
              <th scope="col">Complexity</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
              <td>{this.props.parts}</td>
              <td>{this.props.complexity}</td>
              <td>{this.props.estimatedT}</td>
            </tr>
            <tr />
          </tbody>
        </table>
      </div> */
