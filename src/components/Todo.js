import React, { Component }  from 'react';
import {  ToastBody,Input, Label, FormGroup, } from 'reactstrap';
import {  MDBIcon } from "mdbreact";
import {connect} from 'react-redux'


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }
 
    render(){
        const {element,id, onEdit, onDelete, onThrough } = this.props
     console.log(element.test)
        return (
            <ToastBody >
        <FormGroup check>
        <Label check>
         <Input className=" font-weight-bold" type="checkbox"   name="radio1"/>
         <span onClick={() => onThrough(id)}  style={{textDecoration:(element.test)?'line-through':'none'}}> {element.title}</span>
          <div className="float-right">
          <button className="float" onClick={() => onEdit(element)}  ><MDBIcon icon="edit" /> Edit </button>
          <button className="float " onClick={() => onDelete(id)}  ><MDBIcon icon="trash-alt" /> Del </button>
          </div>
          </Label>
        </FormGroup>
        </ToastBody>
    )
}
}

const mapDispatchToProps = dispatch => {
    return {
        onDelete: (cin) => {
            dispatch({
                type: 'DELETE_TODO',
                cin
            })
        },
        
        onEdit: (todo) => {
            dispatch({
                type: 'EDIT_TODO',
                id:todo.id,
                
                todo: {
                id: todo.id,
                title: prompt('todo title: ',todo.title),
          
                    }
               })
      },
      onThrough : (id) => {
        dispatch({
            type: 'DONE_TODO',
            id
        })
    }
    }
}

const SmartTodo = connect(null, mapDispatchToProps)(Todo)

export default SmartTodo;