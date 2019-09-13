import {createStore,combineReducers} from 'redux'
import TodoFilter from './reducer/TodoFilter'


const store = createStore(combineReducers({
    todo: TodoFilter,
}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store