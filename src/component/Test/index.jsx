import React, { useRef, useState } from "react";

export default function Test() {
  const inputDom = useRef();

  const [mouseInfo, setMouseInfo] = useState({ clientX: "", clientY: "" });

  // 调用子元素回调 numTimes 次，来重复生成组件
  function Repeat(props) {
    const items = [];

    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i, 5));
    }
    return <div>{items}</div>;
  }

  return (
    <div>
      <input
        type="text"
        ref={(ref) => {
          if (ref) {
            inputDom.current = ref;
          }
        }}
      />
      <input
        type="button"
        value="Focus the text input"
        onClick={() => {
          inputDom.current.focus();
        }}
      />
      <Repeat numTimes={5}>
        {(index, w) => (
          <div key={index}>
            This is item {index} {w}in the list
          </div>
        )}
      </Repeat>

      <div
        style={{ height: "100vh" }}
        onMouseMove={(event) => {
          setMouseInfo({ clientX: event.clientX, clientY: event.clientY });
        }}
      >
        <h1>移动鼠标!</h1>
        <p>
          当前的鼠标位置是 ({mouseInfo.clientX}, {mouseInfo.clientY})
        </p>
      </div>
    </div>
  );
}
