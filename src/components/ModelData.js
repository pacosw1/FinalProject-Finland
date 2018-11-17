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
        <table className="table table-borderless table-sm ">
          <tbody>
            <tr>
              <td>data</td>
              <th>Feature</th>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default ModelData;
