import React from 'react'
import { connect } from 'react-redux';
import * as actions from "../actions";
import { Card, CardHeader, CardBody, CardImg, CardText, Row, Col } from "reactstrap";
import cpr from '../images/cpr.gif'
import sampleImage from '../images/placeimg_640_480_nature.jpg'

class SaveALife extends React.Component {
  render(){
    return(
       <>
        <div className="content">
          <Row>
            <Col md="3">
             <div>
             <Card>
               <CardImg src={sampleImage} style={{width:200,height:200}}></CardImg>
               <CardBody>
                 <CardText>
                  supporting content
                 </CardText>
               </CardBody>
             </Card>
               </div>
            </Col>
          </Row>
        </div>
      </>
    )
  }
}

export default connect(
    null,
    actions
)(SaveALife);