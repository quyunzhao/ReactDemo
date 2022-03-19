import React, { useRef } from "react";

export default function Test() {
  const inputDom = useRef();

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
    </div>
  );
}
