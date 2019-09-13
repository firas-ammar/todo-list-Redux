import React from 'react';
import './App.css';
import { Toast, ToastBody, Input, Label, FormGroup, ToastHeader } from 'reactstrap';
import Todolist from './components/Todolist';
import {connect} from 'react-redux';
import {  MDBIcon } from "mdbreact";

const App = ({ onAddMovie }) => {
    return (
    <div className="p-3 my-2 rounded" style={{ background: 'blue' }}>
      <Toast>
        <ToastHeader style={{ height: '20vh' }} >

          <h2>Daily  TODO Lists</h2>

        </ToastHeader>
        <ToastHeader>
          Add your TODO
          <button className="float-right"  onClick={onAddMovie}><MDBIcon icon="plus-square" /> Add </button>
        </ToastHeader>
        <Todolist />
      </Toast>
    </div>

  );
}
const mapDispatchToProps = dispatch => {
  return {
      onAddMovie: () => {
          dispatch({
              type: 'ADD_TODO',
              todo: {
                  id: Math.random(),
                  title: prompt('todo title: '),
                 
              }
          })
      }
  }
}
      const SmartApp = connect(null, mapDispatchToProps)(App)
export default SmartApp;
