import React,{Component} from 'react';

export default class Page1 extends Component{
    render(){
        return(
            <div>
            <h1>Page1</h1>
            <button onClick={()=>this.props.history.push('/page2')}>Next</button>
            </div>
        );
    }
}