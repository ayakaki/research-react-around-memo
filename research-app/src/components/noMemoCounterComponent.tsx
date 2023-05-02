import { memo, useState } from "react";

type Props = {
  parentCount02: number;
  setParentCount02: (count: number) => void;
}

export const NoMemoCounterComponent:React.FC<Props> = (props: Props) => {
  const [childCount, setChildCount] = useState<number>(0);
  console.log("render childComponent");
  return(<>
  <p>親カウンター②の値: {props.parentCount02}</p>
  <button onClick={() => props.setParentCount02(props.parentCount02 + 1)}>親カウンター②を子で増やす</button>
  <p>子のカウンターの値: {childCount}</p>
  <button onClick={() => setChildCount(childCount + 1)}>子のカウンターを子で増やす</button>
  </>)
}