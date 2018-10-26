import React, { Component } from "react";
import Table from "./Table";

class ContentDisplay extends Component {
  constructor(props) {
    super(props);
    this.updateValue = this.updateValue.bind(this);
    this.state = {
      name: "",
      quantity: 0,
      time: 0
    };
  }
  updateValue(e) {
    const features = this.props.currPart.features;
    const index = features.findIndex(feature => feature.name === e.target.name);
    features[index];
  }

  render() {
    //render the current part

    const style = {
      margin: "2rem"
    };

    const parts = this.props.parts; //made this variables to not repeat this.props.parts.....

    const currPart = this.props.currentPart;
    const index = parts.findIndex(x => x.id === currPart.id); //will find the index
    const dims = currPart.dimensions;
    const limitReached = index === parts.length - 1;
    return (
      <div className="split right">
        <div className="container-fluid">
          <div className="header" style={{ display: "flex" }}>
            <h1>{this.props.customer}</h1>

            <a style={{ marginLeft: "90%" }} href="index.js">
              See Customer History
            </a>
          </div>
          <table className="table table-borderless ">
            <thead>
              <tr>
                <th scope="col">Material</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="col">{currPart.material}</td>
              </tr>
              <tr>
                <th scope="col">Dimensions</th>
              </tr>
              <tr>
                <th scope="col">
                  <p>Length</p>
                </th>
                <th scope="col">Width</th>
                <th scope="col">Thickness</th>
              </tr>

              <tr>
                <td scope="col" style={{ width: "10rem" }}>
                  <div className="input-group mb-3">
                    <input
                      defaultValue={dims.length}
                      type="text"
                      className="form-control"
                      placeholder=""
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </td>
                <td scope="col" style={{ width: "10rem" }}>
                  <div className="input-group mb-3">
                    <input
                      defaultValue={dims.width}
                      type="text"
                      className="form-control"
                      placeholder=""
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </td>
                <td scope="col" style={{ width: "10rem" }}>
                  <div className="input-group mb-3">
                    <input
                      defaultValue={dims.thickness}
                      type="text"
                      className="form-control"
                      placeholder=""
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </td>
              </tr>

              <tr />
            </tbody>
          </table>
          <div className="partNav">
            <span className="btn btn-outline-info">
              Part {+index + 1} out of {parts.length}
            </span>
            <button
              className="btn btn-outline-primary"
              disabled={index === 0}
              onClick={() => this.props.handlePrev(index)}
            >
              Prev
            </button>
            <button
              className="btn btn-outline-primary"
              disabled={index === parts.length - 1}
              onClick={() => this.props.handleNext(index)}
            >
              Next
            </button>
          </div>

          <Table
            onCreateFeature={this.props.onCreateFeature}
            onDelete={this.props.onDelete}
            features={currPart.features}
            updateValue={this.updateValue}
          />
          <button
            onClick={this.props.onSaveData(this.state)}
            className="btn btn-outline-primary"
          >
            Save
          </button>

          <div />
        </div>
      </div>
    );
  }
}

export default ContentDisplay;
/*
<div style={{ display: "flex" }}>
          <img src="http://picsum.photos/200" />
        </div>*/
