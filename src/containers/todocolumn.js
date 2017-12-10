import React from 'react'
import {connect} from 'react-redux'
import {doAddClick} from '../actions'
import TodoList from '../components/todolist'
import TextBox from './textbox'

const TodoColumn = ({todo, id, addClick}) => {
  let {title, bgColor} = todo
  console.log(`> TodoColumn: ${id}`)
  return (
    <div className="col-sm-3 col-xs-6" style={{height: 'auto', marginTop: 10}}>
      <div style={{backgroundColor: bgColor, textAlign: "center", color: "#FFF", fontSize: 12}}>{title}</div>
      <TodoList index={id} />
      <TextBox clickHandler={addClick}/>
    </div>)
}

const mapPropsToState = (state, ownProps) => {
  //console.log("ownProps.index", ownProps.index)
  return {
    todo: state.todolist[ownProps.index],
    id: ownProps.index
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    addClick: (ownState) => {
      let value = ownState.state.value
      dispatch(doAddClick(ownProps.index, value))
      ownState.refs.textarea.value = ''
      ownState.setState({value: null})
    },
  }
}

export default connect(mapPropsToState,mapDispatchToProps)(TodoColumn)
