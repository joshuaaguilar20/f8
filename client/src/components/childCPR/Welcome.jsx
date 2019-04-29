import React from 'react'
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody, CardImg, CardText, Row, Col, Alert, Button } from "reactstrap";

class SaveALife extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
       <>
        <div className="content">
        <Row style={{justifyContent:'center'}}>
          <Col md='3'>
          <Alert color='success' style={{fontSize:'42px'}}>Welcome to Child CPR simulation. Are you ready to begin?</Alert>
          <div>
            <Row style={{justifyContent:'center'}}>
             <Button style={{fontSize:'32px'}} onClick={()=>this.props.onChange(2)}>Yes</Button>
             <Button style={{fontSize:'32px'}} onClick={()=>this.props.onChange(1)}>No</Button>
            </Row>
          </div>
          </Col>
        </Row>
          {/* <Row style={{justifyContent:'center'}}>
            <Col md="3">
             <div>
             <Card>
               <CardImg src={cpr} style={{width:'100%',height:200}}></CardImg>
               <CardBody>
                 <CardText>
                  supporting content
                 </CardText>
               </CardBody>
             </Card>
               </div>
            </Col>
          </Row> */}
        </div>
      </>
    )
  }
}

export default SaveALife