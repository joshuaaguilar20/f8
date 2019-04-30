import React from 'react'
import { Card, CardHeader, CardBody, CardImg, CardText, Row, Col, Alert, Button } from "reactstrap";
import {textToSpeech} from '../../helpers/textToSpeech'
import { text } from 'body-parser';
import  VoiceCard  from '../../views/VoiceCard'

var prompt = 'If you are alone: Begin cycles of 30 compressions and 2 breaths. Use 15:2 ratio if second rescuer arrives. Use Automatic Emergency Defibrillator(AED) as soon as it is available. Is an AED available?'
const question = '...Yes or No?'

class ChildCPR extends React.Component {

  componentDidMount(){
    textToSpeech(prompt)
    textToSpeech(question)
  }
  render(){
    return(
     <>
     <div className="content">
     <Row>
          <Col md='8'>
          <VoiceCard/>
          </Col>
        </Row>
        <Row>
          <Col md='8'>
          <Alert color='success' style={{fontSize:'42px'}}>{prompt}</Alert>
          <div>
            <Row style={{justifyContent:'center', marginBottom:'200px'}}>
             <Button style={{fontSize:'32px'}} onClick={()=>this.props.onChange(9)}>Yes</Button>
             <Button style={{fontSize:'32px'}} onClick={()=>this.props.onChange(10)}>No</Button>
            </Row>
          </div>
          </Col>
          </Row>
    </div>
      </>
    )
  }
}

export default ChildCPR