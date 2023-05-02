import React, { memo } from 'react';

type Props = {
  onClickEvent: () => void;
};

export const UseMemoPropsFuncComponent: React.FC<Props> = memo(
  (props: Props) => {
    console.log('render childComponent');
    return (
      <p>
        <button onClick={props.onClickEvent}>クリックイベント</button>
      </p>
    );
  }
);
