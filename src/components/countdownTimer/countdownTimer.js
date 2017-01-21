import React, {Component} from 'react'

import { TIMER_STARTED, TIMER_STOPPED } from '../../constants'
import CommandRow from '../commandRow'

class CountdownTimer extends Component {

  constructor (props) {
    super(props)

    this.state = {
      timerStatus: (this.props.startImmediate) ? TIMER_STARTED : TIMER_STOPPED,
      timerTarget: 0
    }
  }

  startTimer () {
    this.setState({
      timerStatus: TIMER_STARTED
    })
  }

  stopTimer () {
    this.setState({
      timerStatus: TIMER_STOPPED
    })
  }

  resetTimer () {

  }

  changeTimerTarget (newTarget) {
    this.setState({
      timerTarget: newTarget
    })
  }

  render () {
    <div>

      <CommandRow />
    </div>
  }
}

export default CountdownTimer
