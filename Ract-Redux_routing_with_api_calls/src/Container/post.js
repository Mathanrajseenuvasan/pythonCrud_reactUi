import React,{Component} from 'react';
import * as errorAction from '../Redux/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Post extends Component{
    constructor (props){
        super(props)
        this.state = {
          response_code:'',
          http_method:'',
          name:'',            
          description:''
        }
      }
    
    changeHandler = e => {
        this.setState({[e.target.name]:
        e.target.value})
        }

    submitHandler = e => {
        e.preventDefault()
        this.props.errorAction.posterror(this.state)
        alert("Submitted")
        window.location.reload();
        console.log(this.state)
        }

    render(){
        const {response_code,http_method,name,description}=this.state
        return(
            <div>
            <h1>Post Method</h1>

            <form onSubmit={this.submitHandler} >
            response_code: <input name="response_code" value={response_code} onChange={this.changeHandler} /> <br />
            http_method: <input name="http_method" value={http_method} onChange={this.changeHandler} /> <br />
            name: <input name="name" value={name} onChange={this.changeHandler} /> <br />
            description: <input name="description" value={description} onChange={this.changeHandler} /> <br />
            <button>Submit</button> 
            <button onClick={()=>this.props.history.push('/')}>Previous</button><br /><br />
            </form>
            
            
            </div>
        );
    }
}

function mapStateToProps(state, props){
    return{
        post: state.errorReducer.post
    }
    }

function mapDispatchToProps(dispatch){
    return{
        errorAction: bindActionCreators(errorAction, dispatch)
    }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Post)