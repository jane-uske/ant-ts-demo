import React, { useState } from "react";

export default function SubApp(props: any) {
  const [info, setInfo] = useState({ name: "wujian", age: 20 });
  return props.children(info);
}
