import React from "react";
import "./App.less";

export default function App() {
  return (
    <div
      className="wrap"
      onClick={() => {
        fetch("/list.json").then(async (res) => console.log(await res.json()));
      }}
    >
      <div className="sub">元素1</div>
      <div className="sub">元素2</div>
      <div className="sub">元素3</div>
      <div className="sub">元素4</div>
    </div>
  );
}
