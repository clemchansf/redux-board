const LEFT_CLICK = 'LEFT_CLICK'
const RIGHT_CLICK = 'RIGHT_CLICK'
const ADD_CLICK = 'ADD_CLICK'


const doLeftClick = (columnId, itemId, itemString) => {
  // alert("leftCllick")
  return {
    type: LEFT_CLICK,
    payload: { columnId, itemId, itemString }
  }
}

const doRightClick = (columnId, itemId, itemString) => {
  // alert("rightCllick")
  return {
    type: RIGHT_CLICK,
    payload: { columnId, itemId, itemString }
  }
}

const doAddClick = (columnId, itemString) => {
  return {
    type: ADD_CLICK,
    payload: { columnId, itemString}
  }
}

export {
  LEFT_CLICK,
  RIGHT_CLICK,
  ADD_CLICK,
  doLeftClick,
  doRightClick,
  doAddClick,
}

//export default Actions
