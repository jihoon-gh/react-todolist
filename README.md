### 프로젝트 소개

- [한 입 크기로 잘라먹는 리액트](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%EB%A6%AC%EC%95%A1%ED%8A%B8/dashboard) 강의의 todolist 프로젝트

### 학습 내용

- React hooks
  - useState
    - 상태값 저장 및. 상태 값 바뀔 경우 리렌더링
  - useRef
    - 값이 바뀌어도 리렌더링 되지 않는 변수
  - useReducer
    - dispatch 함수를 이용하고, 다양한 case에 대해 상태값 관리
  - React.memo
    - 메모이제이션 (특정 컴포넌트 리렌더링 방지해서 성능 향상)
  - useCallback
    - 콜백 함수 자체를 메모이제이션 (함수 또한 객체이므로 이것이 호출마다 새로 생성되어 리렌더링되는 상황 방지)
  - Context
    - prop drilling을 방지하기 위해 props 를 전달해주는 컴포넌트 생성
