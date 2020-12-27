import React, { useState, useEffect, useRef } from 'react';


const RefCom = () => {
  const ref = useRef(0);

  const click = () => {
    ref.current++;
    console.log("ref的值会更新,但是不会触发视图变化", ref.current);
  }

  return <div>
    {ref.current}
    <button onClick={click}>1111</button>
  </div>
}

export default RefCom;