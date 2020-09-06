const breakReducer = (state = 5 , action) => {
    switch(action.type){
      case 'INCREASE_BREAK':
        return state + 1
      case 'DECREASE_BREAK':
        return state - 1
      case 'RESET':
        return 5
      default:
        return state
    }
  }
export default breakReducer
