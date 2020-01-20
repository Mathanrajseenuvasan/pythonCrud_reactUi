import React from 'react'
import * as StudentAction from './redux/action'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Table,InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class App extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      studentname:'',
      cgpa:'',
      college_code:'',            
      dob:'',
      location:'' 
    }
  }

// changeHandler = e => {
//   this.setState({[e.target.placeholder]:
//      ((e.target.placeholder === 'cgpa') || (e.target.placeholder === 'college_code')) 
//      ? (Number(e.target.value)) :e.target.value})
// }

changeHandler = (e) => {
  const {placeholder, value} = e.target
  this.setState({[placeholder]:  ((placeholder === 'cgpa') || 
      (placeholder === 'college_code')) 
       ? (Number(value)) :value})
}

forTodecimal = (e) => {
  const {placeholder, value} = e.target
  this.setState({[placeholder]: placeholder ==='cgpa' ? (Number(value)) :value})
}

formatInput = (e) => {
  const invalidChars = [ "-", "+", "e" ];
  if(invalidChars.includes(e.key)) {
    e.preventDefault();
  }

}

submitHandler = e => {
  e.preventDefault()
  this.props.StudentAction.postEmployee(this.state)
  console.log("this.state",this.state)
}

componentDidMount(){
  this.props.StudentAction.getAllEmployee()
}
  
componentDidUpdate(){
  // console.log("--- componentDidUpdate ---")
}

  render(){
    // console.log("1-1-1-1", this.props)
    const student = this.props.getall
    // console.log("--- stunet --", student)
    // {student && student.length >0 && student.map((stu) =>
    //   console.log("222222", stu)
    // )}

    const {studentname,cgpa,college_code,dob,location}=this.state

    return(
  
      <div>
      
      <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>studentname</th>
              <th>cgpa</th>
              <th>college_code</th>
              <th>dob</th>
              <th>location</th>   
            </tr>
          </thead>
            {student && student.length >0 && student.map((stu) =>
            <tbody>
            <tr>
              <td>{stu.id}</td> 
              <td>{stu.studentname}</td>  
              <td>{stu.cgpa}</td>
              <td>{stu.college_code}</td>
              <td>{stu.dob}</td>
              <td>{stu.location}</td> 
            </tr>
            </tbody>
              )}
        </Table>

        <form onSubmit={this.submitHandler}>
        <InputGroup>
        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
        <Input placeholder="studentname" value={studentname} onChange={this.changeHandler} />
        </InputGroup>

        <InputGroup>
        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
        <Input placeholder="cgpa" type="number" onKeyDown={ this.formatInput } 
          value={cgpa} onChange={this.forTodecimal} />
        </InputGroup>

        <InputGroup>
        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
        <Input placeholder="college_code" type="number" onKeyDown={ this.formatInput } 
          value={college_code} onChange={this.changeHandler} />
        </InputGroup>

        <InputGroup>
        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
        <Input placeholder="dob" value={dob} onChange={this.changeHandler} />
        </InputGroup>

        <InputGroup>
        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
        <Input placeholder="location" value={location} onChange={this.changeHandler} />
        </InputGroup><br/>

        <Button  color="primary">Submit</Button>
        </form>

     </div>
    )
  }

}

class A extends React.Component{
  render(){
    const{a}=this.props
    return(
      <div>
      <h1>{a}</h1>
      </div>
    )
  }

}

function mapStateToProps(state, props){
  return{
    getall: state.StudentReducer.getallsucceeded,
    post: state.StudentReducer.success
  }
}

function mapDispatchToProps(dispatch){
  return{
    StudentAction: bindActionCreators(StudentAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)