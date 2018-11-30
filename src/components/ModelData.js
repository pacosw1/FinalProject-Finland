import React, { Component } from "react";

class ModelData extends Component {
  state = {};
  render() {
    /** let { data } = this.props;
    //const list = data.map(item => {
      let { name, quantity } = this.item;
      return (
        <tr>
          <th>{name}</th>
          <th>x{quantity}</th>
        </tr>
      );
    });
    */
    return (
      <React.Fragment>
        <table
          className="table table-borderless table-sm "
          style={{ textAlign: "left", marginLeft: "2rem" }}
        >
          <tbody>
            <tr>
              <th>Hole</th>
              <td>x4</td>
            </tr>
            <tr>
              <th>Bending</th>
              <td>x4</td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default ModelData;
