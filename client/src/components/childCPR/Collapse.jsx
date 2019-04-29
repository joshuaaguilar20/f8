import React from 'react'
import { Card, CardHeader, CardBody, CardImg, CardText, Row, Col, Alert, Button } from "reactstrap";
import {textToSpeech} from '../../helpers/textToSpeech'

var prompt = 'Did the victim collapse?'

class Collapse extends React.Component {

  componentDidMount(){
    textToSpeech(prompt)
  }
  render(){
    return(
     <>
     <div className="content">
        <Row style={{justifyContent:'center'}}>
          <Col md='3'>
          <Alert color='success' style={{fontSize:'42px'}}>{prompt}</Alert>
          <div>
            <Row style={{justifyContent:'center'}}>
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

export default Collapse