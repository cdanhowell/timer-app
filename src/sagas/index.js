import { put, take, fork } from 'redux-saga/effects'

import { TIMER_PULSE } from '../constants'

function* timerPulse () {

  yield put({
    type: TIMER_PULSE,
    pulseValue: 1000
  })
}


export default function* root () {
  const { store } = yield take('APP_INIT')
  yield fork(timerPulse, store.getState)
}
