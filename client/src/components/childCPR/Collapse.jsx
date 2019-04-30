import React from 'react'
import { Card, CardHeader, CardBody, CardImg, CardText, Row, Col, Alert, Button, CardTitle } from "reactstrap";
import {textToSpeech} from '../../helpers/textToSpeech'
import  VoiceCard  from '../../views/VoiceCard'

var prompt = 'Did the victim collapse?'
const question = '...Yes or No?'

class Collapse extends React.Component {

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
              <CardTitle style={styles.cardTitle}>{prompt}</CardTitle>
              <CardImg src='https://s3.us-east-2.amazonaws.com/save-a-life/childFall.gif' />
            </CardBody>
          </Card>
          </Col>
        </Row>
        <Row>
          <Col md='8'>
          <div>
            <Row style={{justifyContent:'center', marginBottom:'200px'}}>
             <Button style={{fontSize:'32px'}} onClick={()=>this.props.onChange(7)}>Yes</Button>
             <Button style={{fontSize:'32px'}} onClick={()=>this.props.onChange(8)}>No</Button>
            </Row>
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

export default Collapse