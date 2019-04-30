import React from 'react'
import {Alert, Row, Col } from 'reactstrap'
import { textToSpeech } from '../../helpers/textToSpeech'

var prompt = 'Thank you for trying Child CPR Simulator'

class ThankYou extends React.Component {
  componentDidMount(){
    textToSpeech(prompt)
  }
  render(){
    return(
      <>
      <div className="content">
      <Row>
        <Col md='8'><Alert color='success' style={{fontSize:42}}>{prompt}</Alert></Col>
      </Row>
        </div>
      </>
    )
  }
}

export default ThankYou