import React, { Component } from "react";

class Son extends Component<{
  renturnInstance: (instance: React.Component,) => void;
}> {
  componentDidMount(){
    this.props.renturnInstance(this)
  }
  love = () => {
    console.log('love');
  }
  render() {
    return <div onMouseMove={(e)=>{
      console.log(e)
    }}>son</div>;
  }
}

export default Son;
