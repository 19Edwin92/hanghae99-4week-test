// Action value
const ADD_TODO = "ADD_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

// Action Creator
// Todo를 추가하는 action creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

// Todo를 지우는 action creator
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

// Todo를 isDone를 변경하는 action creator
export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  };
};

// 상세 페이지에서 특정 Todo만 조회하는 action creator
export const getTodoByID = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload,
  };
};

// initial state
const initialState = [
    {
      id: 1,
      title: "리액트",
      body: "리액트를 배워봅시다",
      isDone: false,
    },
// 수정### 객체를 배열로 수정    
//   todo: {
//     id: "0",
//     title: "",
//     body: "",
//     isDone: false,
//   },
  ];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newtodo = {id:Date.now(), title:action.payload.title, body:action.payload.body, isDone:false}
      return [...state, newtodo]
    
    // DELETE_TODO 부분이 존재하지 않음
    case DELETE_TODO: 
      const clonetodo1 = [...state]
      const deletetodolists = clonetodo1.filter(el => el.id !== action.payload)
      console.log(deletetodolists)
      return [...deletetodolists]  

    case TOGGLE_STATUS_TODO:
      const clonetodo2 = [...state]
      const find = clonetodo2.find(el=>el.id === action.payload)
      find.isDone = !find.isDone
      return clonetodo2
      // return {
      //   ...state,
      //   todos: state.todos.map((todo) => {
      //     if (todo.id === action.payload) {
      //       return {
      //         ...todo,
      //         isDone: !todo.isDone,
      //       };
      //     } else {
      //       return todo;
      //     }
      //   }),
      // };

    case GET_TODO_BY_ID:
      // return {
      //   ...state,
      //   todo: state.todos.find((todo) => {
      //     return todo.id === action.payload;
      //   }),
      // };
      return state;
    default:
      return state;
  }
};

export default todos;
