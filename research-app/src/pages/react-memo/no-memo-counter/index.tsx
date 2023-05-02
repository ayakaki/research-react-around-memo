import { NoMemoCounterComponent } from "@/components/noMemoCounterComponent";
import { NextPage } from "next";
import { useState } from "react";

export const MemoCounter:NextPage = () => {

  const [parentCount01, setParentCount01] = useState<number>(0)
  const [parentCount02, setParentCount02] = useState<number>(0)
  console.log("render parentComponent");

  return (
  <>
    <h2>メモ化なしの場合</h2>
    <p>親カウンター①の値: {parentCount01}</p>
    <button onClick={() => setParentCount01(parentCount01 + 1)}>親カウンター①を親で増やす</button>
    <NoMemoCounterComponent parentCount02={parentCount02} setParentCount02={setParentCount02} />
  </>
  )
}

export default MemoCounter;