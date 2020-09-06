const sessionReducer = (state = 25,action) => {
    switch(action.type){
      case 'INCREASE_SESSION':
        return state + 1
      case 'DECREASE_SESSION':
        return state - 1
      case 'RESET':
        return 25
      default:
        return state
        
    }
  }
  
export default sessionReducer