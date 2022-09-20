/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

type Print = <T>(arg: T) => T;

interface IPrint<T = number> {
  (arg: T): T;
}

type FetchResType = {
  name: string;
  age: number;
};

interface ILength {
  length: number;
}

interface IKeyValue<K, V> {
  key: K;
  value: V;
}

export default function App() {
  // function print<T>(arg: T): T {
  //   return arg;
  // }
  const print: Print = (arg) => {
    return arg;
  };
  print<number>(1);

  const swap: <T, U>(arr: [T, U]) => [U, T] = (arr) => {
    return [arr[1], arr[0]];
  };
  swap([1, "2"]);

  const request: <X>(url: string) => Promise<X> = async (url) => {
    const response = await fetch(url);
    return await response.json();
  };
  request<FetchResType>("").then((res) => console.log(res));

  const printLength: <F extends ILength>(arg: F) => F = (arg) => {
    console.log(arg.length);
    return arg;
  };
  printLength([1, 2]);

  class Stack<N> {
    private data: N[] = [];
    public push(item: N) {
      return this.data.push(item);
    }
    pop(): N | undefined {
      return this.data.pop();
    }
  }
  const s1 = new Stack<number>();
  s1.push(12321);

  const k1: IKeyValue<number, string> = { key: 1, value: "" };
  const k2: IKeyValue<string, Array<string>> = { key: "21", value: ["2", "2"] };

  interface API {
    "v2/api/list": {
      id: string;
    };
    "v2/api/component": {
      id: string;
      pageSize: number;
    };
  }

  /** 设置最大请求次数 */
  const requestPre: <L extends keyof API>(fetchParams: {
    url: L;
    params: API[L];
    maxTime?: number;
  }) => Promise<any> = async ({ url, params, maxTime = 1 }) => {
    try {
      const response = await fetch(url, { body: JSON.stringify(params) });
      return await response.json();
    } catch (error) {
      if (maxTime === 1) {
        throw new Error(`请求超时`);
      }
      requestPre({
        url,
        params,
        maxTime: --maxTime,
      });
    }
  };

  requestPre({
    url: "v2/api/list",
    params: { id: "1" },
    maxTime: 3,
  });

  const LANMAP: { [key in number]: string } = {
    1: "first",
    2: "second",
    3: "third",
  };

  return <div>App</div>;
}
