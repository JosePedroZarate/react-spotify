
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          By adsoft
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./login/login";
import AddTutorial from "./components/add-tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import History from './components/historial';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-orange">
          <a href="/tutorials" className="navbar-brand">
            Spotify
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
              Playlist
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add Playlist
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/historial"} className="nav-link">
              Historial
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <h2>⠀⠀⠀⠀⠀⠀⠀⠀⠀</h2>
          <Switch>

            <Route exact path="/" component={Login}/>

            <Route exact path= "/tutorials" component={TutorialsList} />
            <Route exact path= "/historial" component={History} />
            <Route exact path="/add" component={AddTutorial} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;