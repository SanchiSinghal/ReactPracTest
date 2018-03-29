import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import Details from './Details';


class Home extends React.Component {

	render() {
		return(
			<div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/scene2" component={Details} />
          </Switch>
        </BrowserRouter>
      </div>
		);
	}
}


ReactDOM.render(<Home />, document.getElementById('root'));
