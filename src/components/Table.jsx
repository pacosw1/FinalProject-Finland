import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.updateValue();
  }
  render() {
    const style = {
      width: "8rem"
    };
    const features = this.props.features.map((feature, index) => {
      return (
        <tr key={index}>
          <th scope="col">
            <select
              name="name"
              style={style}
              className="custom-select"
              id="inputGroupSelect01"
              defaultValue={feature.name}
              onChange={e => this.props.updateValue(e)}
            >
              <option>{feature.name}</option>
            </select>
          </th>

          <th scope="col" style={{ width: "10rem" }}>
            <div className="input-group mb-3">
              <input
                name="quantity"
                onChange={e => this.props.updateValue(e)}
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
                name="time"
                onChange={e => this.props.updateValue(e)}
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
              onClick={() => this.props.onDelete(feature.name)}
              className="btn btn-outline-danger"
            >
              Delete{" "}
            </button>
          </th>
        </tr>
      );
    });
    return (
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Feature</th>
            <th scope="col">Quantity</th>
            <th scope="col">Time (Hours)</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>{features}</tbody>
        <th>
          <button
            onClick={this.props.onCreateFeature}
            className="btn btn-outline-primary"
          >
            Add Feature
          </button>
        </th>
      </table>
    );
  }
}

export default Table;
