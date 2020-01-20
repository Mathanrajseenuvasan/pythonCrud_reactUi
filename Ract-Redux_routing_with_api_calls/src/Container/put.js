import React,{Component} from 'react';
import * as errorAction from '../Redux/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class Put extends Component{
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

    componentDidMount(){
        console.log('this.propssss', this.props)
        const getid = this.props
        const datas = getid && getid.location && getid.location.state && getid.location.state.err
        console.log("datas",datas)
        this.setState({
            response_code:datas.response_code,
            http_method:datas.http_method,
            name:datas.name,
            description:datas.description
        })
        // const {id } = this.props.location
        // this.props.errorAction.geterror(id)
    }

    submitHandler = e => {
    e.preventDefault()
    this.props.errorAction.updateError(e.target.value,this.state)
    // console.log(this.state)
    this.props.history.push('/')
    window.location.reload('/')
    }

    render(){
        const getid = this.props
        const id = getid && getid.location && getid.location.state && getid.location.state.err.id
        // const { id } = this.props.location
        const {response_code,http_method,name,description}=this.state
        // console.log("ssss",id)
        // console.log("render", this.props.get)
        // const error = this.props.get
        // error && error.data && error.data.error.response_code

        return(
            <div>
            <h1>Put Method</h1>

            <form  >
            response_code: <input name="response_code" value={response_code} onChange={this.changeHandler} /> <br />
            http_method: <input name="http_method" value={http_method} onChange={this.changeHandler} /> <br />
            name: <input name="name" value={name} onChange={this.changeHandler} /> <br />
            description: <input name="description" value={description} onChange={this.changeHandler} /> <br />
            <button value={id} onClick={this.submitHandler}>Submit</button> 

            <button onClick={()=>this.props.history.push('/')}>Previous</button><br /><br />
            </form>

            </div>
            );
        }
    }

function mapStateToProps(state, props){
    return{
        put: state.errorReducer.put
        // get: state.errorReducer.get
    }
    }

function mapDispatchToProps(dispatch){
    return{
        errorAction: bindActionCreators(errorAction, dispatch)
    }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Put)