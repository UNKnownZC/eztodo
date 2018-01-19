import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import TodoApp from './TodoApp';
import {Route, NavLink, HashRouter} from "react-router-dom";
import './index.css';


class Home extends React.Component{
	render(){
		return (
			<HashRouter>
				<div id = "main_container">
					<header>
						<ul>
							<li><NavLink exact to="/">About</NavLink></li>
							<li><NavLink to="/TodoApp">EZTODO</NavLink></li>
						</ul>
					</header>
				<div className = "content">
					<Route exact path="/" component={About}/>
					<Route path="/TodoApp" component={TodoApp}/>
				</div>
					<footer> Produced By ZK @2018</footer>
				</div>
			</HashRouter>		
		)
	}
}

ReactDOM.render(<Home />,
	document.getElementById('root')
);