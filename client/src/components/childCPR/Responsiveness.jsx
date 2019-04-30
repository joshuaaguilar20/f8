import React from 'react'
import { Card, CardHeader, CardBody, CardImg, CardText, Row, Col, Alert, Button, CardTitle } from "reactstrap";
import {textToSpeech} from '../../helpers/textToSpeech'
import  VoiceCard  from '../../views/VoiceCard'

var prompt = 'Is the victim responsive? How to check responsiveness: Is the victim breathing AND does the victim have a pulse? Is the pulse definitely felt within 10 seconds? Shout for nearby help. Activate emergency response system via mobile device (if appropriate).'
var question = 'Is there normal breathing and pulse... or is there no normal breathing but no pulse... or is there no breathing, only gasping and no pulse'
var prompt2 = 'Activate emergency response system (if not already done). Return the victim and monitor until emergency responders arrive'
var prompt3 = 'Provide rescue breathing: 1 breath every 3-5 seconds, or and 12-20 breaths/min. Add compression if pulse remains under 60/min with signs or poor perfusion. Activate emergency response system (if not already done)  after 2 mins. Continue rescue breathing: check pulse about every 2 mins. If no pulse begin CPR (got to "CPR" box)'
class Responsiveness extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      victim : ''
    }
  }
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
          <Card>
            <CardBody>
             { (this.state.victim === '') ?  <CardTitle style={styles.cardTitle}>{prompt}</CardTitle>
              : (this.state.victim === 'breathing') ?  <CardTitle style={styles.cardTitle}>{prompt2}</CardTitle>
              : (this.state.victim === 'pulse') ?  <CardTitle style={styles.cardTitle}>{prompt3}</CardTitle>
              : null
             }
             <CardImg src='https://s3.us-east-2.amazonaws.com/save-a-life/childBreathingPulse.gif' />
            </CardBody>
          </Card>
          </Col>
        </Row>
        <Row>
          <Col md='8'>

          <div>
            <Row style={{justifyContent:'center', marginBottom:'200px'}}>
            <Button style={{fontSize:'18px'}} onClick={()=>this.setState({victim: 'breathing'})}>Normal breathing, has pulse</Button>
             <Button style={{fontSize:'18px'}} onClick={()=>this.setState({victim: 'pulse'})}>No normal breathing, has pulse</Button>
             <Button style={{fontSize:'18px'}} onClick={()=>this.props.onChange(6)}>No breathing or only gasping, no pulse</Button>
            </Row>
            <Row style={{height:'100px'}}></Row>
          </div>
          </Col>
          </Row>
    </div>
      </>
    )
  }
}

const styles = {
  cardTitle : {
    fontSize: 36,
    fontWeight: 'bold'
  }
}

export default Responsiveness