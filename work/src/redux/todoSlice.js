import {createSlice} from '@reduxjs/toolkit';

const todosSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [
            {id: 1, title: 'todo1', completed: false },
            {id: 2, title: 'todo2', completed: false },
            {id: 3, title: 'todo3', completed: true }
        ],
	},
	reducers: {
		addTodo: (state, action) => {
			const newTodo = {
				id: Date.now(),
				title: action.payload,
                completed: false,
			};
			state.todos.push(newTodo);
		},
	},
});

export const {addTodo} = todosSlice.actions;
export default todosSlice.reducer;