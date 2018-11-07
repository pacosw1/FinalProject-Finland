import React, { Component } from "react";

class NavBar extends Component {
  render() {
    let { toggleNav } = this.props;
    return (
      <React.Fragment>
        <div id="nav" className="flex">
          <div className="flexNav">
            <p onClick={() => toggleNav()}>Menu</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
