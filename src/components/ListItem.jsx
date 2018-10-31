import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ListItem extends Component {
  render() {
    var style = {};

    if (this.props.active) style = { backgroundColor: "#d1d1d1" };

    return (
      <div className="listItem move" style={style}>
        <table className="table table-sm table-borderless">
          <tr>
            <th>
              <a href="#">{this.props.customer}</a>
            </th>
          </tr>
          <th>
            <FontAwesomeIcon icon="coins" />
          </th>
          <th>
            <FontAwesomeIcon icon="wrench" />
          </th>
          <th>
            <FontAwesomeIcon icon="tachometer-alt" />
          </th>

          <th>
            <FontAwesomeIcon icon="clock" />
          </th>
          <tr>
            <td>50%</td>
            <td>{this.props.parts}</td>
            <td>{this.props.complexity}</td>
            <td>{this.props.estimatedT}</td>
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
