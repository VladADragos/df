import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Stocks } from './components/Stocks';
import { Articles } from './components/Articles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Article from './components/Article';
import SidePanel from './components/SidePanel';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Stocks width={window.innerWidth - 6} height={20} />
        <Switch>
          <Route exact path='/'>
            <div className='Landing-container'>
              <main className='Main'>
                <Articles />
              </main>
              <SidePanel />
            </div>
          </Route>
          <Route path='/article/:articleName'>
            <Article />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
