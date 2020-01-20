import React from 'react'
import * as StudentAction from './redux/action'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Card,CardBody, Table,InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';



class App extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      response_code:'',
      http_method:'',
      name:'',            
      description:'',
      showMe:true,
      showMe1:true
    }
  }

  operation(){
    this.setState({
      showMe:false
    })
  }

  operation1(){
    this.setState({
      showMe1:false
    })
  }

  changeHandler = e => {
    this.setState({[e.target.placeholder]:
    e.target.value})
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.StudentAction.postEmployee(this.state)
  }

  updateHandler = e => {
    e.preventDefault()
    this.props.StudentAction.updateData(e.target.value, this.state)
  }

  deleteHandler = e => {
    e.preventDefault()
    this.props.StudentAction.deleteData(e.target.value)
  }

  componentDidMount(){
    this.props.StudentAction.getAllEmployee()
  }
    
  componentDidUpdate(){

  }

    render(){

      const student = this.props.getall
      const {response_code,http_method,name,description}=this.state

      return(
      
        <div class="container-fluid">
        <Card >
        <Table>
            <thead>
              <tr>
                <th>id</th>
                <th>response_code</th>
                <th>http_method</th>
                <th>name</th>
                <th>description</th>  
                <th></th>
              </tr>
            </thead>
            {student && student.data && student.data.results.map((err) =>
              <tbody>
              <tr>
                <td>{err.id}</td> 
                <td>{err.response_code}</td>  
                <td>{err.http_method}</td>
                <td>{err.name}</td>
                <td>{err.description}</td>
                <td>
                      <Button onClick={this.deleteHandler} value={err.id} >Delete</Button>
                      {
                        this.state.showMe1?
                      <div>
                      <UncontrolledDropdown onClick={()=>this.operation()}>
                      <DropdownToggle caret>
                        Update
                      </DropdownToggle>
                      <DropdownMenu>

                      <form>
                      <Input placeholder="response_code" value={response_code} onChange={this.changeHandler} />

                      <Input placeholder="http_method"
                        value={http_method} onChange={this.changeHandler} />

                      <Input placeholder="name" 
                      value={name} onChange={this.changeHandler} />

                      <Input placeholder="description" value={description} onChange={this.changeHandler} />

                      <Button onClick={this.updateHandler}  value={err.id}>Update</Button>
                      </form>

                      </DropdownMenu>
                    </UncontrolledDropdown>
                    </div>
                    :null
                  }
                    </td>
              </tr>
              </tbody>
                )}
          </Table>
          {
            this.state.showMe?
          <div>
          <UncontrolledDropdown onClick={()=>this.operation1()}>
          <DropdownToggle color="primary" caret>
            Add
          </DropdownToggle>
          <DropdownMenu>

          <form onSubmit={this.submitHandler}>
          <InputGroup>
          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
          <Input placeholder="response_code" value={response_code} onChange={this.changeHandler} />
          </InputGroup>

          <InputGroup>
          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
          <Input placeholder="http_method"
            value={http_method} onChange={this.changeHandler} />
          </InputGroup>

          <InputGroup>
          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
          <Input placeholder="name" 
            value={name} onChange={this.changeHandler} />
          </InputGroup>

          <InputGroup>
          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
          <Input placeholder="description" value={description} onChange={this.changeHandler} />
          </InputGroup>

          <Button  color="primary">Submit</Button>
          </form>


          </DropdownMenu>
          </UncontrolledDropdown>
          </div>
            :null
          }
          </Card>
      </div>
      
      )
    }

  }

  function mapStateToProps(state, props){
    return{
      getall: state.StudentReducer.getallsucceeded,
      // post: state.StudentReducer.success,
    }
  }

  function mapDispatchToProps(dispatch){
    return{
      StudentAction: bindActionCreators(StudentAction, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App)