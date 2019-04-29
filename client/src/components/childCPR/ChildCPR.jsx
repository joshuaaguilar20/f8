import React from 'react'
import { Card, CardHeader, CardBody, CardImg, CardText, Row, Col, Alert, Button } from "reactstrap";


class ChildCPR extends React.Component {
  render(){
    return(
     <>
     <div className="content">
        <Row style={{justifyContent:'center'}}>
          <Col md='3'>
          <Alert color='success' style={{fontSize:'42px'}}>If you are alone: Begin cycles of 30 compressions and 2 breaths.
               Use 15:2 ratio if second rescuer arrives.
               Use Automatic Emergency Defibrillator(AED) as soon as it is available. Is an AED available?</Alert>
          <div>
            <Row style={{justifyContent:'center'}}>
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

export default ChildCPR