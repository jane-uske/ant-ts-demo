import { message } from "antd";
import React, { useEffect } from "react";
import { MyPromise } from "./Promise";

export default function App() {
  const myFun = () => {
    console.log(1);
    return new MyPromise((reslove, reject) => {
      console.log(2);
      // setTimeout(() => {
        // reslove("这次一定");
        reject({message:'下次一定'});
        console.log(3);
      // });
    });
  };
  myFun()
  .then(
    (result) => {
      console.log(result);
      return 1
    },
    (result) => {
      console.log(result.message);
      return 1
    }
  )
  .catch((error:any)=>{

  })
  ;
  console.log(4);
  // const fun = () => {
  //   console.log(1);
  //   return new Promise((reslove, reject) => {
  //     console.log(2);
  //     // setTimeout(() => {
  //       // reslove("这次一定");
  //       reject({message:'下次一定'});
  //       console.log(3);
  //     // });
  //   });
  // };
  // fun()
  // .then(
  //   (result) => {
  //     console.log(result);
  //   },
  //   (result) => {
  //     console.log(result.message);
  //   }
  // )
  // .catch((error)=>{

  // })
  // ;
  // console.log(4);

  return <div>App</div>;
}
