import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ListItem extends Component {
  render() {
    var style = {};

    if (this.props.active) style = { backgroundColor: "#d1d1d1" };

    return (
      <div className="listItem" style={style}>
        <table className="table table-sm table-borderless">
          <tr scope="row">
            <th scope="col">
              <a href="#">{this.props.customer}</a>
            </th>
          </tr>
          <th scope="col">
            <FontAwesomeIcon icon="coins" />
          </th>
          <th scope="col">
            <FontAwesomeIcon icon="wrench" />
          </th>
          <th scope="col">
            <FontAwesomeIcon icon="tachometer-alt" />
          </th>

          <th scope="col">
            <FontAwesomeIcon icon="clock" />
          </th>
          <tr>
            <td scope="col">50%</td>
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
