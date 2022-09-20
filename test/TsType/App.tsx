import React, { FC, useEffect } from "react";
import { Button } from "antd";
import "./App.less";

interface StateType {
  a: number;
  b: number;
};
interface propType {
  // a: number;
  // b: number;
};
class App extends React.PureComponent<propType,StateType> {
  constructor(props: any) {
    super(props);
    this.add = this.add.bind(this);
    this.state = {
      a: 2,
      b: 2,
    };
  }
  add(params: number) {
    console.log('____this:"', this);
    return this.setState({ a: this.state.a ** params });
  }

  render() {
    return (
      <Button
        type="primary"
        onClick={() => {
          this.add(2);
        }}
      >
        +{this.state.a}
      </Button>
    );
  }
}

export default App;
