import React, { useState, useEffect, useRef } from 'react';
import RefCom from './RefCom';
import CallbackCom from './CallbackCom';

const App = (props) => {

  let [count, setCount] = useState(0);
  let nofirst = useRef(false);
  console.log("init", count);

  // mock componentDidMount
  useEffect(() => {
    setCount(1)
    console.log("componentDidMount 周期处罚");
  }, [])

  // mock componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('componentWillUnmount 周期处罚');
    }
  }, [])

  // mock componentDidUpdate
  useEffect(() => {
    console.log("nofirst.current", nofirst.current);
    if (nofirst.current) {
      console.log("componentDidUpdate 周期处罚", count);
    } else {
      nofirst.current = true;
    }
  })

  const click = () => {
    setCount(count + 1);
  }


  console.log(count);

  return (
    <div>
      <div>
        模拟class 各生命周期：
        {count}
        <button onClick={click}>click</button>
      </div>
      <br />
      <div>
        useRef 相关 demo：
        <RefCom />
      </div>
      <br />
      <div>
        callback 相关demo：
        <CallbackCom></CallbackCom>
      </div>
    </div>
  )
}


export default App;
