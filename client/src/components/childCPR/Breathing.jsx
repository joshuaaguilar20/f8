import React from 'react'
import { Card, CardHeader, CardBody, CardImg, CardText, Row, Col, Alert, Button } from "reactstrap";
import {textToSpeech} from '../../helpers/textToSpeech'

const prompt = 'Check your surroundings. Is the scene safe?'

class Breathing extends React.Component {

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
          <Col md='3'>
          <Card>
            <CardBody>
              <CardTitle style={styles.cardTitle}>{prompt}</CardTitle>
            </CardBody>
          </Card>
          <div>
            <Row style={{justifyContent:'center', marginBottom:'200px'}}>
             <Button style={{fontSize:'32px'}} onClick={()=>this.props.onChange(3)}>Yes</Button>
             <Button style={{fontSize:'32px'}} onClick={()=>this.props.onChange(2)}>No</Button>
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

export default Breathing