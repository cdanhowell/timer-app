import React, {Component} from 'react'
import path from 'path'

import StandardTimer from '../StandardTimer'
import CountdownTimer from '../CountdownTimer'
import { COUNTDOWN_TIMER, STANDARD_TIMER, NEW_TYPE_NOT_SUPPORTED, TIMER_STARTED, TIMER_STOPPED } from '../../constants'
import CommandRow from '../commandRow'

require(path.join('!style!css!sass!', __dirname, '/timerContainer.scss'))

const supportedTypes = [
  COUNTDOWN_TIMER,
  STANDARD_TIMER
]

class TimerContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      timerType: this.props.timerType || STANDARD_TIMER
    }
  }

  changeTimerType (newType) {
    // newType is not in supportedTypes array
    if (supportedTypes.indexOf(newType) === -1) {
      throw NEW_TYPE_NOT_SUPPORTED
    }

    this.setState({
      timerType: newType
    })
  }

  render () {
    let timer = (
      this.state.timerStatus === STANDARD_TIMER
      ? <StandardTimer status={this.state.timerStatus} />
      : <CountdownTimer status={this.state.timerStatus} countFrom={this.state.timerTarget} />
    )

    return (
      <div>
        <div><CommandRow /></div>

        <div>{timer}</div>

      </div>
    )
  }
}

export default TimerContainer
