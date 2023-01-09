import React from "react";

const SlotMachine = () => {
  const SlotM = (props) => {
    // simple method to create a SlotMachine
    // let x = "😂";
    // let y = "😂";
    // let z = "😜";

    // now a upgraded version
    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    let { x, y, z } = props;

    if (x === y && y === z) {
      return (
        <>
          <h2>
            This is matching : {x}
            {y}
            {z}
          </h2>
        </>
      );
    } else {
      return (
        <>
          <h2>
            This is not matching : {x}
            {y}
            {z}
          </h2>
        </>
      );
    }
  };

  return (
    <>
      <h2>This is a slot Machine!!!!</h2>
      <SlotM x="🤣" y="🤣" z="🤣" />
      <SlotM x="😜" y="😜" z="🤗" />
      <SlotM x="🤩" y="🤩" z="🤩" />
      <SlotM x="😉" y="🤩" z="🤩" />
    </>
  );
};

export default SlotMachine;
