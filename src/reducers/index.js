import {LEFT_CLICK, RIGHT_CLICK, ADD_CLICK} from '../actions'

const removeItemReducer = (state = {}, action) => {
  let newState = state.todolist[action.payload.columnId].items

  switch(action.type) {
    case LEFT_CLICK:
    case RIGHT_CLICK:
      newState = newState.filter((item, index) => {
          return index !== action.payload.itemId
      })
      return newState
    default:
      return state
  }
}
const addItemReducer = (state = {}, action) => {
  let newState

  switch(action.type) {
    case ADD_CLICK:
      newState = state.todolist[action.payload.columnId].items
      return [...newState, action.payload.itemString]
    case LEFT_CLICK:
      newState = state.todolist[action.payload.columnId - 1].items
      return [...newState, action.payload.itemString]

    case RIGHT_CLICK:
      newState = state.todolist[action.payload.columnId + 1].items
      return [...newState, action.payload.itemString]

    default:
      return state
  }
}

export const reducers = (state = {}, action) => {
  let newState = {...state}
  let anchoredColumnItems
  let adjacentLeftColumnItems
  let adjacentRightColumnItems
  let newItems

  switch(action.type) {
    case ADD_CLICK:
      newItems = addItemReducer(state, action)
      newState.todolist[action.payload.columnId].items = [...newItems]
      return newState

    case LEFT_CLICK:
      anchoredColumnItems = removeItemReducer(state, action)
      adjacentLeftColumnItems = addItemReducer(state, action)
      newState.todolist[action.payload.columnId].items = [...anchoredColumnItems]
      newState.todolist[action.payload.columnId - 1].items = [...adjacentLeftColumnItems]
      return newState

    case RIGHT_CLICK:
      anchoredColumnItems = removeItemReducer(state, action)
      adjacentRightColumnItems = addItemReducer(state, action)
      newState.todolist[action.payload.columnId].items = [...anchoredColumnItems]
      newState.todolist[action.payload.columnId + 1].items = [...adjacentRightColumnItems]
      return newState

    default:
      return state
  }
}
