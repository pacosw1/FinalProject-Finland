import React, { Component } from "react";
import Table from "./Table";

class ContentDisplay extends Component {
  render() {
    //render the current part

    const parts = this.props.parts;
    console.log(parts);
    const currPart = this.props.currentPart;
    const index = parts.findIndex(x => x.id === currPart.id);
    const dims = currPart.dimensions;
    return (
      <div className="split right">
        <div className="header" style={{ display: "flex" }}>
          <h1>{this.props.customer}</h1>
          <a href="index.js">See Customer History</a>
        </div>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Material</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col">{currPart.material}</th>
            </tr>
            <tr>
              <th scope="col">Dimensions</th>
            </tr>
            <tr>
              <th scope="col">Length</th>
              <th scope="col">Width</th>
              <th scope="col">Thickness</th>
            </tr>

            <tr>
              <th scope="col">{dims.length}</th>
              <th scope="col">{dims.width}</th>
              <th scope="col">{dims.thickness}</th>
            </tr>

            <tr />
          </tbody>
        </table>
        <span>
          {index + 1} out of {parts.length}
        </span>
        <button onClick={this.prevPart}>Prev</button>
        <button onClick={this.nextPart}>Next</button>

        <Table features={currPart.features} />
        <div />
      </div>
    );
  }
}

export default ContentDisplay;
/*
<div style={{ display: "flex" }}>
          <img src="http://picsum.photos/200" />
        </div>*/
