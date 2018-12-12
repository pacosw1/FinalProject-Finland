import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    //this.onChange = this.onChange.bind(this);
    this.state = {
      name: "",
      quantity: 0,
      time: 0
    };
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
              style={style}
              className="custom-select"
              defaultValue={feature.name}
              onChange={e => this.props.updateValue(e, feature)}
            >
              <option>{feature.name}</option>
              <option>Punch Destroy Holes</option>
              <option>Punch Single Holes</option>
              <option>Threads</option>
            </select>
          </th>

          <th scope="col" style={{ width: "10rem" }}>
            <div className="input-group mb-3">
              <input
                name="quantity"
                defaultValue={feature.quantity}
                type="text"
                className="form-control"
              />
            </div>
          </th>
          <th scope="col" style={{ width: "10rem" }}>
            <div className="input-group mb-3">
              <input
                id={feature.id}
                name="time"
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
