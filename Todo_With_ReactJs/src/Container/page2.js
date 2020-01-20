import React,{Component} from 'react';

export default class Page2 extends Component{
    render(){
        return(
            <div>
            <h1>Page2</h1>
            <button onClick={()=>this.props.history.push('/')}>Previous</button><br /><br />
            <button onClick={()=>this.props.history.push('/todo')}>Next</button>
            </div>
        );
    }
}