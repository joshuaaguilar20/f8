import React from 'react'
import { Card, CardHeader, CardBody, CardImg, CardText, Row, Col, Alert, Button, CardTitle } from "reactstrap";
import {textToSpeech} from '../../helpers/textToSpeech'
import { text } from 'body-parser';
import  VoiceCard  from '../../views/VoiceCard'

var prompt = 'Continue using CPR'

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
          <Card>
            <CardBody>
              <CardTitle style={styles.cardTitle}>{prompt}</CardTitle>
            </CardBody>
          </Card>
          </Col>
        </Row>
        <Row>
          <Col md='8'>
          <div>
            <Row style={{justifyContent:'center', marginBottom:'200px'}}>
             <Button style={{fontSize:'32px'}} onClick={()=>this.props.onChange(1)}>Restart</Button>
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

export default useAED