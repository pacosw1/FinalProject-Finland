import React, { Component } from "react";

class Table extends Component {
  state = {};
  render() {
    const features = this.props.features.map((feature, index) => {
      return (
        <tr key={index}>
          <th scope="col">{feature.name}</th>
          <th scope="col">{feature.quantity}</th>
          <th scope="col">{feature.time}</th>
        </tr>
      );
    });
    return (
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Feature</th>
            <th scope="col">Quantity</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>{features}</tbody>
      </table>
    );
  }
}

export default Table;
