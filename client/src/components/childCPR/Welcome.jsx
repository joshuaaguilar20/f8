import React from 'react'
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody, CardImg, CardText, Row, Col, Alert, Button } from "reactstrap";
import { textToSpeech } from '../../helpers/textToSpeech'
import  VoiceCard  from '../../views/VoiceCard'

const prompt = 'Welcome to Child CPR simulation. Are you ready to begin?'
const question = '...Yes or No?'

class SaveALife extends React.Component {
  constructor(props){
    super(props)
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
          </Col>
        </Row>
        <Row >
          <Col md='8'>
          <Alert color='success' style={{fontSize:42}}>{prompt}</Alert>
          <div>
            <Row style={{justifyContent:'center', marginBottom:'200px'}}>
             <Button style={{fontSize:'32px'}} onClick={()=>this.props.onChange(2)}>Yes</Button>
             <Button style={{fontSize:'32px'}} onClick={()=>this.props.onChange(0)}>No</Button>
            </Row>
          </div>
          </Col>
        </Row>
        </div>
      </>
    )
  }
}

export default SaveALife