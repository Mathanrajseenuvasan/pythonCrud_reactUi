import React,{Component} from 'react';
import List from './List';

export default class Page1 extends Component{
    constructor(props) {
        super(props);
        this.state = {
          term: '',
          items: []
        };
      }

    onChange = (event) => {
    this.setState({term: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
          term: '',
          items: [...this.state.items, this.state.term]
        });
      }

    render(){
        return(
            <div>
            <h1>Todo</h1>

            <form className="App" onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <button>Submit</button>
            </form>
            <List items={this.state.items} />

            <button onClick={()=>this.props.history.push('/')}>Previous</button><br /><br />
            </div>
        );
    }
}