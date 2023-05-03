# research-react-around-memo

パフォーマンス改善に有効なメモ化関連（React memo, useCallback, useMemo）の動作を調査し、整理した。

## SUMMARY

下記の話は、簡略化のため、props は言及する値・関数のみを渡していることを前提とする。

### ①React memo

- 親コンポーネントがレンダリングされた場合においても、props が変更されない限り、子コンポーネントの再レンダリングが走らない

### ②useCallback

- 親コンポーネントから props で関数が渡された場合において、親コンポーネントの再レンダリングが走っても、子コンポーネントの再レンダリングが走らない
  - ※ 通常、props にて関数が渡された場合、子コンポーネントをメモ化していても、親コンポーネントに再レンダリングが走れば、子コンポーネントは再レンダリングが走る
- ※ useCallback は子コンポーネントがメモ化されていることが前提

### ③useMemo

- 処理結果をメモするため、再レンダリングによる不要な計算が走らない

## MOTION

### ①React memo

#### 適用なしの場合

親コンポーネントのみに存在する state が更新され、親コンポーネントに再レンダリングが走った際、子コンポーネントも再レンダリングが走っている。
![react_memo_not_apply](https://user-images.githubusercontent.com/65984887/235817770-691c7a01-8a2a-4d2c-b86e-d29b54ae8ec7.gif)

#### 適用ありの場合

親コンポーネントのみに存在する state が更新され、親コンポーネントに再レンダリングが走った際、小コンポーネントには再レンダリングが走っていない。
![react_memo_apply](https://user-images.githubusercontent.com/65984887/235817813-dd234270-f3ba-438a-9d3b-b350f155cd37.gif)

### ②useCallback

#### 適用なしの場合

親コンポーネントのみに存在する state が更新され、親コンポーネントに再レンダリングが走った際、子コンポーネントも再レンダリングが走っている。
![usecallback_not_apply](https://user-images.githubusercontent.com/65984887/235817825-8dca116e-bcb3-47b0-8d4c-2ed979894e4c.gif)

#### 適用ありの場合

親コンポーネントのみに存在する state が更新され、親コンポーネントに再レンダリングが走った際、小コンポーネントには再レンダリングが走っていない。
![usecallback_apply](https://user-images.githubusercontent.com/65984887/235817840-c615b418-eef5-4f04-b16c-a5b64e514a21.gif)

### ③useMemo

#### 適用なしの場合

コンポーネントの state に変更があり、コンポーネントに再レンダリングが走った際、都度処理が実行されている。
![usememo_not_apply](https://user-images.githubusercontent.com/65984887/235817857-5615fb21-3f15-46bd-b086-96c49f1a8757.gif)

#### 適用ありの場合

コンポーネントの state に変更があり、コンポーネントに再レンダリングが走った際、処理が実行されていない。
![usememo_apply](https://user-images.githubusercontent.com/65984887/235817879-3e1729d6-272c-4136-bdfb-0b540b6e925e.gif)

## URL

| 分類        | 項目     | URL                                                                  |
| ----------- | -------- | -------------------------------------------------------------------- |
| React.memo  | 適用なし | [/react-memo/not-apply](http://localhost:3000/react-memo/not-apply)  |
|             | 適用あり | [/react-memo/apply](http://localhost:3000/react-memo/apply)          |
| useCallback | 適用なし | [/usecallback/not-apply](http://localhost:3000/react-memo/not-apply) |
|             | 適用あり | [/usecallback/apply](http://localhost:3000/react-memo/apply)         |
| useMemo     | 適用なし | [/usememo/not-apply](http://localhost:3000/usememo/not-apply)        |
|             | 適用あり | [/usememo/apply](http://localhost:3000/usememo/apply)                |
