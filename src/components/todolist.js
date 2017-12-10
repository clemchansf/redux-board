import React from 'react'
import {doLeftClick, doRightClick} from '../actions'
import {connect} from 'react-redux'
import NavPointer from '../components/nav-pointer'

const rowStyle = {
  border: '2px solid gray',
  borderRadius: 5,
  marginTop: 2,
}

const getConfig = (todoItem, index, id, direction, clickHandler) => {
  return {todoItem,index,id,direction,clickHandler}
}

const TodoList = ({todos, id, leftClick, rightClick, length}) => {
  let todoMap = todos.map((todoItem, index) => {
    console.log(`>> todoItem:${todoItem}, index: ${index}`)
    return (
      <div key={`td-${index}`} className="col-sm-12">
        <div className="row" key={index} style={rowStyle}>
          {(id === 0) ? null :
              (<NavPointer
                className="col-sm-1 col-xs-3"
                config={getConfig(todoItem, index, id, 'left', leftClick)}
                />)
          }
          <div className="col-sm-10 col-xs-5" style={{textAlign: 'left'}}>{todoItem}</div>
          {(id >= length - 1) ? null :
              (<NavPointer
                className="col-sm-1 col-xs-3"
                config={getConfig(todoItem, index, id, 'right', rightClick)}
               />)
          }
       </div>
     </div>
    )
  })
  return todoMap
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.index;
  return ({
      id,
      todos: state.todolist[id].items,
      length: state.todolist.length,
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    leftClick: (id, index, todo) => {
      dispatch(doLeftClick(id,index,todo))
    },
    rightClick: (id, index, todo) => {
      dispatch(doRightClick(id,index,todo))
    }
  })
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
