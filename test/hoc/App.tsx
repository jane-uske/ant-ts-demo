import React from "react";
import './App.less'

const Text = (props: any) => {
  return <div className='demo'>{props.children}</div>;
};

const withBracket = (Comp: any) => {
  return (props: any) => {
    return <Comp>[{props.children}]</Comp>;
  };
};

const Text1 = withBracket(Text);

export default function App() {
  return <Text1>ABC</Text1>;
}
