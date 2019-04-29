import React from 'react'
import { Card, CardHeader, CardBody, CardImg, CardText, Row, Col, Alert, Button } from "reactstrap";


class Responsiveness extends React.Component {
  render(){
    return(
     <>
     <div className="content">
        <Row style={{justifyContent:'center'}}>
          <Col md='3'>
          <Alert color='success' style={{fontSize:'36px'}}>Is the victim responsive?
               How to check responsiveness:
               Is the victim breathing AND does the victim have a pulse?
               Is the pulse definitely felt within 10 seconds?
               Shout for nearby help.
               Activate emergency response system via mobile device (if appropriate).</Alert>
          <div>
            <Row style={{justifyContent:'center'}}>
            <Button style={{fontSize:'18px'}} onClick={()=>this.props.onChange(4)}>Normal breathing, has pulse</Button>
             <Button style={{fontSize:'18px'}} onClick={()=>this.props.onChange(5)}>No normal breathing, has pulse</Button>
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

export default Responsiveness