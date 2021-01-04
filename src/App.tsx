import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

/**
 * Add your components here.
 */
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/404';

function App() {
  return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/about" component={About} />
			<Route component={NotFound}/>
		</Switch>
  );
}

export default App;
