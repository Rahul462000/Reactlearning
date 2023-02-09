import React, { useEffect } from "react";
import { useState } from "react";

const Page = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

//   useEffect hook in last a empty array is passed which tells that this hook will work only when page is refresh
useEffect(() =>{
    alert("btn is clicked");
},[num])        //// yaha per hamne specified current value pass karde which tells useeffcet will fire only when the num current value button is clicked





  return (
    <>
      <button
        onClick={
          () => {
            setNum(num + 1);
          }}>
        Click Me{num}
      </button> 

      <br />

      <button
        onClick={
          () => {
            setNums(nums + 1);
          }}>
        Click Me{nums}
      </button>
    </>
  );
};

export default Page;
