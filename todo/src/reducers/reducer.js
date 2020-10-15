
const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todo: [
          ...state.todo,
          {
            item: action.task,
            completed: false,
            id: Date.now(),
          },
        ],
      };
    case "TOGGLE_TODO":
      return {
        todo: state.todo.map((todo, index) =>
          index === action.index
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "REMOVE_TODO":
      return {
        todo: state.todo.filter(t => !t.completed)
      };
    default:
      return state;
  }
};

export default Reducer;
