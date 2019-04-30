import React from 'react'
import { Card, CardHeader, CardBody, CardImg, CardText, Row, Col, Alert, Button } from "reactstrap";
import {textToSpeech} from '../../helpers/textToSpeech'
import VoiceCard from '../../views/VoiceCard'

var prompt = 'Check your surroundings. Is the scene safe?'
var prompt2 = 'Try protect the child from unsafe conditions'
const question = '...Yes or No'

class SceneSafety extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      unsafe : true
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
          <Alert color='success' style={{fontSize:'42px'}}>{(this.state.unsafe)?prompt:prompt2}</Alert>
          <Card>
            <CardBody>
              <CardImg src='https://s3.us-east-2.amazonaws.com/save-a-life/checkforsafety.gif' />
            </CardBody>
          </Card>
          </Col>
        </Row>
        <Row>
          <Col md='8'>
          <div>
            <Row style={{justifyContent:'center', marginBottom:'200px'}}>
              {(this.state.unsafe)?
                      <><Button style={{fontSize:'32px'}} onClick={()=>this.props.onChange(3)}>Yes</Button>
                      <Button style={{fontSize:'32px'}} onClick={()=>this.setState({unsafe:false})}>No</Button></>
                      :  <Button style={{fontSize:'32px'}} onClick={()=>this.props.onChange(3)}>Continue</Button>
            }
            </Row>
          </div>
          </Col>
          </Row>
    </div>
      </>
    )
  }
}

export default SceneSafety