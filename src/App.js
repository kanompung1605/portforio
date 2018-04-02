import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Newhomepage from './components/Page/Newhomepage';



class App extends Component {
    render() {
        return (
            <div>
              <Route path='/' component={Newhomepage} />
            </div>



        );
    }
}
export default App;
