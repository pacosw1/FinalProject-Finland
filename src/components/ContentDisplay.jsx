import React, { Component } from "react";
import Table from "./Table";

function ContentDisplay(props) {
  //render the current part

  const parts = props.parts; //made this variables to not repeat this.props.parts.....

  const currPart = props.currentPart;
  const index = parts.findIndex(x => x.id === currPart.id); //will find the index
  const dims = currPart.dimensions;
  const limitReached = index === parts.length - 1;
  return (
    <div className="split right">
      <div className="header" style={{ display: "flex" }}>
        <h1>{props.customer}</h1>
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
      <button disabled={index === 0} onClick={() => props.handlePrev(index)}>
        Prev
      </button>
      <button
        disabled={index === parts.length - 1}
        onClick={() => props.handleNext(index)}
      >
        Next
      </button>

      <Table features={currPart.features} />
      <div />
    </div>
  );
}

export default ContentDisplay;
/*
<div style={{ display: "flex" }}>
          <img src="http://picsum.photos/200" />
        </div>*/
