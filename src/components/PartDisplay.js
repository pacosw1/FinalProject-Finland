import React, { Component } from "react";
import Image from "./Image";
class PartDisplay extends Component {
  render() {
    {
    }
    return (
      <React.Fragment>
        <div className="col" />
        <div className="col">
          <h5>Model Generated Specs</h5>

          <table className="table table-borderless table-sm specs">
            <thead>
              <tr>
                <th scope="col">Element</th>
              </tr>
              <tr>
                <td scope="col">{this.props.material}</td>
              </tr>
              <tr>
                <th scope="col">Name</th>
              </tr>
              <tr>
                <td scope="col">{this.props.material}</td>
              </tr>
              <tr>
                <th scope="col">Length</th>
                <th scope="col">Width</th>
                <th scope="col">Thickness</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="col" style={{ width: "10rem" }}>
                  {this.props.dims.length}
                </td>
                <td scope="col" style={{ width: "10rem" }}>
                  {this.props.dims.width}
                </td>
                <td scope="col" style={{ width: "10rem" }}>
                  {this.props.dims.thickness}
                </td>
              </tr>

              <tr />
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default PartDisplay;

/*
 <table className="table table-borderless ">
          <thead>
            <tr>
              <th scope="col">Material</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="col">{this.props.material}</td>
            </tr>
            <tr>
              <th scope="col">Length</th>
              <th scope="col">Width</th>
              <th scope="col">Thickness</th>
            </tr>

            <tr>
              <td scope="col" style={{ width: "10rem" }}>
                <div className="input-group mb-3">
                  <input
                    defaultValue={this.props.dims.length}
                    type="text"
                    className="form-control"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </td>
              <td scope="col" style={{ width: "10rem" }}>
                <div className="input-group mb-3">
                  <input
                    defaultValue={this.props.dims.width}
                    type="text"
                    className="form-control"
                  />
                </div>
              </td>
              <td scope="col" style={{ width: "10rem" }}>
                <div className="input-group mb-3">
                  <input
                    defaultValue={this.props.dims.thickness}
                    type="text"
                    className="form-control"
                  />
                </div>
              </td>
            </tr>

            <tr />
          </tbody>
        </table> */
