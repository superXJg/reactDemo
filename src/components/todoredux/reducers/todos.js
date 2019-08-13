
const todos = (state=[], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            const arr = state.map(item => 
                item.id === action.id ? { ...item, completed: !item.completed} : item)
            return arr
        default:
            return state
    }
}

export default todos;