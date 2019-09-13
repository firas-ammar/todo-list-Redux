import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo';

const TodoList = ({ todo }) => {
    console.log(todo)
    return ( <div className="mx-auto">
                 {todo.map((el,index )=> <Todo key={index} element={el} id={index}  />)}
            </div>
  ) 
}
const mapStateToProps = state => {
    return{
        todo: state.todo
    }
}
export default connect(mapStateToProps)(TodoList);
