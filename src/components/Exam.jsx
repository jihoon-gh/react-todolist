import { useReducer } from "react";

//상태를 실제로 변화시키는 함수
function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  //distpatch : 발송하다
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    //상태가 어떻게 변화되길 원하는지
    dispatch({
      //액션 객체를 인수로 전달
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
