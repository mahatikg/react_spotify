export default function compareReducer( state = [], action) {
  switch (action.type) {
    case "COMPARE_USERS":
      return action.payload
    default:
    return state
  }
}
