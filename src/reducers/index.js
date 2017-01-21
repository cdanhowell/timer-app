import { combineReducers } from 'redux'
import * as consts from '../consts'

const timerInitialState = {
  timerStatus: consts.TIMER_STOPPED,
  timerTarget: 0,
  timerValue: 0
}

const timerReducer = (state = timerInitialState, action) => {
  switch (action.type) {
    case consts.TIMER_PULSE:
      return {
        ...state,
        timerValue: state.timerValue + action.pulseValue
      }
    default:
      return state
  }
}

export default combineReducers({
  timerReducer
})
