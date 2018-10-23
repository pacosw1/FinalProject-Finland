import React, { Component } from "react";

class ContentDisplay extends Component {
  render() {
    const curr = this.props.current;
    return (
      <div className="split right">
        <h1> </h1>
        <h1>{curr.name}</h1>
        <h1>{curr.complexity}</h1>
        <h1>{curr.testDetail}</h1>
      </div>
    );
  }
}

export default ContentDisplay;
