import React from 'react';


import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import page1 from './Container/page1';
import page2 from './Container/page2';
import todo from './Container/todo';

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

                <Route exact path="/" component={page1} />
                <Route exact path="/page2" component={page2} />
                <Route exact path="/todo" component={todo} />
                    
                </Switch>

            </Router>
            </Provider>
     
        );
    }

}

export default App;




// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
// // 2nd Example: Nested Routing