import React from 'react'

const NavPointer = ({config}) => {
  let {id, index, todoItem, direction, clickHandler} = config

  let defaultPointer = "."
  let pointer = (direction === 'left')
              ? '<'
              : (direction === 'right')
              ? '>' : defaultPointer

  let rowStyle = {
    margin: '0 1px 0 1px',
    float: direction,
    display: 'inline-block',
    color: 'green',
    fontWeight: 800,
    fontSize: 12,
    paddingTop: 3,
    paddingLeft: 1,
  }

  return (<div style={rowStyle}
            onClick={() => {
              clickHandler(id, index, todoItem)
            }}
          >
            {pointer}
          </div>)
}

export default NavPointer
