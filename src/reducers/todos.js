const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]

    case "TOGGLE_TODO":
      return state.map(todo => (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo)

      case 'DELETE_TODO':
      const numIndex = parseInt(action.id)
      return state.filter(todo => todo.id !== numIdex)

    default:
      return state
  }


}

export default todos