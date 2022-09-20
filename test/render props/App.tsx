import React from "react";
import SubApp from "./subApp";

export default function App() {
  return (
    <div>
      father
      <div>
        <SubApp>
          {({ name, age }: any) => {
            return (
              <div>
                my name is {name},my age is {age}
              </div>
            );
          }}
        </SubApp>
      </div>
    </div>
  );
}
