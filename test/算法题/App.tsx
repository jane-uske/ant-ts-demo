import React from "react";

export default function App() {
  const fun = (str: string) => {
    const arr = str.split(" ");
    /** 剪贴板初始为空 */
    let clipboard = "";
    let hasSelect = false;
    let deskShow = "";
    arr.forEach((i) => {
      switch (i) {
        case "1":
          if(hasSelect){
            hasSelect = false;
            clipboard = '';
            deskShow = "A";
          }else{
            deskShow += "A";
          }
          break;
        case "2":
          /** 当没有选择字母时Ctrl-C、Ctrl-X无效 */
          if (hasSelect) {
            /** 新的内容复制到剪贴板会覆盖原有内容 */
            clipboard = deskShow;
          }
          break;
        case "3":
          /** 当没有选择字母时Ctrl-C、Ctrl-X无效 */
          if (hasSelect) {
            clipboard = deskShow;
            deskShow = "";
          }
          break;
        case "4":
          if(hasSelect){
            hasSelect = false;
            deskShow = clipboard;
          }else{
            deskShow += clipboard;
          }
          break;
        case "5":
          /** 当屏幕中没有字母时,Ctrl-A无效 */
          if(deskShow){
            hasSelect = true;
          }
          break;
      }
    });
    return deskShow
  };
  console.log(fun('1 1 5 1 5 2 4 4').length)
  return <div>App</div>;
}
