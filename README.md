# research-react-around-memo

パフォーマンス改善に有効なメモ化関連（React memo, useCallback, useMemo）の動作を調査し、整理した。

## SUMMARY

下記の話は、簡略化のため、props は言及する値・関数のみを渡していることを前提とする。

### React memo

- 親コンポーネントがレンダリングされた場合においても、props が変更されない限り、子コンポーネントの再レンダリングが走らない

### useCallback

- 親コンポーネントから props で関数が渡された場合において、親コンポーネントの再レンダリングが走っても、子コンポーネントの再レンダリングが走らない
  - ※ 通常、props にて関数が渡された場合、子コンポーネントをメモ化していても、子コンポーネントは再レンダリングが走る
- ※ useCallback は子コンポーネントがメモ化されていることが前提

### useMemo

- 処理結果をメモするため、再レンダリングによる不要な計算が走らない

## MOTION

### React memo

todo

### useCallback

todo

### useMemo

todo

## URL

| 分類        | 項目       | URL                                                                  |
| ----------- | ---------- | -------------------------------------------------------------------- |
| React.memo  | メモ化なし | [/react-memo/not-apply](http://localhost:3000/react-memo/not-apply)  |
|             | メモ化あり | [/react-memo/apply](http://localhost:3000/react-memo/apply)          |
| useCallback | 適用なし   | [/usecallback/not-apply](http://localhost:3000/react-memo/not-apply) |
|             | 適用あり   | [/usecallback/apply](http://localhost:3000/react-memo/apply)         |
| useMemo     | 適用なし   | [/usememo/not-apply](http://localhost:3000/usememo/not-apply)        |
|             | 適用あり   | [/usememo/apply](http://localhost:3000/usememo/apply)                |
