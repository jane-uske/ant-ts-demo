import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

let state = [] as any[];
let hookIndex = 0;
export function useMyState(initialState: any) {
  if (!(hookIndex in state)) state[hookIndex] = initialState;
  const _hookIndex = hookIndex;
  const setState = (newState: any) => {
    if (typeof newState === "function")
      state[_hookIndex] = newState(state[_hookIndex]);
    else state[hookIndex] = newState;
    render();
  };
  return [state[hookIndex++], setState];
}

function render(name?: string) {
  const root = ReactDOM.createRoot(
    document.getElementById(name || "root") as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
