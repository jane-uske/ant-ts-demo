import React from "react";

function shallowEqual(objA: any, objB: any) {
  // true : 更新 | false : 不更新
  // 从后面代码可以看出，对于两个对象的比较为这里的代码

  if (objA === objB) {
    return true;
  }

  if (
    typeof objA !== "object" ||
    objA === null ||
    typeof objB !== "object" ||
    objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (let i = 0; i < keysA.length; i++) {
    console.log(
      "objA[keysA[i]] !== objB[keysA[i]]:",
      objA[keysA[i]],
      objB[keysA[i]],
      objA[keysA[i]] !== objB[keysA[i]]
    );
    if (!objB.hasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

export default class SubApp extends React.Component<any> {
  shallowCompare(nextProps: any, nextState: any) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState)
    );
  }
  shouldComponentUpdate(nextProps: any, nextState: any) {
    return this.shallowCompare(nextProps, nextState);
  }
  render() {
    console.log("render了一次",this.props);
    return <div>{this.props.info}</div>;
  }
}
