import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as getAllemployee from './Redux/actions';
// import employeeReducer from './Redux/reducer/Employee/employeeReducer'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            HELLO: "helloworld",
            a : "I AM A COMPONENT"
        }
    }
    componentDidMount() {
        console.log('componentDidMountthis==============', this.setState({ HELLO: "Welcome"}))
        this.props.getAllemployee.getAllemployee()
    }
    static getDerivedStateFromProps() {
        console.log('GETDERIVEDSTATEFROM==========>>>>>>><')
    }
    componentDidUpdate() {
        console.log('COMPONENDIDUPDATE=======>>>>>')
    }
    render() {
        console.log(this.props)
        const { HELLO,a } = this.state;
        console.log('RENDER=======>>>>', HELLO)
        return (
            <div>
                <A a={a}/>
                <h1>{HELLO}</h1>
            </div>
        )
    }
}
class A extends React.Component {
    render() {
        const {a} = this.props
        return (
            <h1>{a}</h1>
        )
    }
}

function mapStateToProps(state,props){
    return{
       allEmployee: state.employeeReducers.employeesucceeded
    }
}
function mapDispatchToProps(dispatch){
    return{
        getAllemployee:bindActionCreators(getAllemployee,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)