import React, { useState, useEffect, useMemo, useCallback } from 'react';


const CallbackCom = (props) => {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(10);

  let cala = useCallback(() => {
    console.log("callback执行", count1, count2);

    if (count1 && count2) {
      return count1 * count2
    }
    return count1 + count2;
  }, [count1, count2])


  let calm = useMemo(() => {
    console.log("memo执行", count1, count2);
    return count1 * count2
  }, [count1, count2])


  useEffect(() => {
    const res = cala();
    console.log("callback返回的是函数，需要主动执行====", res);
  }, [cala])

  useEffect(() => {
    console.log("memo监听到数据变化会自动执行，返回值====", calm);
  }, [calm])

  const click = () => {
    setCount1(count1 + 1);
  }

  const click2 = () => {
    setCount2(count2 + 1);
  }

  return <div>
    {count1},
    {count2}
    <button onClick={click}>1111111</button>
    <button onClick={click2}>222222</button>
  </div>
}

export default CallbackCom;