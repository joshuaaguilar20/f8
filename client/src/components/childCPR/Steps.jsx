

export const Steps = (text,step) => {
 return (
  <div className="content">
  <Row style={{justifyContent:'center'}}>
    <Col md='3'>
    <Alert color='success' style={{fontSize:'42px'}}>{text}</Alert>
    <div>
      <Row style={{justifyContent:'center'}}>
       <Button style={{fontSize:'32px'}} onClick={()=>this.props.onChange(3)}>Yes</Button>
       <Button style={{fontSize:'32px'}} onClick={()=>this.props.onChange(2)}>No</Button>
      </Row>
    </div>
    </Col>
    </Row>
</div>
 )
}

