
import React, { useState, useMemo } from 'react';

function Child({ count }) {
  console.log("子组建发生更新");
  console.log('重新生成Child组件，使用场景：当 state 较多但是子组建并不需要依赖所有 state 的时候');
  return <p>当前传递的count为:{count}</p>;
}

export default function MemoCom() {
  const [count1, changeCount1] = useState(0);
  const [count2, changeCount2] = useState(10);

  const child = useMemo(() => {
    return <Child count={count1} />;
  }, [count1]);


  return (
    <div>
      {/* <Child count={count1} /> */}
      {child}
      <button onClick={() => { changeCount1(count1 + 1); }}>改变count1</button>
      <button onClick={() => { changeCount2(count2 + 1); }}>改变count2</button>
    </div>
  );
}