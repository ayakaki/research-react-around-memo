import { UseMemoPropsFuncComponent } from '@/components/useMemoPropsFuncComponent';
import { NextPage } from 'next';
import { useCallback, useState } from 'react';

export const UseCallbackApply: NextPage = () => {
  console.log('render parentComponent');

  const [count, setCount] = useState(0);

  const onClickEvent = useCallback(() => {
    console.log('onClickEvent');
  }, []);

  return (
    <>
      <h2>useCallback適用ありの場合</h2>
      <p>親カウンター：{count}</p>
      <button onClick={() => setCount(count + 1)}>
        親カウンターインクリメント
      </button>
      <UseMemoPropsFuncComponent onClickEvent={onClickEvent} />
    </>
  );
};

export default UseCallbackApply;
