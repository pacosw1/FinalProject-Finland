import React, { Component } from "react";
import Table from "./Table";
import Image from "./Image";
import PartDisplay from "./PartDisplay";

class ContentDisplay extends Component {
  constructor(props) {
    super(props);
  }

  calculateTotalTime() {
    //will calculate total time for all parts with all of their individual features
    const parts = this.props.parts;

    //console.log(parts);
    var totalTime = 0;

    for (var i = 0; i < parts.length; i++) {
      //runs through all parts
      var features = parts[i].features;

      for (var j = 0; j < features.length; j++) {
        var currFeature = features[j];
        totalTime += currFeature.quantity * currFeature.time;
      }
    }
    console.log(totalTime);
    return Math.floor(totalTime / 24).toString() + " Days";
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
      <div className="split right" style={{ backgroundColor: "#f2f2f2" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-sm-6 col-sm-12">
              <h5>{this.props.customer}</h5>
            </div>
            <div className="col-lg-4 col-sm-3 col-sm-12">
              <a href="index.js">See Customer History</a>
            </div>
          </div>

          <PartDisplay material={currPart.material} dims={dims} />

          <div className="row">
            <div className="col">
              <div className="partNav">
                <span className="">
                  Part {+index + 1} out of {parts.length}
                </span>
                <button
                  style={{ marginRight: ".5rem" }}
                  className="btn btn-link"
                  disabled={index === 0}
                  onClick={() => this.props.handlePrev(index)}
                >
                  Prev
                </button>
                <button
                  className="btn btn-link"
                  disabled={index === parts.length - 1}
                  onClick={() => this.props.handleNext(index)}
                >
                  Next
                </button>
              </div>

              <Table
                onCreateFeature={this.props.onCreateFeature}
                onDelete={this.props.onDelete}
                features={this.props.currentPart.features}
                updateValue={this.props.updateValue}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4" style={{ margin: ".1rem" }}>
              <p>Estimated Time:</p>
              <p>{this.calculateTotalTime()}</p>
            </div>
            <div className="col-4" style={{ margin: ".1rem" }}>
              <p>Customer Deadline:</p>

              <p>{new Date().toString().substring(0, 15)}</p>
            </div>
            <div className="col-2 align-self-end">
              <button
                style={{ margin: "1rem", padding: "1rem" }}
                className="btn btn-primary"
              >
                Send to Customer
              </button>
            </div>
          </div>
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
