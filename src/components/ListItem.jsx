import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return (
      <div className="listItem">
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
      </div>
    );
  }
}

export default ListItem;
