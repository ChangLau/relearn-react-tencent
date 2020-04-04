import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  DELETE_TODO,
  ASYNC_ADD
} from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: { id }
});

function addNum() {
  return {
    type: ASYNC_ADD
  };
}

export const addAsync = () => {
  return (dispatch, getState) => {
    console.log(getState());
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(addNum());
    }, 1000);
  };
};
