import React from 'react'
import { Card, CardHeader, CardBody, CardImg, CardText, Row, Col, Alert, Button } from "reactstrap";


class SceneSafety extends React.Component {
  render(){
    return(
     <>
     <div className="content">
        <Row style={{justifyContent:'center'}}>
          <Col md='3'>
          <Alert color='success' style={{fontSize:'42px'}}>Check your surroundings. Is the scene safe?</Alert>
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

export default SceneSafety