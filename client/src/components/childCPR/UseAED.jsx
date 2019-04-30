import React from 'react'
import { Card, CardHeader, CardBody, CardImg, CardText, Row, Col, Alert, Button } from "reactstrap";
import {textToSpeech} from '../../helpers/textToSpeech'
import { text } from 'body-parser';
import  VoiceCard  from '../../views/VoiceCard'

var prompt = 'Use AED and follow instructions'

class useAED extends React.Component {

  componentDidMount(){
    textToSpeech(prompt)
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
             <Button style={{fontSize:'32px'}} onClick={()=>this.props.onChange(1)}>Return to Main Menu</Button>
            </Row>
          </div>
          </Col>
          </Row>
    </div>
      </>
    )
  }
}

export default useAED