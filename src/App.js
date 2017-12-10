import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux'
//import PropTypes from 'prop-types'
import TodoColumn from './containers/todocolumn'


class App extends Component {
  render() {
    let {todolist} = this.props
    return (
      <div className="row" style={{margin: 25, fontSize: 10}}>
        {todolist.map((ticket, index) => {
          return <TodoColumn key={index} index={index}/>
        })}
      </div>
    );
  }
}


// App.propTypes = {
//   title: PropTypes.string.isRequired
// }

const mapPropsToState = (state, props) => {
  console.log("mapPropsToState: state and props", state, props)
  return { todolist: state.todolist}
}
export default connect(mapPropsToState)(App);
