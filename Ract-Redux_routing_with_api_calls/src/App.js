import React from 'react';


import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import Getall from './Container/getall';
import Post from './Container/post';
import Put from './Container/put';

import {
    BrowserRouter as Router,
    Switch,
    Route,  
  } from "react-router-dom";

import configureStore from './Redux/store/configure-store.';

const store = configureStore();

class App extends React.Component {

    render(){
        return(
            <Provider store={store}>
            <Router>
                <Switch>

                <Route exact path="/" component={Getall} />
                <Route exact path="/post" component={Post} />
                <Route exact path="/put" component={Put} />
                    
                </Switch>

            </Router>
            </Provider>
     
        );
    }

}

export default App;




