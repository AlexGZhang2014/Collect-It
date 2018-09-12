import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import PostsContainer from './containers/PostsContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Collect-It!</h1>
          </header>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={PostsContainer} />
          <Route exact path="/collections" component={CollectionsContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
