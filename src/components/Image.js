import React, { Component } from "react";

function Image(props) {
  const style = {
    marginTop: ".35rem",
    width: "150px",
    height: "150px",
    backgroundColor: "grey"
  };
  return (
    <div style={style}>
      <img url="https://ye7zs22zd242wmzxo41cj7b5-wpengine.netdna-ssl.com/assets/silk-metal-side-a-200x200.jpg" />
    </div>
  );
}
export default Image;
