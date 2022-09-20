import React, { Component } from "react";
import Son from "./Son";
class App extends Component {
  sonRef = React.createRef()
  renturnInstance = (instance: any) => {
    instance.love();
  };
  componentDidMount(){
    console.log(this.sonRef)
  }
  render() {
    return (
      <div>
        father
        <Son ref={this.sonRef as any} renturnInstance={this.renturnInstance} />
      </div>
    );
  }
}

export default App;
