import React from "react";

export default function Example1() {
  return (
    <div>
      <div>
        <DOMWay />
      </div>

      <div>
        <ReactWay />
      </div>
    </div>
  );
}

function DOMWay() {
  return (
    <div>
      <h1>DOM Way</h1>
      <input />
      <pre>{new Date().toLocaleTimeString()}</pre>
    </div>
  );
}

function ReactWay() {
  return React.createElement(
    "div",
    null,
    "",
    React.createElement("h1", null, "ReactWay"),
    React.createElement("input", null),
    React.createElement("pre", null, new Date().toLocaleTimeString())
  );
}
