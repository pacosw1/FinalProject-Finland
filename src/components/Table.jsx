import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps() {
    this.forceUpdate();
  }
  render() {
    const style = {
      width: "8rem"
    };
    const features = this.props.features.map((feature, index) => {
      return (
        <tr key={feature.id + "" + Date.now()}>
          <th scope="col">
            <select
              name="name"
              id={feature.id}
              style={style}
              className="custom-select"
              defaultValue={feature.name}
              onChange={e => this.props.updateValue(e, feature)}
            >
              <option>{feature.name}</option>
            </select>
          </th>

          <th scope="col" style={{ width: "10rem" }}>
            <div className="input-group mb-3">
              <input
                name="quantity"
                id={feature.id}
                onChange={e => this.props.updateValue(e, feature)}
                defaultValue={feature.quantity}
                type="text"
                className="form-control"
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </th>
          <th scope="col" style={{ width: "10rem" }}>
            <div className="input-group mb-3">
              <input
                id={feature.id}
                name="time"
                onChange={e => this.props.updateValue(e, feature)}
                defaultValue={feature.time}
                type="text"
                className="form-control"
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </th>
          <th scope="col">
            <button
              onClick={() => this.props.onDelete(feature.id)}
              className="btn btn-outline-danger"
            >
              Delete{" "}
            </button>
          </th>
        </tr>
      );
    });
    return (
      <table className="table table-borderless table-sm">
        <thead>
          <tr>
            <th scope="col">Feature</th>
            <th scope="col">Quantity</th>
            <th scope="col">Time (Hours)</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {features}

          <th scope="col">
            <button
              style={style}
              onClick={this.props.onCreateFeature}
              className="btn btn-outline-primary"
            >
              Add Feature
            </button>
          </th>
        </tbody>
      </table>
    );
  }
}

export default Table;
