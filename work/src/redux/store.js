import {configureStore} from '@reduxjs/toolkit';
import todosReducer from './todosSlice';

const store = configureStore({
	reducer: {
		todos: todosReducer,
	},
});

export default store;

// import {configureStore} from '@reduxjs/toolkit';
// import todosReducer from './todosSlice';
// import {createStore} from 'redux';
// import rootReducer from './reducer';
// const store = createStore(rootReducer);
// export default store;