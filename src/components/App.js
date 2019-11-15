import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Document from '../containers/Document';
// import styles from './Main.css';
import SplashPage from './markdown/SplashPage';
import Header from './markdown/Header';

export default function App() {
  return (
    <>
      <Header /> 
      <Router>
        <Switch>
          <Route path="/" component={Document} />
          <Route path="/about" component={SplashPage} />
        </Switch>
      </Router>
    </>
  );
}
