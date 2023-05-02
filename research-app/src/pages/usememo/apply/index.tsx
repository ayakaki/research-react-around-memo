import { NextPage } from 'next';
import { useMemo, useState } from 'react';

const UseMemoApply: NextPage = () => {
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  const double = (count: number) => {
    console.log('関数実行');
    for (let i = 0; i < 1000000000; i++) {
      // do nothing
    }
    return count * 2;
  };

  const doubleCount = useMemo(() => double(count02), [count02]);

  return (
    <>
      <h2>useMemo適用ありの場合</h2>
      <p>count01: {count01}</p>
      <button
        onClick={() => {
          setCount01(count01 + 1);
        }}
      >
        count01インクリメント
      </button>
      <p>
        count02: {count02}, double: {doubleCount}
      </p>
      <button
        onClick={() => {
          setCount02(count02 + 1);
        }}
      >
        count02インクリメント
      </button>
    </>
  );
};

export default UseMemoApply;
